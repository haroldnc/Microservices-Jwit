const { FindUser, ExistUser } = require('../Controllers');

async function Servicio ({ id }) {
	try {
		const existUser = await ExistUser({ id });

		if (existUser.statusCode !== 200) throw(existUser.message);
		if (!existUser.data) throw("No existe el usuario");

		const findUser = await FindUser({ id });

		if (findUser.statusCode !== 200) throw(findUser.message);

		if (findUser.data.info.edad > 18) {
			console.log('Eres mayor de edad');
		}

		return { statusCode: 200, data: findUser.data };
	} catch(error) {
		console.log({
			step: 'services Servicio',
			error: error.toString()
		});

		return { statusCode:500, message: error.toString() };
	}
}

module.exports = { Servicio };