const User = require('../api/users/users.model')
const JWT = require('../utils/jwt/jwt')

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    if (!token) return next(new Error('Unauthorize'))

    const parsedToken = token.replace('Bearer ', '')
    const validToken = JWT.verifyToken(parsedToken, process.env.JWT_SECRET)

    const userLogged = await User.findById(validToken.id)
    req.user = userLogged

    next()
  } catch (error) {
    return next(error)
  }
}

module.exports = { isAuth }