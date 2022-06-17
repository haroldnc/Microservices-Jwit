const { Servicio } = require('../Services');

function Adaptador({ info, color }) {
	const result = Servicio({ info, color });

	return result;
}

module.exports = {
	Adaptador
}