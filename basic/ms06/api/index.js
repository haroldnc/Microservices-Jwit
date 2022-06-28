const bull = require('bull');

const redis = {host: '192.168.2.104', port: 6379};
const opts = {redis: {host: redis.host, port: redis.port }}

const queueCreate = bull('curso:create', opts);
const queueDelete = bull('curso:delete', opts);
const queueUpdate = bull('curso:update', opts);
const queueFindOne = bull('curso:findOne', opts);
const queueView = bull('curso:view', opts);

async function Create({ name, age, address, nationality, color }) {
   try {
      const job = await queueCreate.add({
         name,
         age,
         address,
         nationality,
         color
      });
      const { statusCode, data, message } = await job.finished();

      return { statusCode, data, message };
   } catch (error) {
      console.log(error);
   }
}

async function Delete({ id }) {
   try {
      const job = await queueDelete.add({ id });
      const { statusCode, data, message } = await job.finished();

      return { statusCode, data, message };
   } catch (error) {
      console.log(error);
   }
}

async function Update({ name, age, address, nationality, color, id }) {
   try {
      const job = await queueUpdate.add({
         name,
         age,
         address,
         nationality,
         color,
         id
      });

      const { statusCode, data, message } = await job.finished();

      return { statusCode, data, message };
   } catch (error) {
      console.log(error);
   }
}

async function FindOne({ id }) {
   try {
      const job = await queueFindOne.add({ id });
      const { statusCode, data, message } = await job.finished();

      return { statusCode, data, message };
   } catch (error) {
      console.log(error);
   }
}

async function View({}) {
   try {
      const job = await queueView.add({});
      const { statusCode, data, message } = await job.finished();

      return { statusCode, data, message };
   } catch (error) {
      console.log(error);
   }
}

module.exports = {
   Create,
   Delete,
   Update,
   FindOne,
   View
}