const {
	PersonalData,
	PreferencesColor
} = require('../Controllers');

function Servicio ({ info, color }) {
	try {
		const personalData = PersonalData({ info });

		if (info.edad <= 18) throw new Error('The user is not older than 18 years old');

		const preferencesColor = PreferencesColor({ color });

		return {
			statusCode: 200,
			data: { personalData, preferencesColor }
		};
	} catch(error) {
		console.log({
			step: 'services Servicio',
			error: error.toString()
		});

		return { statusCode:500, message: error.toString() };
	}
}

module.exports = {
	Servicio
}