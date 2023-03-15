//Creamos el router y lanzamos los servicios en cada una de las rutas que creemos
const express = require('express');
const router = express.Router();
const movies = require('../domain/services/service-movie');
const shows = require('../domain/services/service-show');

//Implementamos los verbos
router.get('/movies', movies.GetAll);
router.post('/movies', movies.Create);
router.get('/shows', shows.GetAll);
router.post('/shows', shows.Create);

module.exports = router;
