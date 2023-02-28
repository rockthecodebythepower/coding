const MovieRoutes = require('express').Router()

const {
  retrieveAllMovies,
  retrieveMovieById,
  retrieveMovieByName,
  createMovie,
  deleteMovieById,
  updateMovieById,
} = require('../controllers/movie.controller')

const { isAuth } = require('../../middlewares/auth.middleware')

MovieRoutes.get('/all', retrieveAllMovies)
MovieRoutes.get('/id/:id', retrieveMovieById)
MovieRoutes.get('/name/:name', retrieveMovieByName)
MovieRoutes.post('/create', [isAuth], createMovie)
MovieRoutes.delete('/remove/:id', [isAuth], deleteMovieById)
MovieRoutes.put('/update/:id', [isAuth], updateMovieById)

module.exports = MovieRoutes
