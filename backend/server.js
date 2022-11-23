const express = require('express');
var cors = require('cors');
require("dotenv").config();
const app = express();

const httpServer = require('http').createServer(app);

const io = require('socket.io')(httpServer, {cors: {origin : '*'}});

const routes = require("./routes/routes");

const port = 8080

var corsOptions = { origin: "*" };

app.use(express.json());
app.use(cors(corsOptions));

io.on('connection',(socket)=>{ 
  console.log('User connected');
    socket.on('message',(message)=>{
        console.log(message);
        socket.id = 'Kagiso';
        io.emit('message',socket.id +':' +message);
    });

    socket.on('disconnect', () => {
        
      });
})

app.use('/', routes)
httpServer.listen(port,() => {console.log('Server running on port 8080');});