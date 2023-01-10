const Movie = require('./movies.model');

const getAll = async (req, res, next) => {
  try {
    const movies = await Movie.find().populate('actors')
    res.status(200).json(movies)
  } catch (error) {
    return next(error)
  }
}

const getOne = async (req, res, next) => {
  try {
    const { id } = req.params
    const movies = await Movie.findById(id).populate('actors')
    res.status(200).json(movies)
  } catch (error) {
    return next(error)
  }
}

const postOne = async (req, res, next) => {
  try {
    const movie = new Movie(req.body)
    const movieDB = await movie.save()
    res.status(201).json(movieDB)
  } catch (error) {
    return next(error)
  }
}

const patchOne = async (req, res, next) => {
  try {
    const { id } = req.params
    const movie = new Movie(req.body)
    movie._id = id
    const updateMovie = await Movie.findByIdAndUpdate(id, movie)
    return res.status(200).json(updateMovie)
  } catch (error) {
    return next(error)
  }
}

const deleteOne = async (req, res, next) => {
  try {
    const { id } = req.params
    const movie = await Movie.findByIdAndDelete(id)
    return res.status(200).json(movie)
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  getAll,
  getOne,
  postOne,
  patchOne,
  deleteOne
}