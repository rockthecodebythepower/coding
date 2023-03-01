const TeaserModel = require('../models/teaser.model')

async function retrieveAllTeasers(req, res, next) {
  try {
    const movies = await TeaserModel.find()
    res.status(200).json(movies)
  } catch (error) {
    return next(error.message)
  }
}

async function retrieveTeaserById(req, res, next) {
  try {
    const { id } = req.params
    const teaser = await TeaserModel.findById(id)
    res.status(200).json(teaser)
  } catch (error) {
    return next(error.message)
  }
}

async function createTeaser(req, res, next) {
  try {
    const teaser = new TeaserModel(req.body)
    const teaserDB = await teaser.save()
    res.status(201).json(teaserDB)
  } catch (error) {
    return next(error.message)
  }
}
module.exports = {
  retrieveAllTeasers,
  retrieveTeaserById,
  createTeaser,
}
