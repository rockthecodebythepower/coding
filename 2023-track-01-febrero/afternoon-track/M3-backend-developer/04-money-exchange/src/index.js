import './config/env.js';
import './config/db.js';
import express from 'express';
import authRouter from './routes/auth.js';
import secretRouter from './routes/secret.js';

const app = express();

app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: false }));

// Healthcheck para comprobar que la API está encendida
app.get('/ping', (req, res) => res.status(200).send('Pong'));
// Inyectamos el router que hemos creado dentro de la ruta /auth
app.use('/auth', authRouter);
app.use('/secret', secretRouter);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server listening in port ${PORT}`);
});
