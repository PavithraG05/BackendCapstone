const {DataTypes} = require('sequelize')
const sequelize = require('./index')

const Author = sequelize.define('Author', {
  // Model attributes
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    biography: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

// Sync the model with the database
async function syncModel() {
  await Author.sync()
  console.log('Author model was synchronized successfully.')
}

syncModel()

module.exports = Author;
