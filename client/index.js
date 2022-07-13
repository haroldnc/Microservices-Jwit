const { io } = require('socket.io-client');

const socket = io('http://localhost:3000');

async function main() {
   try {
      setTimeout(() =>  console.log(socket.id), 500);

      socket.on('res:microservice:view', ({ statusCode, data, message }) => {
         console.log('res:microservice:view', {statusCode, data, message});
      });

      socket.on('res:microservice:create', ({ statusCode, data, message }) => {
         console.log('res:microservice:create', {statusCode, data, message});
      });

      socket.on('res:microservice:update', ({ statusCode, data, message }) => {
         console.log('res:microservice:update', {statusCode, data, message});
      });

      socket.on('res:microservice:delete', ({ statusCode, data, message }) => {
         console.log('res:microservice:delete', {statusCode, data, message});
      });

      socket.on('res:microservice:findOne', ({ statusCode, data, message }) => {
         console.log('res:microservice:findOne', {statusCode, data, message});
      });

      // setInterval(() => socket.emit('req:microservice:view', ({})), 200);

      setTimeout(() => {
         //socket.emit('req:microservice:create', ({ age: 27, color: 'Azul', name: 'Jack' }));
         //socket.emit('req:microservice:delete', ({ id:2 }));
         //socket.emit('req:microservice:update', ({ id:1, age: 19 }));
         //socket.emit('req:microservice:findOne', ({ id:4 }));
         socket.emit('req:microservice:view', ({}));
      }, 300);
   } catch (error) {
      console.log(error);
   }
}

main();