// app.js
const express = require('express')
const cors = require('cors')
const { Sequelize } = require('sequelize')
const config = require('./config/config.json');

const app = express()
app.use(cors())
const PORT = process.env.PORT || 3000

app.use(express.json())

// Initialize Sequelize
const sequelize = new Sequelize(config.database.database, config.database.username, config.database.password, {
  host: config.database.host,
  dialect: config.database.dialect
})

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

// Define models


// Sync models
sequelize.sync()
  .then(() => {
    console.log('Models synchronized successfully.')
  })
  .catch(err => {
    console.error('Error synchronizing models:', err)
  })

// Import routes
const authorRoutes = require('./routes/authorRoutes')
app.use('/api/authors', authorRoutes)

const bookRoutes = require('./routes/bookRoutes')
app.use('/api/books', bookRoutes)

const genreRoutes = require('./routes/genreRoutes')
app.use('/api/genres', genreRoutes)

app.get('/', (req, res) => {
  res.send('Welcome to the Book store demo!')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})