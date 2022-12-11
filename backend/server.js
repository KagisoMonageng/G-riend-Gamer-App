const express = require('express');
var cors = require('cors');
require("dotenv").config();
const app = express();

const http = require('http');
const server = http.Server(app);


const socketServer = require('http').createServer(app);
const io = require('socket.io')(socketServer, {
  cors: {origin : '*'}
});

var corsOptions = {
  origin: "*"
};

const routes = require("./routes/routes");
const port = 8080
const socketPort = 3000

io.on('connection', (socket) => {
  //console.log('a user connected');

  // io.on("join-room",(roomId) => {
  //   socket.on('message', (message) => {
  //       console.log(message);
  //       io.to(roomId).emit('message',message);
  //     });
  // });

  //   io.of("/").adapter.on("create-room", (roomId) => {
  //     console.log(`room ${roomId} was created`);
  //     routes.route('')

  //     socket.join(roomId);
  //   })


  // socket.on('disconnect', () => {
  //   console.log('a user disconnected!');
  // });
});


app.use(express.json());
app.use(cors(corsOptions));
app.use('/', routes)

socketServer.listen(socketPort, () => console.log(`Socket IO Running on ${socketPort}`));
server.listen(port,() => {console.log('Server running on port 8080');});