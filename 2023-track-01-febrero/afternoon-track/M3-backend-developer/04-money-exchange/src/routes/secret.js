import express from 'express';
import { authMiddleware } from '../middlewares/auth.js';
import { Movie } from '../models/index.js';

const router = express.Router();

// GET http://localhost:4001/secret/song
router.get('/song', authMiddleware, (req, res) => {
  res.status(200).json({ data: 'https://www.youtube.com/watch?v=mCdA4bJAGGk' });
});

// GET http://localhost:4001/secret/movie
router.post('/movie', authMiddleware, async (req, res) => {
  const { name, year, length } = req.body;

  const newMovie = new Movie({
    name,
    year,
    length,
    // Guardamos una Movie en la base de datos asignada al User
    // que ha enviado el token válido usando la id de req.user.id
    // que añadimos en el middleware "authMiddleware"
    userId: req.user.id,
  });

  await newMovie.save();

  res.status(200).json({ data: 'https://www.youtube.com/watch?v=mCdA4bJAGGk' });
});

export default router;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmU1NTU1YzBjOTdiMzE1NjIzODRiOCIsImVtYWlsIjoiY3Jpc3RpYW4rMkByb2NrdGhlY29kZS5lcyIsImlhdCI6MTY3Nzc4MzQ5MCwiZXhwIjoxNjgxMzgzNDkwfQ.SuS8JKRkeEP_VsMd3nzC6r2hBV-33aaYplBUYrzWoPg
// Así es como envío un header con token desde el Frontend:
// fetch('http://localhost:4001/secret/song', {
//   method: 'GET',
//   headers: {
//     authorization: `Bearer ${token}`,
//   },
// });
