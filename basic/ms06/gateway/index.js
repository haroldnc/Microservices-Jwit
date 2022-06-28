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

      socket.on('req:microservice:view', async ({}) => {
         try {
            console.log('req:microservice:view');
   
            const { statusCode, data, message } = await api.View({});
   
            return io.to(socket.id).emit('res:microservice:view', { statusCode, data, message });
         } catch (error) {
            console.log(error);
         }
      });

      socket.on('req:microservice:create', async ({ name, age, address, nationality, color }) => {
         try {
            console.log('req:microservice:create', { name, age, address, nationality, color });
   
            const { statusCode, data, message } = await api.Create({
               name,
               age,
               address,
               nationality,
               color
            });
   
            return io.to(socket.id).emit('res:microservice:create', { statusCode, data, message });
         } catch (error) {
            console.log(error);
         }
      });

      socket.on('req:microservice:update', async ({ name, age, address, nationality, color, id }) => {
         try {
            console.log('req:microservice:update', { name, age, address, nationality, color, id });
   
            const { statusCode, data, message } = await api.Update({
               name,
               age,
               address,
               nationality,
               color,
               id
            });
   
            return io.to(socket.id).emit('res:microservice:update', { statusCode, data, message });
         } catch (error) {
            console.log(error);
         }
      });

      socket.on('req:microservice:delete', async ({ id }) => {
         try {
            console.log('req:microservice:delete', { id });
   
            const { statusCode, data, message } = await api.Delete({ id });
   
            return io.to(socket.id).emit('res:microservice:delete', { statusCode, data, message });
         } catch (error) {
            console.log(error);
         }
      });

      socket.on('req:microservice:findOne', async ({ id }) => {
         try {
            console.log('req:microservice:findOne', { id });
   
            const { statusCode, data, message } = await api.FindOne({ id });
   
            return io.to(socket.id).emit('res:microservice:findOne', { statusCode, data, message });
         } catch (error) {
            console.log(error);
         }
      });
   });
});