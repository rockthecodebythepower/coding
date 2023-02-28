const jwt = require('jsonwebtoken')

const generateToken = (id, email) => {
  if (!id || !email) {
    throw new Error('Email or id is missing')
  }

  return jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn: '1d' })
}

const verifyToken = (token) => {
  if (!token) {
    throw new Error('Token is missing')
  }

  return jwt.verify(token, process.env.JWT_SECRET)
}

module.exports = {
  generateToken,
  verifyToken,
}
