import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const LoginPage = () => {
    const { keycloak } = useKeycloak();
    const navigate = useNavigate();

    // Rediriger automatiquement vers /chat si déjà authentifié
    useEffect(() => {
        if (keycloak.authenticated) {
            navigate('/chat');
        }
    }, [keycloak.authenticated, navigate]);

    const handleLogin = () => {
        keycloak.login({
            redirectUri: window.location.origin + '/chat'
        });
    };

    return (
        <button onClick={handleLogin}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex m-auto "
        >
            Login with Keycloak
        </button>
    );
}