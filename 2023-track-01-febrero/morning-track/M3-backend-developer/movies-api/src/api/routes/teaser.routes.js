const TeaserRoutes = require('express').Router()

const { isAuth } = require('../../middlewares/auth.middleware')
const {
  retrieveAllTeasers,
  retrieveTeaserById,
  createTeaser,
} = require('../controllers/teaser.controller')

TeaserRoutes.get('/all', retrieveAllTeasers)
TeaserRoutes.get('/id/:id', retrieveTeaserById)
TeaserRoutes.post('/create', [isAuth], createTeaser)

module.exports = TeaserRoutes
