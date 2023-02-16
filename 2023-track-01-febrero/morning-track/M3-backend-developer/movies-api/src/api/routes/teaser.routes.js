const TeaserRoutes = require('express').Router()

const {
  retrieveAllTeasers,
  retrieveTeaserById,
  createTeaser,
} = require('../controllers/teaser.controller')

TeaserRoutes.get('/all', retrieveAllTeasers)
TeaserRoutes.get('/id/:id', retrieveTeaserById)
TeaserRoutes.post('/create', createTeaser)

module.exports = TeaserRoutes
