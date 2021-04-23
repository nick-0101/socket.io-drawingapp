import React from 'react';

const ChatBar = () => {
    return (
        <>
            <aside className='sidebar w-100 bg-sidebar h-screen relative '>
                {/* Close Menu */}
                <div className="flex justify-end text-gray-200 p-4">
                    <button className="py-3 px-5 bg-indigo-500 rounded-lg text-gray-100">X</button>
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
        </>
    )
}

export default ChatBar;