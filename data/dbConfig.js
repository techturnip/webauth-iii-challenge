// IMPORTS/INITIALIZATION =========================|
// ================================================|
const knex = require('knex')
// ------------------------------------------------|
// bring in knex configuration --------------------|
const knexConfig = require('../knexfile.js')
// ------------------------------------------------|
// EXPORT =========================================|
// ================================================|
module.exports = knex(knexConfig.development)
