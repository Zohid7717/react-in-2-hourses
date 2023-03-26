import { useContext } from "react";
import { AuthContext } from "../compoments/providers/AuthProvider";

export const WithAuth = Component => props => {

  const { user } = useContext(AuthContext);
  if (!user) return <p>You are not authorized to view this page</p>

  return <Component {...props} />;
};