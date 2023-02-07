// Entrar a la página https://pokemondb.net/pokedex/national de forma automatizada ✅
// Sacar un pokemon de la lista de la página y convertirlo en un objeto de JS ✅
// Guardar ese pokemon en un archivo .json (que actúe como nuestra DB) ✅
// //////////////////////////////////
// import puppeteer from 'puppeteer';
// Por defecto NODE no soporta el uso de import ... from '...'
// Hay que usar require() a menos que lo especifiquemos en el package.json
const puppeteer = require('puppeteer');
const fs = require('fs/promises');

// '#001 Bulbasaur Grass · Poison'
const samplePokemon = {
  imageUrl: '',
  number: '',
  name: '',
  types: [],
};

const main = async () => {
  const browser = await puppeteer.launch({
    headless: false, // Con la opción headless, podemos seleccionar si lanzar un navegador "fantasma" o abrir uno de verdad
  });
  const page = await browser.newPage();
  await page.goto('https://pokemondb.net/pokedex/national');

  const pokemonCardSelector = 'div.infocard';
  const pokemonCards = await page.waitForSelector(pokemonCardSelector);

  // El código de la función .evaluate corre solamente dentro del navegador "fantasma"
  const pokemon = await pokemonCards.evaluate((el) => {
    const imgSrc = el.querySelector('a img').src;
    const pokemonText = el.textContent;
    const splitPokemon = pokemonText.split(' ');
    const number = splitPokemon[0].replace('#', '');
    const name = splitPokemon[1];
    const types = [splitPokemon[2], splitPokemon[4]].filter((value) => !!value);

    const pokemonData = {
      name,
      number,
      imageUrl: imgSrc,
      types,
    };

    return pokemonData;
  });

  // Cierra el navegador "fantasma"
  await browser.close();

  console.log('Guardando pokemon:', pokemon);
  // Transformo el objeto pokemon a un texto y lo guardo en un archivo
  await fs.writeFile('./data/pokemon.json', JSON.stringify(pokemon, null, 2));
};

// fetch()
// .then(res => res.json())
// JSON.parse() TEXTO => OBJETO/ARRAY/etc...
// JSON.stringify() OBJETO/ARRAY/etc... => TEXTO

main();
