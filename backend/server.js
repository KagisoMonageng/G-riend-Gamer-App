const express = require('express');
var cors = require('cors');
require("dotenv").config();
const app = express();
const http = require('http');
const server = http.Server(app);
const socketIO = require('socket.io');
const io = socketIO(server,{
  cors: {origin:'*'}
});


//   {
//   cors: {origin : '*'}
// });

const routes = require("./routes/routes");

const port = 8080

var corsOptions = {
    origin: "*"
  };

app.use(express.json());
app.use(cors(corsOptions));

// io.on('join',(socket)=>{
//   socket.on('join',(data)=>{
//     socket.join(data.room);
//     socket.brodcast.to(data.room).emit('new user joined');
//   });

//   socket.on('message',(data)=>{
//     io.in(data.room).emit('new message',{ gamer: data.user, message : data.message})
//   });

// })

app.use('/', routes)
server.listen(port,() => {console.log('Server running on port 8080');});