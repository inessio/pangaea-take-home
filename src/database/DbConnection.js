const { Sequelize } = require('sequelize');
require('dotenv').config()

const options = {
    dbName:process.env.DB_NAME,
    dbUser:process.env.DB_USER,
    dbPassword:process.env.DB_PASSWORD,
    dbHost:process.env.DB_HOST,
}

const sequelize = new Sequelize(options.dbName, options.dbUser,options.dbPassword, {
    host: options.dbHost,
    dialect: 'mysql',
});

module.exports = sequelize;