const {
	PersonalData,
	PreferencesColor
} = require('../Controllers');

function Servicio ({ info, color }) {
	const personalData = PersonalData({ info });
	const preferencesColor = PreferencesColor({ color });

	return { personalData, preferencesColor };
}

module.exports = {
	Servicio
}