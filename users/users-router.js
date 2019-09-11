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
  const { sub, department } = req.decodedToken
})
// ------------------------------------------------|
// EXPORT =========================================|
// ================================================|
module.exports = router
