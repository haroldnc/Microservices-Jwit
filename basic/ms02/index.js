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

		console.log(result);
	} catch(error) {
		console.error(error);
	}
}

main();