const UserRoutes = require('express').Router()

const { isAuth } = require('../../middlewares/auth.middleware')
const { register, login, logout } = require('../controllers/user.controller')

UserRoutes.post('/register', register)
UserRoutes.post('/login', login)
UserRoutes.post('/logout', [isAuth], logout)

module.exports = UserRoutes
