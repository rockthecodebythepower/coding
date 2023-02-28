const ActorRoutes = require('express').Router()

const {
  retrieveAllActors,
  retrieveActorById,
  retrieveActorByName,
  createActor,
  deleteActorById,
  updateActorById,
} = require('../controllers/actor.controller')

const { isAuth } = require('../../middlewares/auth.middleware')

ActorRoutes.get('/all', retrieveAllActors)
ActorRoutes.get('/id/:id', retrieveActorById)
ActorRoutes.get('/name/:name', retrieveActorByName)
ActorRoutes.post('/create', [isAuth], createActor)
ActorRoutes.delete('/remove/:id', [isAuth], deleteActorById)
ActorRoutes.put('/update/:id', [isAuth], updateActorById)

module.exports = ActorRoutes
