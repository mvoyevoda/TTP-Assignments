'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      { username: 'JohnDoe', email: 'john.doe@example.com', password: 'password1', createdAt: new Date(), updatedAt: new Date() },
      { username: 'JaneSmith', email: 'jane.smith@example.com', password: 'password2', createdAt: new Date(), updatedAt: new Date() },
      { username: 'AliceW', email: 'alice.w@example.com', password: 'password3', createdAt: new Date(), updatedAt: new Date() },
      { username: 'BobBuilder', email: 'bob.builder@example.com', password: 'password4', createdAt: new Date(), updatedAt: new Date() },
      { username: 'CharlieBrown', email: 'charlie.brown@example.com', password: 'password5', createdAt: new Date(), updatedAt: new Date() },
      { username: 'DexterLab', email: 'dexter.lab@example.com', password: 'password6', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
