import React from 'react';
import { SocketContext, socket } from './context/socket';
// Components
import { Canvas, DrawBar } from './components';
import './App.css';

function App() {
  return (
    <div className='App'>
      <SocketContext.Provider value={socket}>
        <DrawBar sliderVal />
        <Canvas />
      </SocketContext.Provider>
    </div>
  );
}

export default App;
