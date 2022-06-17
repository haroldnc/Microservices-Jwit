function PersonalData ({ info }) {
	try {
		const editors = {
			vscode: 'microsoft',
			vim: 'Bram Moolenaar',
			'sublime text': 'Jon Skinner',
			'notepad++': 'Don Ho'
		}

		console.log(`The ${info.editor} editor developed by ${editors[info.editor]}`)

		return { statusCode: 200, data: info};
	} catch(error) {
		console.log({
			step: 'controllers PersonalData',
			error: error.toString()
		});

		return { statusCode:500, message: error.toString() };
	}
}

function PreferencesColor ({ color }) {
	try {
		const colors = {
			rojo: 'azul',
			azul: 'verde',
			verde: 'violeta',
			violeta: 'amarillo',
			amarillo: 'rojo'
		}

		return { statusCode: 200, data: colors[color]};
	} catch(error) {
		console.log({
			step: 'controllers PreferencesColor',
			error: error.toString()
		});

		return { statusCode:500, message: error.toString() };
	}
}

module.exports = {
	PersonalData,
	PreferencesColor
}