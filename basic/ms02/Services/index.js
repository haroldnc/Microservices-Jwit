const {
	PersonalData,
	PreferencesColor
} = require('../Controllers');

function Servicio ({ info, color }) {
	const personalData = PersonalData({ info });

	if (info.edad <= 18) throw new Error('The user is not older than 18 years old');

	const preferencesColor = PreferencesColor({ color });

	return { personalData, preferencesColor };
}

module.exports = {
	Servicio
}