const ActorRoutes = require('express').Router()

const {
  retrieveAllActors,
  retrieveActorById,
  retrieveActorByName,
  createActor,
  deleteActorById,
  updateActorById,
} = require('../controllers/actor.controller')

ActorRoutes.get('/all', retrieveAllActors)
ActorRoutes.get('/id/:id', retrieveActorById)
ActorRoutes.get('/name/:name', retrieveActorByName)
ActorRoutes.post('/create', createActor)
ActorRoutes.delete('/remove/:id', deleteActorById)
ActorRoutes.put('/update/:id', updateActorById)

module.exports = ActorRoutes
