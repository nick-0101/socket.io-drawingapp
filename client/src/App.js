import React from 'react';
import { SocketContext, socket } from './context/socket';
// Components
import { Canvas, DrawBar, ChatBar } from './components';
import './App.css';

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <div className='flex flex-row min-h-screen bg-gray-100 text-gray-800'>
        <main className='main flex flex-col flex-grow -ml-64 md:ml-0'>
          <DrawBar />
          <div className='main-content flex flex-col flex-grow p-4 bg-main'>
            <div className='flex flex-col flex-grow border-4 border-gray-400 border bg-gray-800 rounded mt-4'></div>
          </div>
          <footer className='footer px-4 py-6 bg-navbar'>
            <div className='footer-content'>
              <p className='text-sm text-gray-200 text-center'>
                © Bruh 2021. All rights reserved.{' '}
              </p>
            </div>
          </footer>
        </main>
        <div className='w-full md:w-1/3 bottom-0 right-0'>
          <ChatBar />
        </div>
      </div>
    </SocketContext.Provider>
  );
}

export default App;
