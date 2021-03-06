const { sequelize } = require('../settings');
const { DataTypes } = require('sequelize');

const Model = sequelize.define('curso', {
	name: {
		type: DataTypes.STRING
	},
	age: {
		type: DataTypes.BIGINT
	},
	address: {
		type: DataTypes.STRING
	},
	nationality: {
		type: DataTypes.STRING
	},
	color: {
		type: DataTypes.STRING
	}
});

const SyncDB = async () => {
	try {
      console.log("Vamos a inicializar base datos");

		await Model.sync({ logging: false});

      console.log("Base de datos inicializada");

		return { statusCode: 200, data: "OK" };
	} catch(error) {
		console.log(error);

		return { statusCode: 500, message: error.toString() };
	}
}

module.exports = { SyncDB, Model };
