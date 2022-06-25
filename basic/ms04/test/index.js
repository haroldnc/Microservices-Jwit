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

async function Delete() {
   try {
      const job = await queueDelete.add({});
      const result = await job.finished();

      console.log(result);
   } catch (error) {
      console.log(error);
   }
}

async function Update() {
   try {
      const job = await queueUpdate.add({});
      const result = await job.finished();

      console.log(result);
   } catch (error) {
      console.log(error);
   }
}

async function FindOne() {
   try {
      const job = await queueFindOne.add({});
      const result = await job.finished();

      console.log(result);
   } catch (error) {
      console.log(error);
   }
}

async function View() {
   try {
      const job = await queueView.add({});
      const result = await job.finished();

      console.log(result);
   } catch (error) {
      console.log(error);
   }
}

main();