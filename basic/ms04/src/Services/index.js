const Controllers = require('../Controllers');

async function Create({ name, age, address, nationality, color }) {
	try {
		const { statusCode, data, message } = await Controllers.Create({ name, age, address, nationality, color });

		return { statusCode, data, message };
	} catch(error) {
		console.log({
			step: 'services Create',
			error: error.toString()
		});

		return { statusCode:500, message: error.toString() };
	}
}


async function Delete({ id }) {
	try {
		const { statusCode, data, message } = await Controllers.Delete({ where: { id } });

		return { statusCode, data, message };
	} catch(error) {
		console.log({
			step: 'services Delete',
			error: error.toString()
		});

		return { statusCode:500, message: error.toString() };
	}
}

module.exports = {
	Create,
	Delete
};