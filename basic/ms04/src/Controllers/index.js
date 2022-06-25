const { Model } = require('../Models');

async function Create({ name, age, address, nationality, color }) {
	try {
		const instance = await Model.create({
			name,
			age,
			address,
			nationality,
			color
		}, {
			fields: [
				'name',
				'age',
				'address',
				'nationality',
				'color'
			]
		});

		return { statusCode: 200, data: instance.toJSON() }

	} catch(error) {
		console.log({
			step: 'controller Create',
			error: error.toString()
		});

		return { statusCode: 400, message: error.toString() };
	}
}

async function Delete({ where = {} }) {
	try {
		await Model.destroy({ where });

		return { statusCode: 200, data: "OK" }
	} catch(error) {
		console.log({
			step: 'controller Create',
			error: error.toString()
		});

		return { statusCode: 400, message: error.toString() };
	}
}

async function Update({ name, age, address, nationality, color, id }) {
	try {
		const instance = await Model.create({
			name,
			age,
			address,
			nationality,
			color
		}, {
			where: { id }
		});

		return { statusCode: 200, data: instance[1][0].toJSON() }
	} catch(error) {
		console.log({
			step: 'controller Create',
			error: error.toString()
		});

		return { statusCode: 400, message: error.toString() };
	}
}

async function FindOne() {
	try {

	} catch(error) {
		console.log({
			step: 'controller Create',
			error: error.toString()
		});

		return { statusCode: 200, message: error.toString() };
	}
}

async function View() {
	try {

	} catch(error) {
		console.log({
			step: 'controller Create',
			error: error.toString()
		});

		return { statusCode: 200, message: error.toString() };
	}
}

// async function FindUser ({ id }) {
// 	try {
// 		const user =  db.filter(el => el.id === id)[0];

// 		console.log(user);

// 		await setTimeout(10000);

// 		return { statusCode: 200, data: user };
// 	} catch(error) {
// 		console.log({
// 			step: 'controllers FindUser',
// 			error: error.toString()
// 		});

// 		return { statusCode:500, message: error.toString() };
// 	}
// }

// async function ExistUser ({ id }) {
// 	try {
// 		const match = db.some(el => el.id == id);

// 		return { statusCode: 200, data: match };
// 	} catch(error) {
// 		console.log({
// 			step: 'controllers ExistUser',
// 			error: error.toString()
// 		});

// 		return { statusCode:500, message: error.toString() };
// 	}
// }

module.exports = {
	Create,
	Delete,
	Update,
	FindOne,
	View
}