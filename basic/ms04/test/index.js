const {
   queueCreate,
   queueDelete,
   queueUpdate,
   queueFindOne,
   queueView
} = require('../src/Adapters/index');

async function Create() {
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

async function Delete() {
   try {
      const job = await queueDelete.add({ id });
      const result = await job.finished();

      console.log(result);
   } catch (error) {
      console.log(error);
   }
}

async function Update() {
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

async function FindOne() {
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

async function View() {
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
   View();
}

main();