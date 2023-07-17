'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

class Post extends Model {
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'author', targetKey: 'username' });
    this.hasMany(models.Comment, { foreignKey: 'postId', sourceKey: 'id' });
  }
}

Post.init({
  author: DataTypes.STRING,
  content: DataTypes.TEXT
}, {
  sequelize,
  modelName: 'Post',
});

module.exports = Post;

