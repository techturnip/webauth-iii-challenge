// IMPORTS/INITIALIZATION =========================|
// ================================================|
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
require('dotenv').config()
const authRouter = require('../auth/auth-router.js')
const usersRouter = require('../users/users-router.js')
const server = express()
// GLOBAL MIDDLEWARES =============================|
// ================================================|
server.use(helmet())
server.use(express.json())
server.use(cors())
server.use('/api/auth', authRouter)
server.use('/api/users', usersRouter)
// ROOT ENDPOINT ==================================|
// ================================================|
server.get('/', (req, res) => {
  res.send("It's alive!")
})
// EXPORT =========================================|
// ================================================|
module.exports = server
