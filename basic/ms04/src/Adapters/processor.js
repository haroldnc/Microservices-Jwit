const Services = require('../Services');
const { InternalError } = require('../settings');
const {
	queueCreate,
	queueDelete,
	queueUpdate,
	queueFindOne,
	queueView
} = require('./index');

queueCreate.process(async (job, done) => {
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
});

queueView.process(async (job, done) => {
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
});