require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.DB_URL
	? new Sequelize(process.env.DB_URL)
	: new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
			host: process.env.DB_HOST || 'localhost',
			dialect: 'mysql',
			dialectOptions: {
				decimalNumbers: true,
			},
	  });

module.exports = sequelize;