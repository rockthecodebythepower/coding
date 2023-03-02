const MovieModel = require('../models/movie.model')

const { deleteImgCloudinary } = require('../../middlewares/files.middleware')

async function retrieveAllMovies(req, res, next) {
  try {
    const movies = await MovieModel.find().populate(['actors', 'tags'])
    res.status(200).json(movies)
  } catch (error) {
    return next(error.message)
  }
}

async function retrieveMovieById(req, res, next) {
  try {
    const { id } = req.params
    const movie = await MovieModel.findById(id).populate(['actors', 'tags'])
    res.status(200).json(movie)
  } catch (error) {
    return next(error.message)
  }
}

async function retrieveMovieByName(req, res, next) {
  try {
    const { name } = req.params
    const movies = await MovieModel.find({ name }).populate(['actors', 'tags'])
    res.status(200).json(movies)
  } catch (error) {
    return next(error.message)
  }
}

async function createMovie(req, res, next) {
  try {
    const movie = new MovieModel({
      ...req.body,
      poster: req.file ? req.file.path : 'not image',
    })
    const movieDB = await movie.save()
    res.status(201).json(movieDB)
  } catch (error) {
    return next(error.message)
  }
}

async function deleteMovieById(req, res, next) {
  try {
    const { id } = req.params
    const movie = await MovieModel.findByIdAndDelete(id)
    if (movie.poster) deleteImgCloudinary(movie.poster)
    res.status(204).json(movie.name)
  } catch (error) {
    return next(error.message)
  }
}

async function updateMovieById(req, res, next) {
  try {
    const { id } = req.params
    const updateMovie = await MovieModel.findByIdAndUpdate(
      id,
      {
        ...req.body,
        poster: req.file ? req.file.path : 'not image',
      },
      {
        new: true,
      }
    )
    res.status(200).json(updateMovie)
  } catch (error) {
    return next(error.message)
  }
}

module.exports = {
  retrieveAllMovies,
  retrieveMovieById,
  retrieveMovieByName,
  createMovie,
  deleteMovieById,
  updateMovieById,
}
