const { Adaptador } = require('./src/Adapters');

const main = async () => {
	try {
		const result = await Adaptador({ id: 1 });

		if(result.statusCode !== 200) throw(result.message);

		console.log("Tu data es: ", result.data);
	} catch(error) {
		console.error(error);
	}
}

main();