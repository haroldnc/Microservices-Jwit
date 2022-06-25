const bull = require('bull');

const { redis } = require('../settings');
const { Servicio } = require('../Services');

console.log("Estoy listo para trabajar");

const queueView = bull('curso', {redis: {host: redis.host, port: redis.port }});

module.exports = { queueView };