const User = require('./users.model')

const bcrypt = require('bcrypt')

const JWT = require('../../utils/jwt/jwt')

const register = async (req, res, next) => {
  try {
    const user = new User(req.body)
    const userExist = await User.findOne({ email: user.email })
    if (userExist) return next(new Error())
    const userDB = await user.save();
    return res.status(201).json(userDB.name)
  } catch (error) {
    return next(error)
  }
}

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) return next(new Error('User not exist'))

    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = JWT.generateToken(user._id, user.email)
      return res.status(200).json({
        name: user.name,
        token: token
      })
    }
  } catch (error) {
    return next(error)
  }
}

const logout = async (req, res, next) => {
  try {
    return res.status(201).json({
      name: null,
      token: null
    })
  } catch (error) {
    return next(error)
  }
}

module.exports = { register, login, logout }