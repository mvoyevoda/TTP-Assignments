const { Sequelize } = require('sequelize');

const env = 'development';
const config = require('./config.json')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  // Add other configuration as needed, e.g. logging: false
});

module.exports = sequelize;
