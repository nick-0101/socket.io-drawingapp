import React from 'react';
import { SocketContext, socket } from './context/socket';
// Components
import { Canvas, DrawBar, ChatBar } from './components';
import './App.css';

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <div className='flex flex-grow min-h-screen bg-gray-100 text-gray-800'>
        <main className='main flex flex-col flex-grow md:ml-0'>
          <DrawBar />
          <Canvas />
          <footer className='footer px-4 py-6 bg-navbar'>
            <div className='footer-content'>
              <p className='text-sm text-gray-200 text-center'>
                © Bruh 2021. All rights reserved.{' '}
              </p>
            </div>
          </footer>
        </main>
        <ChatBar />
      </div>
    </SocketContext.Provider>
  );
}

export default App;
