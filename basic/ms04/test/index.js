const bull = require('bull');

const { redis } = require('../src/settings');
const {
   queueCreate,
   queueDelete,
   queueUpdate,
   queueFindOne,
   queueView
} = require('../src/Adapters/index');

async function Create() {
   try {
      const job = await queueCreate.add({});
      const result = await job.finished();

      console.log(result);
   } catch (error) {
      console.log(error);
   }
}

main();