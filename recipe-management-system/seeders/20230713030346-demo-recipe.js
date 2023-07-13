'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Recipes', [{
      title: 'Chicken Curry',
      description: 'A delicious chicken curry recipe.',
      ingredients: 'Chicken, Curry Powder, Onion, Garlic',
      instructions: '1. Marinate the chicken. 2. Fry onions and garlic. 3. Add chicken and curry powder. 4. Simmer until cooked.',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Recipes', null, {});
  }
};

