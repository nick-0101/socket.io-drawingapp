import React, { useEffect, useRef, useContext, useState } from 'react';
import {SocketContext} from '../../context/socket';

// Shared state
import useShareableState  from '../useShareableState'
import { useBetween } from "use-between";

const ChatBar = () => {
    const { chatOpen, setChatOpen } = useBetween(useShareableState);
    const [yourID, setYourID] = useState();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [username, setUsername] = useState('')
    const [error, setError] = useState('')
    const [userCount, setUserCount] = useState('')

    // Menu
    const handleChat = () => {
        setChatOpen(!chatOpen)
    }

    // Sockets IO
    const socket = useContext(SocketContext);

    useEffect(() => {
        // Connect Socket
        socket.on("your id", id => {
            setYourID(id);
        })

        socket.on("send message", (message) => {
            receivedMessage(message)
        })
        
        socket.on("user count", value => {
            setUserCount(value);
        })

        socket.on("user count", value => {
            setUserCount(value);
        })

        const interval = setInterval(() => {
            socket.on("user count", value => {
                setUserCount(value);
            })
        }, 20000);

        // Unmount
        return () => clearInterval(interval);
    }, [socket])

    // Recive Messages
    const receivedMessage = (message) => {
        setMessages(oldMsgs => [...oldMsgs, message]);
    }

    // Send Messages
    const sendToSocket = () => {
        if(!message) {
            return
        }

        const messageObject = {
            body: message,
            id: yourID,
            username: username,
        };
        socket.emit("message", messageObject);
        setMessage("");
    }

    // Handle Change
     const handleChange = (e) => {
        setMessage(e.target.value)
    }

    // Username
    const input = useRef()

    const handleUsername = () => {
        if(input.current.value === '' || input.current.value.length <= 3) {
            setError('Username needs to be 3 or more characters.')
            return 
        } else {
            setUsername(input.current.value)
        }
    }
    return (
        <>  
        {username ? 
            <div className={chatOpen ? 'hidden' : 'w-full absolute bottom-0 right-0'}>
                <aside className='w-100 bg-sidebar h-screen relative'>
                    <div className="flex items-center flex justify-end text-gray-200 py-6 px-4">
                        <button onClick={handleChat} className="py-3 px-3 bg-indigo-500 rounded-lg text-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    <div className='py-4 mb-auto'>
                        <div className="text-center p-4 text-gray-200 font-bold ">{userCount || 1} users are in the chat.</div>
                        {messages.map((message, index) => {
                            if (message.id === yourID) {
                                return (<>
                                    <div className="bg-sidebar" key={index}>
                                        <p className="text-right px-4 pb-2 text-gray-200">{message.username}</p> 
                                        <div className="px-4 flex justify-end text-right text-gray-200">
                                            <p className="bg-indigo-700 p-4 rounded-lg">{message.body}</p>
                                        </div>
                                    </div>
                                </>)
                            }
                            return (<>
                                <div className="bg-sidebar" key={index}>
                                    <p className="px-4 pb-2 text-gray-200">{message.username}</p> 
                                    <div className="px-4 flex justify-start text-left">
                                    <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{message.body}</p>
                                    </div>
                                </div>
                            </>)
                        })}
                    </div>
                </aside>
                <div className='fixed bg-sidebar px-4 inset-x-0 bottom-0'>
                    <ul className='flex flex-col w-full'>
                        <textarea onChange={(e => handleChange(e))} value={message} className="h-20 resize-none text-gray-100 p-4 bg-gray-700 rounded-lg" placeholder="Send a message.."></textarea>
                        <button onClick={sendToSocket} className="my-4 py-3 px-4 bg-indigo-500 rounded-lg text-gray-100">Send Message</button>
                    </ul>
                </div>
            </div> 
            
            :
  
            <div className={chatOpen ? 'hidden' : 'w-full absolute bottom-0 right-0'}>
                <aside className='sidebar w-100 bg-sidebar h-screen relative'>
                    <div className="flex items-center flex justify-end text-gray-200 py-6 px-4">
                        <button onClick={handleChat} className="py-3 px-3 bg-indigo-500 rounded-lg text-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    <div className='flex flex-col px-4 mx-auto max-w-md'>
                        <div className="text-white text-3xl font-bold text-center my-5">Create a Username</div>
                        {error ? <div className="my-3 text-center text-red-600">{error}</div> : null}
                        <input ref={input} className="resize-none text-gray-100 p-4 bg-gray-700 rounded-lg" placeholder="Enter a username.."/>
                        <button onClick={(e => handleUsername(e))} className="my-4 py-3 px-4 bg-indigo-500 rounded-lg text-gray-100">Submit</button>
                    </div>
                </aside>
            </div> 
            }
        </>
    )
}

export default ChatBar;