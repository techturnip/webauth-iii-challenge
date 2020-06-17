// IMPORTS/INITIALIZATION =========================|
// ================================================|
// bring in web token library ---------------------|
const jwt = require('jsonwebtoken')
// ------------------------------------------------|
// EXPORT =========================================|
// ================================================|
module.exports = (req, res, next) => {
  let token

  if (req.headers.authorization) {
    token = req.headers.authorization

    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (err) {
          console.log('failed verify', err)
          res.status(401).json({
            message: 'Verification failed'
          })
        } else {
          // token is valid
          req.decodedToken = decodedToken
          next()
        }
      })
    }
  } else {
    res.status(401).json({
      message: 'Please log in and try again'
    })
  }
}
