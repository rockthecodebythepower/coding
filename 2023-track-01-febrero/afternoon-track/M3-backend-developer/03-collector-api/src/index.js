// Por utilizar "type": "module" en package.json hay que escribir la extensión del archivo .js
import './config/env.js';
import './config/db.js';
import express from 'express';
import { MEDIA_TYPE } from './models/constants.js';
import { Movie } from './models/index.js';

const app = express();
// Configuramos app para poder recibir un req.body
app.use(express.json({ limit: '100kb' }));
// Mejoramos el parseo de los query params de la url
app.use(express.urlencoded({ extended: false }));

// Creamos un router para añadir endpoints a nuetro server
const router = express.Router();

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

// Inyectamos el router en app
app.use(router);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server listening in port ${PORT}`);
});
