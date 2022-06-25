const bull = require('bull');

const { redis } = require('../src/settings');

async function main() {
   const job = bull('curso', {redis: {host: redis.host, port: redis.port }})
      .add({id: 1});

   const result = await (await job).finished();

   console.log(result);

   if (result.statusCode === 200) console.log('Solicitud correcta');
}

main();