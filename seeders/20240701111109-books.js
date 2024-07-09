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
    await queryInterface.bulkInsert('Books', [
      {
        title: 'A Little Princess',
        price: 649,
        publication_date:'1905-08-09',
        createdAt: new Date(),
        updatedAt: new Date(),
        author_id: 1,
        genre_id: 2
      },
      {
        title: 'Ratan Tata - A Complete Biography',
        price: 150,
        publication_date:'2021-11-18',
        createdAt: new Date(),
        updatedAt: new Date(),
        author_id: 2,
        genre_id: 6
      },
      {
        title: 'The Hidden Realm',
        price: 750,
        publication_date:'2023-05-15',
        createdAt: new Date(),
        updatedAt: new Date(),
        author_id: 3,
        genre_id: 2
      },
      {
        title: 'Echoes of Yesterday',
        price: 1750,
        publication_date:'2022-11-28',
        createdAt: new Date(),
        updatedAt: new Date(),
        author_id: 4,
        genre_id: 3
      },
      {
        title: 'Quantum Leap',
        price: 1750,
        publication_date:'2024-02-10',
        createdAt: new Date(),
        updatedAt: new Date(),
        author_id: 5,
        genre_id: 5
      },
      {
        title: 'Shadows in the Mist',
        price: 1750,
        publication_date:'2023-07-19',
        createdAt: new Date(),
        updatedAt: new Date(),
        author_id: 6,
        genre_id: 1
      },
      {
        title: 'Beyond the Horizon',
        price: 1750,
        publication_date:'2023-09-05',
        createdAt: new Date(),
        updatedAt: new Date(),
        author_id: 7,
        genre_id: 2
      },
      {
        title: 'Whispers in the Wind',
        price: 1750,
        publication_date:'2023-04-02',
        createdAt: new Date(),
        updatedAt: new Date(),
        author_id: 8,
        genre_id: 2
      },
      {
        title: 'The Last Stand',
        price: 1750,
        publication_date:'2022-08-15',
        createdAt: new Date(),
        updatedAt: new Date(),
        author_id: 9,
        genre_id: 1
      },
      {
        title: 'The Forgotten Key',
        price: 1750,
        publication_date:'2023-11-30',
        createdAt: new Date(),
        updatedAt: new Date(),
        author_id: 10,
        genre_id: 3
      },
      {
        title: 'Infinite Worlds',
        price: 1750,
        publication_date:'2024-01-08',
        createdAt: new Date(),
        updatedAt: new Date(),
        author_id:11,
        genre_id: 5
      },
      {
        title: 'A Glimmer of Hope',
        price: 1750,
        publication_date:'2023-06-20',
        createdAt: new Date(),
        updatedAt: new Date(),
        author_id: 12,
        genre_id: 11
      },
      {
        title: 'Darkness Falls',
        price: 1750,
        publication_date:'2022-12-25',
        createdAt: new Date(),
        updatedAt: new Date(),
        author_id: 13,
        genre_id: 4
      },
      {
        title: 'The Golden Hour',
        price: 1750,
        publication_date:'2023-10-12',
        createdAt: new Date(),
        updatedAt: new Date(),
        author_id: 14,
        genre_id: 1
      },
      {
        title: 'Into the Abyss',
        price: 1750,
        publication_date:'2024-03-18',
        createdAt: new Date(),
        updatedAt: new Date(),
        author_id: 15,
        genre_id: 2
      },
      {
        title: 'Through the Looking Glass',
        price: 1750,
        publication_date:'2023-08-07',
        createdAt: new Date(),
        updatedAt: new Date(),
        author_id: 16,
        genre_id: 2
      },
      {
        title: 'The Sands of Time',
        price: 1750,
        publication_date:'2022-09-14',
        createdAt: new Date(),
        updatedAt: new Date(),
        author_id: 17,
        genre_id: 3
      },
      {
        title: 'The Quantum Paradox',
        price: 1750,
        publication_date:'2024-04-22',
        createdAt: new Date(),
        updatedAt: new Date(),
        author_id: 18,
        genre_id: 5
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Books', null, {});
  }
};

//npx sequelize-cli db:seed --seed 20240701111109-books.js