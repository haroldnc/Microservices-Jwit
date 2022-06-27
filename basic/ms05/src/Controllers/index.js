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
			],
         logging: false
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
		await Model.destroy({ where, logging: false });

		return { statusCode: 200, data: "OK" }
	} catch(error) {
		console.log({
			step: 'controller Delete',
			error: error.toString()
		});

		return { statusCode: 400, message: error.toString() };
	}
}

async function Update({ name, age, address, nationality, color, id }) {
	try {
		const instance = await Model.update({
			name,
			age,
			address,
			nationality,
			color
		}, {
			where: { id },
         logging: false
		});

		return { statusCode: 200, data: instance[1][0].toJSON() }
	} catch(error) {
		console.log({
			step: 'controller Update',
			error: error.toString()
		});

		return { statusCode: 400, message: error.toString() };
	}
}

async function FindOne({ where = {} }) {
	try {
		const instance = await Model.findOne({ where, logging: false});

		return { statusCode: 200, data: instance.toJSON() };
	} catch(error) {
		console.log({
			step: 'controller FindOne',
			error: error.toString()
		});

		return { statusCode: 400, message: error.toString() };
	}
}

async function View({ where = {} }) {
	try {
		const instances = await Model.findAll({ where, logging: false });

		return { statusCode: 200, data: instances };
	} catch(error) {
		console.log({
			step: 'controller View',
			error: error.toString()
		});

		return { statusCode: 200, message: error.toString() };
	}
}

module.exports = {
	Create,
	Delete,
	Update,
	FindOne,
	View
}
