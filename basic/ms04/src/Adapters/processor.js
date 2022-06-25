const { Servicio } = require('../Services');
const { InternalError } = require('../settings');
const { queueView } = require('./index');

queueView.process(async (job, done) => {
	const { id } = job.data;

	try {
		const { statusCode, data, message } = await Servicio({ id });

		done(null, { statusCode, data, message });
	} catch(error) {
		console.log({
			step: 'adapters Adaptador',
			error: error.toString()
		});

		done(null, { statusCode:500, message: InternalError });
	}
});