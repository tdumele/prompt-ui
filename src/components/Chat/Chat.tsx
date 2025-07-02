import { useEffect, useReducer, useRef, useState } from 'react';
import { ADD_MESSAGE, chatReducer } from '../../reducer/reducer';
import './Chat.css';

export const Chat = () => {
    const [state, dispatchMessage] = useReducer(chatReducer, {
        messages: [
            { bot: true, text: "Hello, how can I help you today?" },
        ]
    });
    const [writing, setWriting] = useState(false);
    const conversationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (conversationRef.current) {
            conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
        }
    }, [state.messages, writing]);

    const handleChatSubmission = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const value = (e.currentTarget[0] as HTMLInputElement).value;
        dispatchMessage({ type: ADD_MESSAGE, message: { text: value, bot: false } });
        e.currentTarget.reset();

        callChatbotAPI(value).then((res) => {
            setWriting(false);
            dispatchMessage({ type: ADD_MESSAGE, message: res });
        });
    }

    async function callChatbotAPI(message: string) {
        setWriting(true);
        // Simulate a response from the chatbot
        return await new Promise(resolve => setTimeout(() => resolve({ bot: true, text: `You said: ${message}` }), 1000)); // Simulate network delay
    };

    return (
        <div className="flex flex-col h-screen">
            <div id="conversation" ref={conversationRef} className='overflow-y-auto scroll-auto h-4/5'>
                {
                    state.messages.map((message: any) => {
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
                {
                    writing &&
                    <div className="p-4 bg-gray-200 my-2 rounded-lg w-1/13">
                        <div className="typing-indicator">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                }
            </div>
            <footer className="flex justify-center items-center">
                <form className="flex flex-col justify-center items-center" onSubmit={handleChatSubmission}>
                    <input className=" bg-gray-100 active:border active:border-red-400 fixed bottom-10 w-1/2 h-10 rounded-full pl-3"
                        type="text"
                        placeholder="Tape your message here"
                    />
                </form>
            </footer>
        </div>
    );
}