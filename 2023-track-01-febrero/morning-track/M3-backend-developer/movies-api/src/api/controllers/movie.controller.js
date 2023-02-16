const MovieModel = require('../models/movie.model')

async function retrieveAllMovies(req, res, next) {
  try {
    const movies = await MovieModel.find()
    res.status(200).json(movies)
  } catch (error) {
    return next(error.message)
  }
}

async function retrieveMovieById(req, res, next) {
  try {
    const { id } = req.params
    const movie = await MovieModel.findById(id)
    res.status(200).json(movie)
  } catch (error) {
    return next(error.message)
  }
}

async function retrieveMovieByName(req, res, next) {
  try {
    const { name } = req.params
    const movies = await MovieModel.find({ name })
    res.status(200).json(movies)
  } catch (error) {
    return next(error.message)
  }
}

async function createMovie(req, res, next) {
  try {
    const movie = new MovieModel(req.body)
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
    res.status(200).json(movie.name)
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
}
