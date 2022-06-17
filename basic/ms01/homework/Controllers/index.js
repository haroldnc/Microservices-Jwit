function PersonalData ({ info }) {
	const editors = {
		vscode: 'microsoft',
		vim: 'Bram Moolenaar',
		'sublime text': 'Jon Skinner',
		'notepad++': 'Don Ho'
	}

	console.log(`The ${info.editor} editor developed by ${editors[info.editor]}`)

	return info;
}

function PreferencesColor ({ color }) {
	const colors = {
		rojo: 'azul',
		azul: 'verde',
		verde: 'violeta',
		violeta: 'amarillo',
		amarillo: 'rojo'
	}

	return colors[color];
}

module.exports = {
	PersonalData,
	PreferencesColor
}