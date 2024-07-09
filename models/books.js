const { DataTypes } = require('sequelize')
const sequelize = require('./index')

const Book = sequelize.define('Book', {
  // Model attributes
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    publication_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    author_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

const Author = require('./authors')
const Genre = require('./genres')
Author.hasMany(Book,{
    foreignKey: 'author_id'
});

Book.belongsTo(Author,{
    foreignKey: 'author_id'
});

Genre.hasMany(Book,{
    foreignKey: 'genre_id'
});
Book.belongsTo(Genre,{
    foreignKey: 'genre_id'
});

// Sync the model with the database
async function syncModel() {
  await Book.sync()
  console.log('Book model was synchronized successfully.')
}

syncModel()

module.exports = Book;


