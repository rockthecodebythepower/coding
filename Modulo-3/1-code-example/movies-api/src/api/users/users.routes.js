const UserRoutes = require('express').Router()

const { register, login, logout } = require('./users.controller')

const { isAuth } = require('../../middlewares/auth.middleware')

UserRoutes.post('/register', register)
UserRoutes.post('/login', login)
UserRoutes.post('/logout', [isAuth], logout)

module.exports = UserRoutes