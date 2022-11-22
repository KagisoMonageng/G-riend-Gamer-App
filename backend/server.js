const express = require('express');
var cors = require('cors');
require("dotenv").config();

const app = express();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, {
  cors: {origin : '*'}
});

const routes = require("./routes/routes");
const { Socket } = require('dgram');

const port = 8080

var corsOptions = {
    origin: "*"
  };

app.use(express.json());
app.use(cors(corsOptions));
//app.listen(process.env.SERVER_PORT,() => {console.log('Server running on port 8080');});



io.on('connection',(socket)=>{ 
  console.log('user connected');
    socket.on('message',(message)=>{
        console.log(message);
        socket.id = 'Kagiso';
        io.to(socket.id).emit('message',socket.id +':' +message);

        //phuti.shilajwe@labour.gov.za

    });

    socket.on('disconnect', () => {
        
      });
})

//app.use('/', routes)

httpServer.listen(port,() => {console.log('Server running on port 8080');});