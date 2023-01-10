const ActorRoutes = require('express').Router()

const { isAuth } = require('../../middlewares/auth.middleware')

const upload = require('../../middlewares/updateFile.middleware')

const {
  getAll,
  getOne,
  postOne,
  patchOne,
  deleteOne
} = require('./actor.controller')


ActorRoutes.get('/', getAll)
ActorRoutes.get('/:id', getOne)
ActorRoutes.post('/', [isAuth], upload.single('img'), postOne)
ActorRoutes.patch('/:id', [isAuth], upload.single('img'), patchOne)
ActorRoutes.delete('/:id', [isAuth], deleteOne)

module.exports = ActorRoutes