'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Posts', [
      { author: 'JohnDoe', content: 'First post! Excited to be here.', createdAt: new Date(), updatedAt: new Date() },
      { author: 'JohnDoe', content: 'Learning to code has been an amazing journey.', createdAt: new Date(), updatedAt: new Date() },
      { author: 'JaneSmith', content: 'Just finished a great book! Anyone read "The Great Gatsby"?', createdAt: new Date(), updatedAt: new Date() },
      { author: 'JaneSmith', content: 'Thinking about learning a new language. Python or JavaScript?', createdAt: new Date(), updatedAt: new Date() },
      { author: 'AliceW', content: 'Does anyone else love cats as much as I do?', createdAt: new Date(), updatedAt: new Date() },
      { author: 'AliceW', content: 'I tried a new recipe today. Homemade pizza is the best!', createdAt: new Date(), updatedAt: new Date() },
      { author: 'BobBuilder', content: 'Started a new construction project today. Will post updates.', createdAt: new Date(), updatedAt: new Date() },
      { author: 'CharlieBrown', content: 'Can anyone recommend a good comic book?', createdAt: new Date(), updatedAt: new Date() },
      { author: 'DexterLab', content: 'I love science!', createdAt: new Date(), updatedAt: new Date() },
      { author: 'DexterLab', content: 'Chemistry is fascinating.', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
