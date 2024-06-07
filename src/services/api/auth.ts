import { useApi } from "../hooks/useApi";
import { LoginForm } from "../interfaces/LoginForm";

const api = useApi();

export async function registerUser(newUser: any) {
  try {
    const { data } = await api.post("auth/register", newUser);
    return data;
  } catch (error: any) {
    throw error;
  }
}

export async function loginUser(values: LoginForm) {
  try {
    const { data } = await api.post("auth/login", values);
    return data.data;
  } catch (error) {
    return error;
  }
}

export async function verifyConfirmToken(token: string) {
  try {
    return await api.get(`auth/register-confirm/${token}`);
  } catch (error) {
    throw error;
  }
}
