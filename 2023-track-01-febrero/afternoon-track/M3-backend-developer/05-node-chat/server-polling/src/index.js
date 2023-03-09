// Lanzamos dotenv lo primero de todo para cargar las variables de entorno
import './config/env.js';
import express from 'express';
import cors from 'cors';
import './config/db.js';
import { Message } from './models/index.js';

const app = express();

// Inyectamos un middleware de CORS para dar acceso a una(s) web(s) en especial
app.use(
  cors({
    origin: (urlOrigin, callback) => {
      // Con esta configuración cualquier URL puede entrar a nuestro server pasando CORS
      callback(null, true);
    },
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const router = express.Router();

// GET https://node-chat-polling.onrender.com/api/ping
// GET http://localhost:4001/api/ping
router.get('/ping', (req, res) => {
  res.status(200).json({ data: 'Pong' });
});

router.get('/message', async (req, res) => {
  try {
    // Vamos a traer siempre los últimos 20 mensajes para evitar sobrecargar la respuesta
    const messages = await Message.find()
      .sort({
        createdAt: 'desc', // Ordenamos los mensajes de la DB de más nuevo a más antiguo
      })
      .limit(20) // Recogemos los últimos 20 elementos
      .lean();

    res.status(200).json({ data: messages });
  } catch (err) {
    console.error(err);
    res.status(500).json({ data: 'Internal server error' });
  }
});

// POST http://localhost:4001/api/message
router.post('/message', async (req, res) => {
  try {
    const { username, text } = req.body;

    const formattedUsername = username?.trim();
    const formattedText = text?.trim();

    if (!formattedUsername || !formattedText) {
      res.status(400).json({ data: 'Incomplete username or text' });
      return;
    }

    const newMessage = new Message({
      username: formattedUsername,
      text: formattedText,
      // MongoDB guarda las fechas en el mismo formato que JavaScript las crea
      createdAt: new Date(),
    });

    await newMessage.save();
    res.status(201).json({ data: newMessage });
  } catch (err) {
    console.error(err);
    res.status(500).json({ data: 'Internal server error' });
  }
});

// http://localhost:PORT/api
app.use('/api', router);

const PORT = Number(process.env.PORT) || 4001;
app.listen(PORT, () => {
  console.log(`Server listening in ${PORT}`);
});
