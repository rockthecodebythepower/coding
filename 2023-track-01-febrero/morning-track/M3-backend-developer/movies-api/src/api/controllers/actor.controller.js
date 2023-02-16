const ActorModel = require('../models/actor.model')

async function retrieveAllActors(req, res, next) {
  try {
    const actors = await ActorModel.find()
    res.status(200).json(actors)
  } catch (error) {
    return next(error.message)
  }
}

async function retrieveActorById(req, res, next) {
  try {
    const { id } = req.params
    const actor = await ActorModel.findById(id)
    res.status(200).json(actor)
  } catch (error) {
    return next(error.message)
  }
}

async function retrieveActorByName(req, res, next) {
  try {
    const { name } = req.params
    const actors = await ActorModel.find({ name })
    res.status(200).json(actors)
  } catch (error) {
    return next(error.message)
  }
}

async function createActor(req, res, next) {
  try {
    const actor = new ActorModel(req.body)
    const actorDB = await actor.save()
    res.status(201).json(actorDB)
  } catch (error) {
    return next(error.message)
  }
}

async function deleteActorById(req, res, next) {
  try {
    const { id } = req.params
    const actor = await ActorModel.findByIdAndDelete(id)
    res.status(200).json(actor.name)
  } catch (error) {
    return next(error.message)
  }
}

module.exports = {
  retrieveAllActors,
  retrieveActorById,
  retrieveActorByName,
  createActor,
  deleteActorById,
}
