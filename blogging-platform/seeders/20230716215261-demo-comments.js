'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Comments', [
      { author: 'JaneSmith', content: 'Totally agree with you, John!', postId: 1, createdAt: new Date(), updatedAt: new Date() },
      { author: 'AliceW', content: 'I love "The Great Gatsby" too!', postId: 3, createdAt: new Date(), updatedAt: new Date() },
      { author: 'BobBuilder', content: 'Python is a great choice, Jane!', postId: 4, createdAt: new Date(), updatedAt: new Date() },
      { author: 'CharlieBrown', content: 'I recommend "The Sandman" by Neil Gaiman.', postId: 8, createdAt: new Date(), updatedAt: new Date() },
      { author: 'JohnDoe', content: 'Looking forward to your updates, Bob!', postId: 7, createdAt: new Date(), updatedAt: new Date() },
      { author: 'JohnDoe', content: 'I love cats too, Alice!', postId: 5, createdAt: new Date(), updatedAt: new Date() },
      { author: 'JaneSmith', content: 'Homemade pizza sounds delicious!', postId: 6, createdAt: new Date(), updatedAt: new Date() },
      { author: 'JaneSmith', content: 'Can you share the recipe, Alice?', postId: 6, createdAt: new Date(), updatedAt: new Date() },
      { author: 'AliceW', content: 'Sure, Jane! I\'ll post it soon.', postId: 6, createdAt: new Date(), updatedAt: new Date() },
      { author: 'DexterLab', content: 'I agree, science is fascinating!', postId: 9, createdAt: new Date(), updatedAt: new Date() },
      { author: 'DexterLab', content: 'Do you have a favorite branch of science, John?', postId: 1, createdAt: new Date(), updatedAt: new Date() },
      { author: 'CharlieBrown', content: 'I love chemistry too, Dexter!', postId: 10, createdAt: new Date(), updatedAt: new Date() },
      { author: 'BobBuilder', content: 'Construction and science intersect more than people think.', postId: 9, createdAt: new Date(), updatedAt: new Date() },
      { author: 'JaneSmith', content: 'Your pizza recipe was delicious, Alice!', postId: 6, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Comments', null, {});
  }
};
