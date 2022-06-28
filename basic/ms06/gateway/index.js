const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const api = require('../api');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

server.listen(3000, () => {
   console.log('Server initialize');

   io.on('connection', (socket) => {
      console.log('New connection', socket.id);

      socket.on('req:microservice:view', ({}) => {
         console.log('He sido llamado por el cliente');
      });
   });
});