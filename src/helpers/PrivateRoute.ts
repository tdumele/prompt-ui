import { useKeycloak } from "@react-keycloak/web";
import type { ReactNode } from "react";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
 const { keycloak } = useKeycloak();
 const isLoggedIn = keycloak.authenticated;
 
 return isLoggedIn ? children : null;
};

export default PrivateRoute;