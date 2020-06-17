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
// Auth route base url - '/api/auth' --------------|
// ------------------------------------------------|
// POST Request adds a new user to the database ---|
router.post('/register', (req, res) => {
  let user = req.body

  if (user.username && user.password) {
    // run user password through hashing function
    const hash = bcrypt.hashSync(user.password, 10)
    // set the hashed password as the password in the
    // user object
    user.password = hash
  } else {
    res.status(500).json({
      message: 'Must include a new user'
    })
  }

  // add the user to the database
  Users.add(user)
    .then(newUser => {
      // generate token from the new user
      const token = generateToken(newUser)
      // send back newUser and token
      res.status(201).json({
        user: newUser,
        token
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
})
// ------------------------------------------------|
router.post('/login', (req, res) => {
  let { username, password } = req.body

  Users.findBy({ username })
    .first()
    .then(user => {
      // verify user
      if (user && bcrypt.compareSync(password, user.password)) {
        // if password lines up generate token
        const token = generateToken(user)
        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token
        })
      } else {
        res.status(401).json({
          message: 'Invalid Credentials'
        })
      }
    })
    .catch(err => {
      res.status(500).json(err)
    })
})
// ------------------------------------------------|
// Define the token generator ---------------------|
function generateToken(user) {
  const payload = {
    sub: user.id,
    username: user.username,
    department: user.department
  }

  const options = {
    expiresIn: '1d'
  }

  return jwt.sign(payload, process.env.JWT_SECRET, options)
}
// ------------------------------------------------|
// EXPORT =========================================|
// ================================================|
module.exports = router
