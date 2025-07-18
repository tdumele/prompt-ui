import { useKeycloak } from "@react-keycloak/web";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
 const { keycloak } = useKeycloak();
 const navigate = useNavigate();

 const isLoggedIn = keycloak.authenticated;
 
 return isLoggedIn ? children : navigate("/");
};

export default PrivateRoute;