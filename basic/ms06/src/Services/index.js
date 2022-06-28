const Controllers = require('../Controllers');
const { InternalError } = require('../settings');

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
      const findOne = await Controllers.FindOne({ where: { id } });

      if(findOne.statusCode !== 200){
         /*const response = {
            400: { statusCode: 400, message: "No existe el usuario a eliminar" },
            500: { statusCode: 500, message: InternalError }
         }

         return response[findOne.statusCode]*/

         switch(findOne.statusCode){
            case 400: return { statusCode: 400, message: "No existe el usuario a eliminar" };
            case 500: return { statusCode: 500, message: InternalError };
            default: return { statusCode: findOne.statusCode, message: findOne.message };
         }
      }

		const { statusCode, data, message } = await Controllers.Delete({ where: { id } });

      if(statusCode === 200 ) return { statusCode: 200, data: findOne.data };

      return { statusCode: 400, message: InternalError };
	} catch(error) {
		console.log({
			step: 'services Delete',
			error: error.toString()
		});

		return { statusCode:500, message: error.toString() };
	}
}

async function Update({ name, age, address, nationality, color, id }) {
	try {
		const { statusCode, data, message } = await Controllers.Update({ name, age, address, nationality, color, id });

		return { statusCode, data, message };
	} catch(error) {
		console.log({
			step: 'services Update',
			error: error.toString()
		});

		return { statusCode:500, message: error.toString() };
	}
}

async function FindOne({ id }) {
	try {
		const { statusCode, data, message } = await Controllers.FindOne({ where: {	id	} });

		return { statusCode, data, message };
	} catch(error) {
		console.log({
			step: 'services FindOne',
			error: error.toString()
		});

		return { statusCode:500, message: error.toString() };
	}
}

async function View({}) {
	try {
		const { statusCode, data, message } = await Controllers.View({});

		return { statusCode, data, message };
	} catch(error) {
		console.log({
			step: 'services Create',
			error: error.toString()
		});

		return { statusCode:500, message: error.toString() };
	}
}

module.exports = {
	Create,
	Delete,
	Update,
	FindOne,
	View
};
