const express = require('express');
const path = require('path');
const app = express();
const http = require('http').createServer(app);
const cors = require('cors');

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

app.use(cors());

let userCounter = 0;
io.sockets.on('connection', function (socket) {
  // Increment Usercount
  userCounter++;
  setInterval(() => {
    socket.emit('user count', userCounter);
  }, 20000);

  // Send user id
  socket.emit('your id', socket.id);

  // Drawing
  socket.on('drawing', function (data) {
    socket.broadcast.emit('drawing', data);
  });

  // Chat
  socket.on('message', (body) => {
    io.emit('send message', body);
  });

  socket.on('disconnect', function () {
    userCounter--;
  });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'public')));

  app.get('*', (req, res) => {
    res.sendFile('client/build/index.html', { root: __dirname });
  });
}

const port = process.env.PORT || 3001;

http.listen(port, () => console.log(`Listening on port ${port}`));
