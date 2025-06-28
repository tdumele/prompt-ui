import { Sidebar } from "../../components/Sidebar/Sidebar"

export const HomePage = () => {
    return (<>
        <Sidebar />
        <div className="p-4 sm:ml-64">
            <h1 className="text-3xl font-bold underline">Welcome to the Home Page</h1>
            <p>This is the main page of our application.</p>
        </div>
    </>
    );
}