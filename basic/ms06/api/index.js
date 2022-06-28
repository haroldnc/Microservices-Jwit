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

async function main() {
   /*await Create({
      name: 'Marilyn',
      age: 25,
      address: 'Calle Esperanza 5',
      nationality: 'Peruana',
      color: 'Rojo'
   });*/
   
   //await Delete({ id: 3 });
   
   //await Update({ age: 19, id: 1 });
   
   // await FindOne({ id: 4 });

   // await View({});
}

module.exports = {
   Create,
   Delete,
   Update,
   FindOne,
   View
}