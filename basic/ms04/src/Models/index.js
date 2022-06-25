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
		Model.sync();
	} catch(error) {
		console.log(error);
	}
}

module.exports = { SyncDB, Model };