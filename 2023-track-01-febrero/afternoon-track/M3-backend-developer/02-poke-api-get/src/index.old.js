// Esto tiene que ocurrir al principio y lo primero de todo mi proyecto
const dotenv = require('dotenv');
dotenv.config();
// De aquí en adelante, tendré las variables de entorno en process.env

require('./db');
const { Pokemon } = require('./models');

const main = async () => {
  // Lectura de una colección en MongoDB con mongoose:
  const pokemonList = await Pokemon.find().lean(); // Pongo .lean() al final para leer la información en formato OBJETO de JS y no en instancia de documento de mongoose
  console.log('La longitud de la colección es:', pokemonList.length);

  // Traigo todos los pokemon que tengan como nombre "Bulbasaur"
  const allBulbasaurs = await Pokemon.find({
    name: 'Bulbasaur',
  }).lean();
  console.log(allBulbasaurs);

  // Traigo EL PRIMER elemento que tenga el nombre "Bulbasaur"
  const oneBulbasaur = await Pokemon.findOne({
    name: 'Bulbasaur',
  }).lean();
  console.log(oneBulbasaur);

  // Traigo todos los pokemon de tipo GRASS
  const allGrassAndFlyingPokemon = await Pokemon.find({
    types: {
      // Está filtrando todos los elementos que tengan GRASS OR FLYING en su array types
      // $in: ['Grass', 'Flying'],
      // Está filtrando todos los elementos que tengan GRASS AND FLYING en su array types
      $all: ['Grass', 'Flying'],
    },
  }).lean();
  console.log(allGrassAndFlyingPokemon);

  // Traigo todos los pokemon de tipo GRASS que tengan un nombre terminado en SAUR
  const allGrassAndSaurPokemon = await Pokemon.find({
    types: {
      $in: ['Grass'],
    },
    name: {
      $regex: /\w+saur$/i,
    },
  }).lean();
  console.log(allGrassAndSaurPokemon);

  // Traigo un pokemon dada su _id
  const pokemonById = await Pokemon.findById('63e54c2cb3b49cbdc5c48bad').lean();
  console.log(pokemonById);
};

main().then(() => {
  console.log('Script finished running');
  process.exit(0);
});
