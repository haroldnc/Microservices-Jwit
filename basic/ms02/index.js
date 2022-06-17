const { Adaptador } = require('./Adapters');

const main = () => {
	try {
		const result = Adaptador({
			info: {
				name: 'Jack',
				edad: 27,
				address: 'Calle Libertad, Chocope, Perú',
				nationality: 'peruano',
				editor: 'vim'
			},
			color: 'rojo'
		});

		if(result.statusCode !== 200) throw(result.message);

		console.log("Tu data es: ", result.data);
	} catch(error) {
		console.error(error);
	}
}

main();