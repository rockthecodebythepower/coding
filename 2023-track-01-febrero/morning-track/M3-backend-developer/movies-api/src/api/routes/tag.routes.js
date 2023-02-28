const TagRoutes = require('express').Router()

const {
  retrieveAllTags,
  retrieveTagByName,
  createTag,
} = require('../controllers/tag.controller')

const { isAuth } = require('../../middlewares/auth.middleware')

TagRoutes.get('/all', retrieveAllTags)
TagRoutes.get('/name/:name', retrieveTagByName)
TagRoutes.post('/create', [isAuth], createTag)

module.exports = TagRoutes
