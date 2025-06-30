export const Chat = () => {
    return (
        <div className="flex flex-col h-screen">
            <div>
                Contenu de la conversation
            </div>
            <footer className="flex justify-center items-center">
                <input className="flex flex-col justify-center items-center bg-gray-100 active:border active:border-red-400 fixed bottom-10 w-1/2 h-10 rounded-full pl-3" type="text" placeholder="Tape your message here"/>
            </footer>
        </div>
    );
}