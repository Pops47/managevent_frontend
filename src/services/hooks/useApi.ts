import axios, { AxiosInstance } from "axios";

export function useApi() {
  const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
  });

  api.interceptors.request.use((config) => {
    //Ajouter le Token dans le header
    const token = localStorage.getItem("authToken");
    token ? (config.headers["Authorization"] = "Bearer " + token) : "";
    return config;
  });

  api.interceptors.response.use(
    (response) => response,

    async (error) => {
      if (error.response && error.response.status === 401) {
        // Tentative de rafraîchissement du token
        const refreshToken = localStorage.getItem("refreshToken");
        if (refreshToken) {
          try {
            const response = await axios.post(
              `${import.meta.env.VITE_BACKEND_URL}/auth/refresh-token`,
              {},
              {
                headers: {
                  Authorization: `Bearer ${refreshToken}`,
                },
              }
            );

            // Si la requête réussit, mettez à jour le token et réessayez la requête originale
            if (response.data.token) {
              localStorage.setItem("authToken", response.data.token);
              error.config.headers["Authorization"] = `Bearer ${response.data.token}`;
              return axios(error.config);
            }
          } catch (refreshError) {
            // Si le rafraîchissement échoue, supprimez les tokens
            localStorage.removeItem("authToken");
            localStorage.removeItem("refreshToken");
          }
        }
      }
      if (error.response && error.response.status === 500) {
      }
      return Promise.reject(error);
    }
  );

  return api;
}
