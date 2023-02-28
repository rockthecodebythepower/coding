const UserModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const { generateToken } = require('../../utils/token')

async function register(req, res, next) {
  try {
    const user = new UserModel(req.body)
    const userExist = await UserModel.findOne({ mail: user.mail })
    if (userExist) return next(new Error('User already exists'))

    const userDB = await user.save()
    return res.status(201).json(userDB)
  } catch (error) {
    return next(error)
  }
}

async function login(req, res, next) {
  try {
    const user = await UserModel.findOne({ mail: req.body.mail })
    if (!user) return next(new Error('User not exist'))
    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = generateToken(user._id, user.mail)
      return res.status(200).json(token)
    } else {
      return next(new Error('Incorrect Password'))
    }
  } catch (error) {
    return next(error)
  }
}

async function logout(req, res, next) {
  try {
    return res.status(201).json(null)
  } catch (error) {
    return next(error)
  }
}

module.exports = { register, login, logout }
