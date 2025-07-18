import { ReactKeycloakProvider } from "@react-keycloak/web";
// @ts-ignore
import keycloak from "./Keycloak";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import PrivateRoute from "./helpers/PrivateRoute";
import { StrictMode } from "react";
import { LoginPage } from "./pages/LoginPage/LoginPage";



function App() {

  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/chat" element={<PrivateRoute><HomePage /></PrivateRoute>} />
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </ReactKeycloakProvider>
  );
}

export default App;