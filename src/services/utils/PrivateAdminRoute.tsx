import { Navigate, Outlet } from "react-router-dom";

export default function PrivateAdminRoute() {
  //AJOUTER la logique pour vérifier si l'utilisateur est un admin ou non
  const isAdmin = true;
  //
  return isAdmin ? <Outlet /> : <Navigate to="/event" />;
}
