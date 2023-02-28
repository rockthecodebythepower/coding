const User = require('../api/models/user.model')
const { verifyToken } = require('../utils/token')

const isAuth = async (req, res, next) => {
  const token = req.headers.authorization?.replace('Bearer ', '')
  if (!token) return next(new Error('Unauthorized'))
  try {
    const decoded = verifyToken(token, process.env.JWT_SECRET)
    req.user = await User.findById(decoded.id)
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = { isAuth }
