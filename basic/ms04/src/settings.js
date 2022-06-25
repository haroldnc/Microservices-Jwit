const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');

dotenv.config();

const redis = {
   host: process.env.REDIS_HOST,
   port: process.env.REDIS_PORT
};

const InternalError = 'No podemos procesar tu solicitud en estos momentos';

const sequelize = new Sequelize({
   host: process.env.POSTGRES_HOST,
   database: process.env.POSTGRES_DB,
   port: process.env.REDIS_PORT,
   username: process.env.POSTGRES_USER,
   password: process.env.POSTGRES_PASSWORD,
   dialect: 'postgres'
})

module.exports = { redis, InternalError };