//get the environment variable from the .env file to use in mongoose.connect 
require('dotenv').config()

const express = require('express')
const server = express()
const mongoose = require('mongoose')


//{ useUnifiedTopology: true } to the MongoClient constructor
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

// 'on' = on error log out that there is an error
db.on('error', (error) => console.log('error connecting to db', error))

// 'once' = once we connect (will only run once) will let us know we connected to the database
db.once('open', () => console.log('connected to database! hurrah!'))

server.use(express.json())

// create routes
const subscriberRouter = require('./routes/subscribers')
server.use('/subscribers', subscriberRouter)

const port = 3000
server.listen(port, () => console.log(`server listening on port ${port}`))