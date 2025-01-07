const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const bookRoutes = require('./routes/bookRoutes')
const transactionRoutes = require('./routes/transactionRoutes')
const authRoutes = require('./routes/authRoutes')

const app = express()
app.use(bodyParser.json())
app.use(cors())

// Connect to MongoDB
const database = require('./config/database')
database.connect()

// Routes
app.use('/books', bookRoutes)
app.use('/transactions', transactionRoutes)
app.use('/auth', authRoutes)

require('dotenv').config()

// Start Server
const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`Server running on ${PORT}`))
