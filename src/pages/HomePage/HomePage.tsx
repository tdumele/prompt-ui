import { Sidebar } from "../../components/Sidebar/Sidebar"

export const HomePage = () => {
    return (<>
        <div className="grid grid-cols-24">
            <Sidebar />
            <main id="content" className="px-4 py-4 col-start-6 col-end-24 h-screen">
                <h1 className="text-3xl font-bold underline">Welcome to the Home Page</h1>
                <p>This is the main page of our application.</p>
            </main>
        </div>

    </>
    );
}