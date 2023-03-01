// //////////////////////////////////
// Objectivos DIA 1
// Entrar a la página https://pokemondb.net/pokedex/national de forma automatizada ✅
// Sacar un pokemon de la lista de la página y convertirlo en un objeto de JS ✅
// Guardar ese pokemon en un archivo .json (que actúe como nuestra DB) ✅
// //////////////////////////////////
// Objetivos DIA 2
// Recuperar los datos de todos los pokemon de la web y crear un array con todos esos datos formateados ✅
// Guardar todos los pokemon en un objeto para subirlos a una DB ✅
// Crear una DB (database) MongoDB (no relacional) y guardar ahí toda la información
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
  await page.waitForSelector(pokemonCardSelector); // document.querySelector()

  // D2 - Usamos $$eval porque es como hacer .querySelectorAll()
  const pokemonList = await page.$$eval(pokemonCardSelector, (elements) => {
    // Hacemos spread operator de elements porque son un NodeList y no soportan .map
    // Al copiarlos en un nuevo Array con el spread, si soportan .map
    const elementsAsArray = [...elements];

    // Formateamos todos los pokemon en un objeto cada uno de ellos
    const allPokemon = elementsAsArray.map((el) => {
      const imgSrc = el.querySelector('a img')?.src || el.querySelector('a span').dataset.src;
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

    return allPokemon;
  });

  // El código de la función .evaluate corre solamente dentro del navegador "fantasma"
  // const pokemon = await pokemonCards.evaluate((el) => {
  //   const imgSrc = el.querySelector('a img').src;
  //   const pokemonText = el.textContent;
  //   const splitPokemon = pokemonText.split(' ');
  //   const number = splitPokemon[0].replace('#', '');
  //   const name = splitPokemon[1];
  //   const types = [splitPokemon[2], splitPokemon[4]].filter((value) => !!value);

  //   const pokemonData = {
  //     name,
  //     number,
  //     imageUrl: imgSrc,
  //     types,
  //   };

  //   return pokemonData;
  // });

  // Cierra el navegador "fantasma"
  await browser.close();

  console.log('Guardando todos los pokemon:', pokemonList);
  // console.log('Guardando pokemon:', pokemon);
  // Transformo el objeto pokemon a un texto y lo guardo en un archivo
  await fs.writeFile('./data/pokemon.json', JSON.stringify(pokemonList, null, 2));
  // await fs.writeFile('./data/pokemon.json', JSON.stringify(pokemon, null, 2));
};

// fetch()
// .then(res => res.json())
// JSON.parse() TEXTO => OBJETO/ARRAY/etc...
// JSON.stringify() OBJETO/ARRAY/etc... => TEXTO

main();
