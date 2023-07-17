'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
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

  return User;
};
