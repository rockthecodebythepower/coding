const ActorModel = require('../models/actor.model')

const { deleteImgCloudinary } = require('../../middlewares/files.middleware')

async function retrieveAllActors(req, res, next) {
  try {
    const actors = await ActorModel.find().populate('tag')
    res.status(200).json(actors)
  } catch (error) {
    return next(error.message)
  }
}

async function retrieveActorById(req, res, next) {
  try {
    const { id } = req.params
    const actor = await ActorModel.findById(id).populate('tag')
    res.status(200).json(actor)
  } catch (error) {
    return next(error.message)
  }
}

async function retrieveActorByName(req, res, next) {
  try {
    const { name } = req.params
    const actors = await ActorModel.find({ name }).populate('tag')
    res.status(200).json(actors)
  } catch (error) {
    return next(error.message)
  }
}

async function createActor(req, res, next) {
  try {
    const actor = new ActorModel({
      ...req.body,
      photo: req.file ? req.file.path : 'not image',
    })
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
    console.log(actor)
    if (actor.photo) deleteImgCloudinary(actor.photo)
    res.status(204).json(actor.name)
  } catch (error) {
    return next(error.message)
  }
}

async function updateActorById(req, res, next) {
  try {
    const { id } = req.params
    const updateActor = await ActorModel.findByIdAndUpdate(
      id,
      {
        ...req.body,
        photo: req.file ? req.file.path : 'not image',
      },
      { new: true }
    )
    res.status(200).json(updateActor)
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
  updateActorById,
}
