const micro = require('./src');

async function main() {
   try {
      const db = await micro.SyncDB();

      if(db.statusCode !== 200 ) throw db.message;

      await micro.run();
   } catch (error) {
      console.log(error)
   }
}

main();