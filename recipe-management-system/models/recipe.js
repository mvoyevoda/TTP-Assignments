'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recipe.init({
    title: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: true,
            len: [3]
        }
    },
    description: {
        type: DataTypes.TEXT,
        validate: {
            notEmpty: true,
            len: [0, 500]
        }
    },
    ingredients: {
        type: DataTypes.TEXT,
        validate: {
            notEmpty: true,
            len: [0, 1000]
        }
    },
    instructions: {
        type: DataTypes.TEXT,
        validate: {
            notEmpty: true,
            len: [0, 5000]
        }
    }
}, {
    sequelize,
    modelName: 'Recipe',
});
  return Recipe;
};