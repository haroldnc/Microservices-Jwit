const {
	PersonalData,
	PreferencesColor
} = require('../Controllers');

function Servicio ({ info, color }) {
	if (info.edad <= 18) throw new Error('The user is not older than 18 years old');

	const personalData = PersonalData({ info });
	const preferencesColor = PreferencesColor({ color });

	return { personalData, preferencesColor };
}

module.exports = {
	Servicio
}