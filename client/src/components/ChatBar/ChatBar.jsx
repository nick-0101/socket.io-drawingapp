import React from 'react';

// Shared state
import useShareableState  from '../useShareableState'
import { useBetween } from "use-between";

const ChatBar = () => {
    const { chatOpen, setChatOpen } = useBetween(useShareableState);

    // Menu
    const handleChat = () => {
        setChatOpen(!chatOpen)
    }
    // w-full md:w-1/3
    return (
        <>
            <div className={chatOpen ? 'hidden' : 'w-full absolute bottom-0 right-0'}>
                <aside className='sidebar w-100 bg-sidebar h-screen relative'>
                    {/* Close Menu */}
                    <div className="flex items-center flex justify-end text-gray-200 py-6 px-4">
                        <button onClick={handleChat} className="py-3 px-3 bg-indigo-500 rounded-lg text-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    {/* Messages */}
                    <div className='sidebar-header items-center justify-center py-4 mb-auto'>
                        <div className="p-4 text-gray-200 font-bold ">user1 joined.</div>
                        <div className="p-4 text-gray-200">user2 joined.</div>
                        <div className="p-4 text-gray-200">user1: Hello</div>
                    </div>
                    <div className='sidebar-content px-4 absolute inset-x-0 bottom-0'>
                        <ul className='flex flex-col w-full'>
                            <textarea className="h-20 resize-none text-gray-100 p-4 bg-gray-700 rounded-lg" placeholder="Send a message.."></textarea>
                            <button className="my-4 py-3 px-4 bg-indigo-500 rounded-lg text-gray-100">Send Message</button>
                        </ul>
                    </div>
                </aside>
            </div>
        </>
    )
}

export default ChatBar;