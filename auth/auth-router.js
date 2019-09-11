// IMPORTS/INITIALIZATION =========================|
// ================================================|
// bring in express router ------------------------|
const router = require('express').Router()
// ------------------------------------------------|
// bring in hashing function for pwords -----------|
const bcrypt = require('bcryptjs')
// ------------------------------------------------|
// bring in web tokens ----------------------------|
const jwt = require('jsonwebtoken')
// ------------------------------------------------|
// bring in db helpers ----------------------------|
const Users = require('../users/users-model.js')
// ------------------------------------------------|
// bring in restricted middleware -----------------|
const restricted = require('../auth/restricted-middleware.js')
// ------------------------------------------------|
// DEFINE ENDPOINTS ===============================|
// ================================================|

// ------------------------------------------------|
// EXPORT =========================================|
// ================================================|
module.exports = router
