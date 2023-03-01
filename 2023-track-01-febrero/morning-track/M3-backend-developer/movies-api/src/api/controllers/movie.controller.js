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

// {
//   name: 'Erase una vez en hollywood',
//   year: '2021:09:10',
//   actors: [ '63f495eacae5388905441805' ],
//   tag: [ '63f492e2b52d43b8e07a0825' ]
// }

async function createMovie(req, res, next) {
  try {
    console.log(req.body.actors)

    const movieToSave = {
      name: req.body.name,
      year: req.body.year,
      actors: req.body.actors,
      tags: req.body.tags,
    }
    console.log('Creo Object', movieToSave)
    const movie = new MovieModel(movieToSave)
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
