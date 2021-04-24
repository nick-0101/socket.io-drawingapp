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
    // md:relative absolute bottom-0 right-0
    return (
        <>
            <div className={chatOpen ? 'hidden' : 'w-full md:w-1/3'}>
                <aside className='sidebar w-100 bg-sidebar h-screen relative'>
                    {/* Close Menu */}
                    <div className="flex md:hidden items-center flex justify-end text-gray-200">
                        <button onClick={handleChat} className="py-3 px-3 bg-indigo-500 rounded-lg text-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    {/* Messages */}
                    <div className='sidebar-header items-center justify-center py-4 mb-auto'>
                        <div className="p-4 text-gray-200">user1 joined.</div>
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