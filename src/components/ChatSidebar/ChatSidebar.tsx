export const ChatSidebar = () => {
    return (
        <aside id="content-sidebar" className="col-span-4 h-screen" aria-label="Sidebar">
            <div className="h-full w-full px-3 py-4 overflow-y-auto bg-gray-50 bg-gray-100 text-center">
                <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white bg-gray-700 group"
                    onClick={() => alert('New conversation started!')}>
                    New conversation
                </button>
            </div><div>
                <ul className="space-y-2 font-medium">
                    <li>
                    </li>
                </ul>
            </div>
        </aside>
    );
}