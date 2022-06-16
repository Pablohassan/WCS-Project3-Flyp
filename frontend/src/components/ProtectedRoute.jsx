import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { UserContext } from "@components/UserContextProvider";

export default function ProtectedRoute({ children }) {
  // On récupère le contexte de l'utilisateur
  const { user } = useContext(UserContext);

  // Si aucun utilisateur n'existe dans le contexte,
  // on redirige vers le formulaire de login
  if (!user) {
    return <Navigate to="/" />;
  }

  // Sinon on renvoie les enfants de la route (les pages)
  return children;
}
