const MovieRoutes = require('express').Router()

const { isAuth } = require('../../middlewares/auth.middleware')

const {
  getAll,
  getOne,
  postOne,
  patchOne,
  deleteOne
} = require('./movies.controller')


MovieRoutes.get('/', getAll)
MovieRoutes.get('/:id', getOne)
MovieRoutes.post('/', [isAuth], postOne)
MovieRoutes.patch('/:id', [isAuth], patchOne)
MovieRoutes.delete('/:id', [isAuth], deleteOne)

module.exports = MovieRoutes