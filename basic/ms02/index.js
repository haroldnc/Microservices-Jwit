const { Adaptador } = require('./Adapters');

const main = () => {
	try {
		const result = Adaptador({
			info: {
				name: 'Jack',
				edad: 18,
				address: 'Calle Libertad, Chocope, Perú',
				nationality: 'peruano',
				editor: 'vim'
			},
			color: 'rojo'
		});

		if(result.statusCode !== 200) throw(result.message);

		console.log(result);
	} catch(error) {
		console.error(error);
	}
}

main();