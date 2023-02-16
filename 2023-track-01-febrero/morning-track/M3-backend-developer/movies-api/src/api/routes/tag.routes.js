const TagRoutes = require('express').Router()

const {
  retrieveAllTags,
  retrieveTagByName,
  createTag,
} = require('../controllers/tag.controller')

TagRoutes.get('/all', retrieveAllTags)
TagRoutes.get('/name/:name', retrieveTagByName)
TagRoutes.post('/create', createTag)

module.exports = TagRoutes
