export const Chat = () => {

    const messages = [
        { id: 1, bot: true , text: "Hello, how can I help you today?" },
        { id: 2, text: "I have a question about your services." },
        { id: 3, bot: true, text: "Sure, what would you like to know?" },
        { id: 4, text: "Can you tell me more about your pricing?" }];

    return (
        <div className="flex flex-col h-screen">
            <div>
                {
                    messages.map((message) => {
                        return message.bot ? 

                                <div key={message.id} className="p-4 bg-gray-200 my-2 rounded-lg w-3/5">
                                    <p className="text-gray-800">{message.text}</p>
                                </div>
                            :
                                <div key={message.id} className="p-4 bg-gray-800 my-2 rounded-lg w-3/5 ml-auto text-right">
                                    <p className="text-white">{message.text}</p>
                                </div>
                    })
                }
            </div>
            <footer className="flex justify-center items-center">
                <input className="flex flex-col justify-center items-center bg-gray-100 active:border active:border-red-400 fixed bottom-10 w-1/2 h-10 rounded-full pl-3" type="text" placeholder="Tape your message here"/>
            </footer>
        </div>
    );
}