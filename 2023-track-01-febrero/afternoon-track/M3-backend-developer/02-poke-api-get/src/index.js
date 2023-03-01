// Objetivos =>
// Crear una API para leer elementos con GET ✅
// Leer pokemon de la base de datos por ID ✅
// Filtrar pokemon de la DB por nombre o tipo ✅
// Paginar la coleccion completa de Pokemon ❌
const dotenv = require('dotenv');
dotenv.config();
// >>> Separamos dotenv para que sea lo primero que se importa 🔝
const express = require('express');
require('./db');
const { Pokemon } = require('./models');

const app = express();
// El router definirá los comportamientos del servidor (API) para unas URLs específicas
const router = express.Router();

// Aquí definimos los comportamientos de la API 🔽
// GET POST PUT DELETE => Estos verbos definen como se va a comportar el server cuando hable con ellos
// GET http://localhost:4001/ping
// ENDPOINT => RUTA => URL DEL SERVER
router.get('/ping', (request, response) => {
  response.sendStatus(200);
});

// GET http://localhost:4001/pokemon
router.get('/pokemon', async (request, response) => {
  // QUERY PARAM
  // http://localhost:4001/pokemon
  // http://localhost:4001/pokemon?type=water
  // http://localhost:4001/pokemon?name=saur
  // http://localhost:4001/pokemon?type=grass&name=saur
  const pokemonName = request.query.name; // saur
  const pokemonType = request.query.type; // water

  const allPokemon = await Pokemon.find({
    // Con el spread operator puedo asegurarme de que solamente voy a filtrar
    // Si el usuario me manda los filtros en la query
    ...(pokemonName
      ? {
          name: {
            $regex: new RegExp(pokemonName, 'i'),
          },
        }
      : {}),
    ...(pokemonType
      ? {
          types: {
            $in: [
              new RegExp(pokemonType, 'i'), // /water/i
            ],
          },
        }
      : {}),
  }).lean();

  response.status(200).json({ data: allPokemon });
});

// GET http://localhost:4001/pokemon/63e54c2cb3b49cbdc5c48bac
router.get('/pokemon/:id', async (request, response) => {
  try {
    // URL PARAM => 63e54c2cb3b49cbdc5c48bac
    const pokemonId = request.params.id;
    const pokemonById = await Pokemon.findById(pokemonId).lean();
    response.status(200).json({ data: pokemonById });
  } catch (err) {
    response.sendStatus(404); // Pokemon no encontrado
  }
});

app.use(router);
// Aquí terminamos de definir los comportamientos de la API 🔼

const PORT = Number(process.env.PORT);
app.listen(PORT, () => {
  // http://localhost:4001
  console.log(`Server listening in ${PORT}`);
});
