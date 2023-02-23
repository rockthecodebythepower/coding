const MovieRoutes = require('express').Router()

const {
  retrieveAllMovies,
  retrieveMovieById,
  retrieveMovieByName,
  createMovie,
  deleteMovieById,
  updateMovieById,
} = require('../controllers/movie.controller')

MovieRoutes.get('/all', retrieveAllMovies)
MovieRoutes.get('/id/:id', retrieveMovieById)
MovieRoutes.get('/name/:name', retrieveMovieByName)
MovieRoutes.post('/create', createMovie)
MovieRoutes.delete('/remove/:id', deleteMovieById)
MovieRoutes.put('/update/:id', updateMovieById)

module.exports = MovieRoutes
