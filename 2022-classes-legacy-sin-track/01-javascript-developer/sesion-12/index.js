const MIN_POKEMON = 1;
const MAX_POKEMON = 151;

const pokemonCard = document.querySelector('#pokemon-card');

const getPokemonCardTemplate = (name, image, id, height, weight) => `
  <h3>${name}</h3>
  <img src="${image}" alt="${name}" />

  <p>ID: ${id}</p>
  <p>Height: ${height}</p>
  <p>Weight: ${weight}</p>
`;

const loadPokemonFromAPI = () => {
  const pokemonNumber = Math.floor(Math.random() * (MAX_POKEMON - MIN_POKEMON + 1) + MIN_POKEMON);

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
    .then((res) => res.json()) // Si no uso fetch, no hago este primer .then
    .then((response) => {
      console.log('Respuesta:', response);

      // 1. Tengo que conseguir el nombre y la imagen del pokemon
      const pokemonName = response.name;
      const pokemonImage = response.sprites.front_shiny;
      const pokemonId = response.id;
      const pokemonHeight = response.height;
      const pokemonWeight = response.weight;

      // 2. Tengo que inyectar la carta de pokemon en el DOM
      const pokemonTemplate = getPokemonCardTemplate(
        pokemonName,
        pokemonImage,
        pokemonId,
        pokemonHeight,
        pokemonWeight
      );

      pokemonCard.innerHTML = pokemonTemplate;
    })
    .catch((err) => {
      alert('Ha ocurrido un error conectando a la PokeAPI');

      fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
      .then((res) => res.json()) // Si no uso fetch, no hago este primer .then
      .then(response => {
        // ...
      })
      .catch(err => {
        
      })
    });
};

const loadPokemonButton = document.querySelector('#load-pokemon');
loadPokemonButton.addEventListener('click', loadPokemonFromAPI);
