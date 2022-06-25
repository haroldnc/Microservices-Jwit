const dotenv = require('dotenv');

dotenv.config();

const redis = {
   host: process.env.REDIS_HOST,
   port: process.env.REDIS_PORT
};

const InternalError = 'No podemos procesar tu solicitud en estos momentos';

module.exports = { redis, InternalError };