const express = require('express');
const app = express();
const http = require('http').Server(app);
const cors = require('cors');

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

app.use(cors());
io.sockets.on('connection', function (socket) {
  console.log('We have a new client: ' + socket.id);
  socket.on('drawing', function (data) {
    socket.broadcast.emit('drawing', data);
  });

  socket.on('disconnect', function () {
    console.log('Client ' + socket.id + ' has disconnected.');
  });
});

const port = process.env.PORT || 3001;

http.listen(port, () => console.log(`Listening on port ${port}`));
