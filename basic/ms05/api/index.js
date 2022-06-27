const {
   queueCreate,
   queueDelete,
   queueUpdate,
   queueFindOne,
   queueView
} = require('../src/Adapters/index');

async function Create({ name, age, address, nationality, color }) {
   try {
      const job = await queueCreate.add({
         name,
         age,
         address,
         nationality,
         color
      });
      const result = await job.finished();

      console.log(result);
   } catch (error) {
      console.log(error);
   }
}

async function Delete({ id }) {
   try {
      const job = await queueDelete.add({ id });
      const result = await job.finished();

      console.log(result);
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
      const result = await job.finished();

      console.log(result);
   } catch (error) {
      console.log(error);
   }
}

async function FindOne({ name, age, address, nationality, color, id }) {
   try {
      const job = await queueFindOne.add({
         name,
         age,
         address,
         nationality,
         color,
         id
      });
      const result = await job.finished();

      console.log(result);
   } catch (error) {
      console.log(error);
   }
}

async function View({ name, age, address, nationality, color, id }) {
   try {
      const job = await queueView.add({
         name,
         age,
         address,
         nationality,
         color,
         id
      });
      const result = await job.finished();

      console.log(result);
   } catch (error) {
      console.log(error);
   }
}

async function main() {
   View({});
}

main();