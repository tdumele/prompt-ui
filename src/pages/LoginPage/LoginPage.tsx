import { useKeycloak } from "@react-keycloak/web";

export const LoginPage = () => {
    const { keycloak } = useKeycloak();

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