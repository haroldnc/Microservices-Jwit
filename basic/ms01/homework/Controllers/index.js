function PersonalData ({ info }) {
	const editors = {
		vscode: 'microsoft',
		vim: 'Bram Moolenaar',
		'sublime text': 'Jon Skinner',
		'notepad++': 'Don Ho'
	}

	console.log(`The editor developed by ${editors[info.editor]}`)

	return info;
}

function PreferencesColor ({ color }) {
	return color;
}

module.exports = {
	PersonalData,
	PreferencesColor
}