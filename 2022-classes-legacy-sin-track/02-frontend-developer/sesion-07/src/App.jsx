import { useEffect, useState } from 'react';
import { loadPokemon } from './api';
import './App.css';
import PokemonForm from './components/PokemonForm';
import PokemonList from './components/PokemonList';

// https://pokeapi.co/api/v2/pokemon/ditto
// [X] Poder traer múltiples pokemon y almacenarlos todos
// [X] Pintar tantas cartas como pokemon hayan
// [X] No volver a repetir una petición si ya tenemos ese pokemon pedido

const cache = {};

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonId, setPokemonId] = useState(1);
  // const [cache, setCache] = useState({}); // Ejemplo con useState
  // const cache = useRef({}) // Ejemplo con useRef

  const loadPokemonAndSetInState = async () => {
    if (!cache[pokemonId]) {
      // if (!cache.current[pokemonId]) { // Ejemplo con useRef
      const pokemon = await loadPokemon(pokemonId);
      // En lugar de hacer push, creo un array nuevo con el contenido del que había previamente y el nuevo valor
      const newPokemonList = [...pokemonList, pokemon];
      // Uso ese nuevo array que acabo de CREAR para setear el nuevo state
      setPokemonList(newPokemonList);

      // Usamos la cache para asegurarnos de que no pedimos un pokemon repetido
      cache[pokemon.id] = true;

      // Ejemplo con useState
      // setCache({
      //   ...cache,
      //   [pokemon.id]: true,
      // });

      // cache.current[pokemon.id] = true // Ejemplo con useRef
    }
  };

  useEffect(() => {
    loadPokemonAndSetInState();
  }, []);

  return (
    <div className="App">
      <h1>Pokédex RockTheCode</h1>

      <PokemonList list={pokemonList} />
      <PokemonForm
        loadPokemonAndSetInState={loadPokemonAndSetInState}
        pokemonId={pokemonId}
        setPokemonId={setPokemonId}
      />
    </div>
  );
}

export default App;
