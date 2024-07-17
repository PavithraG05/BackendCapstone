const { DataTypes } = require('sequelize')
const sequelize = require('./index')

const User = sequelize.define('User',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
})

async function syncModel() {
    await User.sync()
    console.log('Login model was synchronized successfully.')
}

syncModel()

module.exports = User;