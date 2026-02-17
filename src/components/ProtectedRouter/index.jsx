import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Spinner } from "../Spinner";
import { useNavigate } from "react-router";

//navigate serve para redirecionar o usuario para outra rota automaticamente

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/auth/login");
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!isAuthenticated) {
    return null;
  }

  return children;
};
