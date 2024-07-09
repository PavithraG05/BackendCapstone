'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Genres', [
      {
        genre_name: 'thriller',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        genre_name: 'fantasy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        genre_name: 'history',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        genre_name: 'horror',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        genre_name: 'science fiction',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        genre_name: 'biography',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        genre_name: 'self-help',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        genre_name: 'spirituality',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        genre_name: 'politics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        genre_name: 'law',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        genre_name: 'literacy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        genre_name: 'travel and tourism',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        genre_name: 'sports',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Genres', null, {});
  }
};

//npx sequelize-cli db:seed --seed 20240701111303-genres.js