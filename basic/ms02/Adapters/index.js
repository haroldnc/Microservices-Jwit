const { Servicio } = require('../Services');

function Adaptador({ info, color }) {
	try {
		const { statusCode, data, message} = Servicio({ info, color });

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