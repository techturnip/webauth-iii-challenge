// IMPORTS/INITIALIZATION =========================|
// ================================================|
// bring knex operations --------------------------|
const db = require('../data/dbConfig.js')
// ------------------------------------------------|
// DEFINE HELPER METHODS ==========================|
// ================================================|
const add = async user => {
  const [id] = await db('users').insert(user)
  return findById(id)
}
// ------------------------------------------------|
const find = () => db('users').select('id', 'username', 'department')
// ------------------------------------------------|
const findBy = filter =>
  db('users')
    .select('id', 'username', 'department')
    .where(filter)
// ------------------------------------------------|
const findById = id =>
  db('users')
    .select('id', 'username', 'department')
    .where({ id })
    .first()
// ------------------------------------------------|
// EXPORT =========================================|
// ================================================|
module.exports = {
  add,
  find,
  findBy,
  findById
}
