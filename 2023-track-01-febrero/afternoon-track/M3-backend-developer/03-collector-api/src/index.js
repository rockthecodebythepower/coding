// Por utilizar "type": "module" en package.json hay que escribir la extensión del archivo .js
// Y además podemos utilizar import y export en los archivos del proyecto
import './config/env.js';
import './config/db.js';
import express from 'express';
import movieRouter from './routes/movies.js';

const app = express();
// Configuramos app para poder recibir un req.body
app.use(express.json({ limit: '100kb' }));
// Mejoramos el parseo de los query params de la url
app.use(express.urlencoded({ extended: false }));

// Inyectamos el router en app
app.use(movieRouter);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server listening in port ${PORT}`);
});
