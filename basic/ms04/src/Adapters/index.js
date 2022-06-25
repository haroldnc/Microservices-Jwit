const bull = require('bull');

const { redis } = require('../settings');

const opts = {redis: {host: redis.host, port: redis.port }}

console.log("Estoy listo para trabajar");

const queueCreate = bull('curso:create', opts);
const queueDelete = bull('curso:delete', opts);
const queueUpdate = bull('curso:update', opts);
const queueFindOne = bull('curso:findOne', opts);
const queueView = bull('curso:view', opts);

module.exports = {
   queueCreate,
   queueDelete,
   queueUpdate,
   queueFindOne,
   queueView
};