const Services = require('../Services');
const { InternalError } = require('../settings');
const {
	queueCreate,
	queueDelete,
	queueUpdate,
	queueFindOne,
	queueView
} = require('./index');

async function Create(job, done) {
	const { name, age, address, nationality, color } = job.data;

	try {
		const { statusCode, data, message } = await Services.Create({
			name,
			age,
			address,
			nationality,
			color,
			id
		});

		done(null, { statusCode, data, message });
	} catch(error) {
		console.log({
			step: 'adapters queueCreate',
			error: error.toString()
		});

		done(null, { statusCode:500, message: InternalError });
	}
}

async function Delete(job, done) {
	const { id } = job.data;

	try {
		const { statusCode, data, message } = await Services.Delete({ id });

		done(null, { statusCode, data, message });
	} catch(error) {
		console.log({
			step: 'adapters queueDelete',
			error: error.toString()
		});

		done(null, { statusCode:500, message: InternalError });
	}
}

async function Update(job, done) {
	const { name, age, address, nationality, color, id } = job.data;

	try {
		const { statusCode, data, message } = await Services.Update({
			name,
			age,
			address,
			nationality,
			color,
			id
		});

		done(null, { statusCode, data, message });
	} catch(error) {
		console.log({
			step: 'adapters queueUpdate',
			error: error.toString()
		});

		done(null, { statusCode:500, message: InternalError });
	}
}

async function FindOne(job, done) {
	const { name, age, address, nationality, color, id } = job.data;

	try {
		const { statusCode, data, message } = await Services.FindOne({
			name,
			age,
			address,
			nationality,
			color,
			id
		});

		done(null, { statusCode, data, message });
	} catch(error) {
		console.log({
			step: 'adapters queueFindOne',
			error: error.toString()
		});

		done(null, { statusCode:500, message: InternalError });
	}
}

async function View(job, done) {
	const { name, age, address, nationality, color, id } = job.data;

	try {
		const { statusCode, data, message } = await Services.View({
			name,
			age,
			address,
			nationality,
			color,
			id
		});

		done(null, { statusCode, data, message });
	} catch(error) {
		console.log({
			step: 'adapters queueView',
			error: error.toString()
		});

		done(null, { statusCode:500, message: InternalError });
	}
}

async function run() {
	try {
		queueCreate.process(Create);
		queueDelete.process(Delete);
		queueUpdate.process(Update);
		queueFindOne.process(FindOne);
		queueView.process(View);
	} catch (error) {
		console.log(error)
	}
}

module.exports = {
	Create,
	Delete,
	Update,
	FindOne,
	View,
	run
}