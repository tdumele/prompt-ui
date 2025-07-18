import { useEffect, useReducer, useRef, useState } from 'react';
import { ADD_MESSAGE, chatReducer, RESET_CHAT } from '../../reducer/reducer';
import './Chat.css';
import type { Message } from '../../reducer/types/messages';
import { API } from '../../services/api';

export const Chat = () => {
    const [state, dispatchMessage] = useReducer(chatReducer, { messages: [] });
    const [writing, setWriting] = useState(false);
    const conversationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (conversationRef.current) {
            conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
        }
    }, [state.messages, writing]);

    function handleChatSubmission(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();

        const value = (e.currentTarget[0] as HTMLInputElement).value;
        if (!value.trim()) return; // Prevent empty messages

        dispatchMessage({ type: ADD_MESSAGE, message: { text: value, bot: false, id: crypto.randomUUID() } });
        e.currentTarget.reset();

        callChatbotAPI(value).then((response) => response.json()).then((res) => {
            const responseContent = {
                bot: true,
                text: res.result.output.text,
                id: crypto.randomUUID()

            }
            setWriting(false);
            dispatchMessage({ type: ADD_MESSAGE, message: responseContent });
        }).catch(() => {
            setWriting(false);
            dispatchMessage({ type: ADD_MESSAGE, message: { text: "Sorry, I couldn't process your request.", bot: true, id: crypto.randomUUID() } });
        });
    }

    async function callChatbotAPI(message: string) {
        setWriting(true);
        return fetch(API.bff.chat, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                content: message
            }),
        });
    };

    return (
        <div className="flex flex-col h-screen">
            <div id="conversation" ref={conversationRef} className='overflow-y-auto scroll-auto h-4/5'>
                {
                    state.messages.map((message: Message) => {
                        return message.bot ?
                            <div key={message.id} className="p-2 bg-[#F5EFE7] my-2 rounded-lg w-3/5">
                                <p className="text-[#213555]">{message.text}</p>
                            </div>
                            :
                            <div key={message.id} className="p-2 bg-[#333] my-2 rounded-lg w-3/5 ml-auto text-right">
                                <p className="text-[#F5F5F5]">{message.text}</p>
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
                    <a className="flex flex-col items-center p-2 w-20 text-gray-900 fixed bottom-2 text-sm hover:text-red-600 hover:scale-105 transition-all duration-200 hover:cursor-pointer"
                        onClick={() => dispatchMessage({ type: RESET_CHAT })}>
                        Reset
                    </a>
                </form>

            </footer>
        </div>
    );
}