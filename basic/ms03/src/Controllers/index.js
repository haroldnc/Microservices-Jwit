const { db } = require('../Models');
const { setTimeout } = require('timers/promises');

async function FindUser ({ id }) {
	try {
		const user =  db.filter(el => el.id === id)[0];

		console.log(user);

		await setTimeout(10000);

		return { statusCode: 200, data: user };
	} catch(error) {
		console.log({
			step: 'controllers FindUser',
			error: error.toString()
		});

		return { statusCode:500, message: error.toString() };
	}
}

async function ExistUser ({ id }) {
	try {
		const match = db.some(el => el.id == id);

		return { statusCode: 200, data: match };
	} catch(error) {
		console.log({
			step: 'controllers ExistUser',
			error: error.toString()
		});

		return { statusCode:500, message: error.toString() };
	}
}

module.exports = {
	FindUser,
	ExistUser
}