import { ChatSidebar } from "../ChatSidebar/ChatSidebar";

export const Sidebar = () => {
    return (
        <>
            <aside id="default-sidebar" className="col-span-1 h-screen" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
                    <ul>
                        <li>
                            <a href="#" className="flex rounded-lg hover:bg-gray-200">
                                <svg className="w-9" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 12L8 20V44C8 48.4183 11.5817 52 16 52H28L36 60V52H48C52.4183 52 56 48.4183 56 44V20C56 15.5817 52.4183 12 48 12H16Z" fill="#22A381" />
                                    <circle cx="24" cy="32" r="3" fill="white" />
                                    <circle cx="32" cy="32" r="3" fill="white" />
                                    <circle cx="40" cy="32" r="3" fill="white" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
            <ChatSidebar />
        </>
    );
}