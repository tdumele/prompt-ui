export const Sidebar = () => {
    return (
        <>
            <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-20 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg className="w-13" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <aside id="content-sidebar" className="fixed top-0 left-20 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full w-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-400 text-center">
                    <button className="flex items-center p-2 w-58  text-gray-900 rounded-lg dark:text-white bg-gray-700 group"
                                onClick={() => alert('New Prompt')}>
                                    New conversation
                            </button>
                            </div><div>
                    <ul className="space-y-2 font-medium">
                        <li>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}