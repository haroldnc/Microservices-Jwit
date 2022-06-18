const { Servicio } = require('../Services');

async function Adaptador({ id }) {
	try {
		const { statusCode, data, message} = await Servicio({ id });

		return { statusCode, data, message};
	} catch(error) {
		console.log({
			step: 'adapters Adaptador',
			error: error.toString()
		});

		return { statusCode:500, message: error.toString() };
	}
}

module.exports = {
	Adaptador
}