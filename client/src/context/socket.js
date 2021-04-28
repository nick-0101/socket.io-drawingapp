import React from 'react';
import socketio from 'socket.io-client';

const socketURL =
  process.env.NODE_ENV === 'production'
    ? 'https://sockets-testapp.herokuapp.com'
    : 'http://4a30998bd985.eu.ngrok.io';

export const socket = socketio.connect(socketURL);
export const SocketContext = React.createContext();
