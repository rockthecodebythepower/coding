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
const { upload } = require('../../middlewares/files.middleware')

MovieRoutes.get('/all', retrieveAllMovies)
MovieRoutes.get('/id/:id', retrieveMovieById)
MovieRoutes.get('/name/:name', retrieveMovieByName)
MovieRoutes.post('/create', [isAuth], upload.single('poster'), createMovie)
MovieRoutes.delete('/remove/:id', [isAuth], deleteMovieById)
MovieRoutes.put(
  '/update/:id',
  [isAuth],
  upload.single('poster'),
  updateMovieById
)

module.exports = MovieRoutes
