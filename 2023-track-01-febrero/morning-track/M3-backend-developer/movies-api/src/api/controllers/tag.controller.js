const TagModel = require('../models/tag.model')

async function retrieveAllTags(req, res, next) {
  try {
    const tags = await TagModel.find()
    res.status(200).json(tags)
  } catch (error) {
    return next(error.message)
  }
}

async function retrieveTagByName(req, res, next) {
  try {
    const { name } = req.params
    const tags = await TagModel.find({ name })
    res.status(200).json(tags)
  } catch (error) {
    return next(error.message)
  }
}

async function createTag(req, res, next) {
  try {
    const tag = new TagModel(req.body)
    const tagDB = await tag.save()
    res.status(201).json(tagDB)
  } catch (error) {
    return next(error.message)
  }
}

module.exports = {
  retrieveAllTags,
  retrieveTagByName,
  createTag,
}
