// ODM Object Data Mapper
const mongoose = require('mongoose');
const fs = require('fs/promises');

mongoose
  .connect(
    'mongodb+srv://<username>:<password>@rockthemongo.kkf4buu.mongodb.net/team-rocket?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('Conectado a MongoDB');
  });

// Leer el archivo pokemon.json ✅
// Conectarse a mongoose y guardar los pokemon en la colección Pokemon ✅
const main = async () => {
  // 1. Creo el esquema de mongoDB
  const pokemonSchema = new mongoose.Schema({
    // Esquema de mongoose
    imageUrl: String,
    name: String,
    number: String,
    types: [String],
  });
  // 2. Creo un modelo que utiliza dicho esquema
  const Pokemon = mongoose.model('Pokemon', pokemonSchema); // => pokemon(s)
  // // 3. Instancio el MODELO para crear un documento de Mongo
  // const newPokemon = new Pokemon({
  //   name: 'Bulbasaur',
  //   number: '001',
  //   imageUrl: 'https://img.pokemondb.net/sprites/home/normal/2x/bulbasaur.jpg',
  //   types: ['Grass', 'Poison'],
  // });
  // // 4. Guardo el DOCUMENTO en la base de datos
  // await newPokemon.save();

  // Leo el archivo pokemon.json y lo guardo en la DB
  const pokemonListString = (await fs.readFile('./data/pokemon.json')).toString();
  const pokemonList = JSON.parse(pokemonListString);

  await Pokemon.deleteMany({}); // Borramos todos los documentos previos antes de llenar la DB de nuevo (RESET)
  await Pokemon.insertMany(pokemonList); // Guardamos todos los pokemon juntos de una en la DB

  process.exit();
};

main();
