import React from 'react';
import socketio from 'socket.io-client';
const socketURL =
  process.env.NODE_ENV === 'production'
    ? 'https://sockets-testapp.herokuapp.com'
    : 'https://localhost:3001';

export const socket = socketio.connect(socketURL, { secure: true });
export const SocketContext = React.createContext();
