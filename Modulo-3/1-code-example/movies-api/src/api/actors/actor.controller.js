const Actor = require('./actor.model')
const { setError } = require('../../utils/error/error')

const { deleteImgCloudinary } = require('../../middlewares/deleteFile.middleware')

const getAll = async (req, res, next) => {
  try {
    const actors = await Actor.find()
    res.status(200).json(actors)
  } catch (error) {
    return next(setError(404, 'Not actors in DB'))
  }
}

const getOne = async (req, res, next) => {
  try {
    const { id } = req.params
    const actor = await Actor.findById(id)
    res.status(200).json(actor)
  } catch (error) {
    return next(setError(404, 'Not find actor in DB'))
  }
}

const postOne = async (req, res, next) => {
  try {
    const actor = new Actor()
    actor.name = req.body.name
    actor.age = req.body.age
    if (req.file) actor.img = req.file.path
    console.log(actor)
    const actorDB = await actor.save()
    res.status(201).json(actorDB)
  } catch (error) {
    return next(setError(404, 'Not is posible create a actor in DB'))
  }
}

const patchOne = async (req, res, next) => {
  try {
    const { id } = req.params
    const actor = new Actor(req.body)
    actor._id = id
    const updateActor = await Actor.findByIdAndUpdate(id, actor)
    return res.status(200).json(updateActor)
  } catch (error) {
    return next(error)
  }
}

const deleteOne = async (req, res, next) => {
  try {
    console.log(req)
    const { id } = req.params
    const actor = await Actor.findByIdAndDelete(id)
    if (actor.img) deleteImgCloudinary(actor.img)
    return res.status(200).json(actor)
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  getAll,
  getOne,
  postOne,
  patchOne,
  deleteOne,
}