'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'author', targetKey: 'username' });
      this.belongsTo(models.Post, { foreignKey: 'postId', targetKey: 'id' });
    }
  }

  Comment.init({
    author: DataTypes.STRING,
    content: DataTypes.TEXT,
    postId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment',
  });

  return Comment;
};
