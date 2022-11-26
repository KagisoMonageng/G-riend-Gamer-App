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

const routes = require("./routes/routes");

const port = 8080

var corsOptions = {
    origin: "*"
  };
app.use(express.json());
app.use(cors(corsOptions));







app.use('/', routes)
server.listen(port,() => {console.log('Server running on port 8080');});