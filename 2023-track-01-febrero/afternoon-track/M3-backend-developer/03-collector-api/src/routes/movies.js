import express from 'express';
import { Movie } from '../models/index.js';
import { MEDIA_TYPE } from '../models/constants.js';

// Creamos un router para añadir endpoints a nuetro server
const router = express.Router();

// GET http://localhost:4001/movies
router.get('/movies', async (req, res) => {
  try {
    const movies = await Movie.find(
      // Mando los filtros vacíos para traer todos los elementos
      {},
      // Uso la proyección para traer solo los campos que quiero
      {
        name: 1,
        genres: 1,
        year: 1,
      }
    ).lean();
    res.status(200).json({ data: movies });
  } catch (err) {
    // 2XX => Exito
    // 3XX => Redireccion
    // 4XX => Input del usuario causa problemas
    // 5XX => Error de servidor
    res.status(500).json({ data: 'Unexpected server error' });
  }
});

// GET http://localhost:4001/movies/63f7aea11e26f9ad88973a68
router.get('/movies/:id', async (req, res, next) => {
  try {
    const { id } = req.params; // { id: '63f7aea11e26f9ad88973a68' }

    const movie = await Movie.findById(id).lean();
    res.status(200).json({ data: movie });
  } catch (err) {
    res.status(500).json({ data: 'Unexpected server error' });
  }
});

// POST http://localhost:4001/movies
router.post('/movies', async (req, res) => {
  try {
    const { name, year, genres, length, author, finished, score } = req.body;

    // Validamos los campos obligatorios y cerramos el endpoint si hay que no valen
    if (!name?.trim().length || year < 1900 || !author?.trim().length) {
      res.status(400).json({
        data: 'Invalid values for fields name, year or author',
      });

      return;
    }

    // Creamos un nuevo Documento de tipo Movie
    const newMovie = new Movie({
      name,
      year,
      author,
      // Estos campos, como no han tenido validación previa, les damos valor por defecto por si no están
      genres: genres || [],
      length: length || 0,
      finished: finished || false,
      score: score || 0,
      mediaType: MEDIA_TYPE.movie,
    });

    // Guardamos el documento en la DB
    await newMovie.save();
    res.status(201).json({ data: newMovie });
  } catch (err) {
    console.error('>>> Error in POST /movies', err);
    // El error genérico de servidor cuando no sabemos que ha ocurrido es status 500
    res.status(500).json({ data: 'Unexpected server error' });
  }
});

// PUT http://localhost:4001/movies/63f7aea11e26f9ad88973a68
router.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { finished, score } = req.body;

    // Esta validación manual y rudimentaria podría mejorarse mucho usando un esquema como Joi https://joi.dev/api/
    const isValidFinished = finished ? typeof finished === 'boolean' : true;
    const isValidScore = score || score === 0 ? typeof score === 'number' && score >= 1 && score <= 5 : true;

    if (!isValidFinished || !isValidScore) {
      res.status(400).json({ data: 'Incorrect value type for fields' });
      return;
    }

    const updatedMovie = await Movie.findByIdAndUpdate(
      id,
      {
        finished,
        score,
      },
      // Traigo el elemento después de haberlo actualizado
      {
        new: true,
      }
    ).lean();

    res.status(200).json({ data: updatedMovie });
  } catch (err) {
    res.status(500).json({ data: 'Unexpected server error' });
  }
});

// DELETE http://localhost:4001/movies/63f7aea11e26f9ad88973a68
router.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Movie.deleteOne({ _id: id });
    res.status(200).json({ data: 'Successfully deleted!' });
  } catch (err) {
    res.status(500).json({ data: 'Unexpected server error' });
  }
});

export default router;
