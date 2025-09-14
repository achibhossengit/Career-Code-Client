import { use } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, authLoading } = use(AuthContext);
  const location = useLocation();

  if (authLoading)
    return <div className="loading loading-spinner loading-md"></div>;

  if (!user)
    return <Navigate state={location.pathname} to={"/sign-in"}></Navigate>;

  return children;
};

export default PrivateRoutes;
