import { Chat } from "../../components/Chat/Chat";
import { Sidebar } from "../../components/Sidebar/Sidebar"

export const HomePage = () => {
    return (<>
        <div className="grid grid-cols-24">
            <Sidebar />
            <main id="content" className="px-4 my-4 col-start-6 col-end-24 h-screen">
                <Chat />
            </main>
        </div>

    </>
    );
}