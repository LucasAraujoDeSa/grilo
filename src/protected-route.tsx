import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";
import { revogateAccess } from "./shared/functions/revogate-access";

export const ProtectedRoute: React.FC = () => {
  const hasToken = Cookies.get("@access_token");
  if (!hasToken) {
    revogateAccess();
    return <Navigate to="/signin" replace />;
  }
  return <Outlet />;
};
