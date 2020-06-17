// IMPORTS/INITIALIZATION =========================|
// ================================================|
// bring in express router ------------------------|
const router = require('express').Router()
// ------------------------------------------------|
// bring in db helpers ----------------------------|
const Users = require('./users-model.js')
// ------------------------------------------------|
// bring in restricted middleware -----------------|
const restricted = require('../auth/restricted-middleware.js')
// ------------------------------------------------|
// DEFINE ENDPOINTS ===============================|
// ================================================|
router.get('/', restricted, (req, res) => {
  const { department } = req.decodedToken

  Users.findBy({ department })
    .then(users => {
      // remove password before sending data back
      // to the client
      users.forEach(user => {
        delete user.password
      })

      res.json(users)
    })
    .catch(err => res.send(err))
})
// ------------------------------------------------|
// EXPORT =========================================|
// ================================================|
module.exports = router
