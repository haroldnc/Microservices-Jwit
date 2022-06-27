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

      if(statusCode === 200) console.log("Hola, bienvenido", data.name);
      else console.error(message);
   } catch (error) {
      console.log(error);
   }
}

async function Delete({ id }) {
   try {
      const job = await queueDelete.add({ id });
      const { statusCode, data, message } = await job.finished();

      if(statusCode === 200) console.log("El usuario eliminado es", data.name);
      else console.error(message);
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

      console.log({ statusCode, data, message });
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

      const { statusCode, data, message } = await job.finished();

      if(statusCode === 200) console.log("El usuario buscado es", data);
      else console.error(message);
   } catch (error) {
      console.log(error);
   }
}

async function View({}) {
   try {
      const job = await queueView.add({});
      const { statusCode, data, message } = await job.finished();

      if(statusCode === 200) for (let x of data) console.log(x);
      else console.error(message);
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
   await Delete({ id: 2 })

   await View({});
}

main();
