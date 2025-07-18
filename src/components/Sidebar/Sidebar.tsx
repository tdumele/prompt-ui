import { useKeycloak } from "@react-keycloak/web";
import { ChatSidebar } from "../ChatSidebar/ChatSidebar";

export const Sidebar = () => {
    const { keycloak } = useKeycloak();

    return (
        <>
            <aside id="default-sidebar" className="col-span-1 h-screen" aria-label="Sidebar">
                <div className="h-full px-3 py-4 bg-[#333] flex flex-col">
                    {/* Contenu principal en haut */}
                    <div className="flex-1 overflow-y-auto">
                        <ul>
                            <li>
                                <button
                                    className="w-full rounded-lg hover:bg-gray-600 transition-colors duration-200 flex justify-center"
                                    title="Se déconnecter"
                                >
                                    <svg className="w-9" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 12L8 20V44C8 48.4183 11.5817 52 16 52H28L36 60V52H48C52.4183 52 56 48.4183 56 44V20C56 15.5817 52.4183 12 48 12H16Z" fill="#F5EFE7" />
                                        <circle cx="24" cy="32" r="3" fill="grey" />
                                        <circle cx="32" cy="32" r="3" fill="grey" />
                                        <circle cx="40" cy="32" r="3" fill="grey" />
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Bouton logout collé en bas */}
                    <div className="mt-auto">
                        <button
                            onClick={() => keycloak.logout()}
                            className="w-full p-1 rounded-lg hover:bg-gray-600 transition-colors duration-200 flex justify-center"
                            title="Se déconnecter"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="#F5EFE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16 17L21 12L16 7" stroke="#F5EFE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21 12H9" stroke="#F5EFE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </aside>
            <ChatSidebar />
        </>
    );
}