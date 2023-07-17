'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js'); // Importing the Sequelize instance

class User extends Model {
  static associate(models) {
    this.hasMany(models.Post, { foreignKey: 'author', sourceKey: 'username' });
    this.hasMany(models.Comment, { foreignKey: 'author', sourceKey: 'username' });
  }
}

User.init({
  username: {
    type: DataTypes.STRING,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  password: DataTypes.STRING
}, {
  sequelize,
  modelName: 'User',
});

module.exports = User;
