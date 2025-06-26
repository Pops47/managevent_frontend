import { jwtDecode, JwtPayload } from "jwt-decode";
import { UserRole } from "../interfaces/UserInterface";

interface CustomJwtPayload extends JwtPayload {
  id: string;
  role: UserRole;
  email: string;
}
export function useLoggedUser() {
  const authToken = localStorage.getItem("authToken");
  if (!authToken) {
    return null;
  }
  return jwtDecode<CustomJwtPayload>(authToken);
}
