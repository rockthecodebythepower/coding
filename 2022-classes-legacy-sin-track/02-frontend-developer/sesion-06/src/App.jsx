import { useEffect, useState } from 'react';
import './App.css';
import Counter from './components/Counter';

// [X] Conectarnos con la pokeAPI y trae un elemento pokemon
// - useState: almacenar información del pokemon
// - useEffect: lanzar el fetch en un momento específico (por ahora una vez)
// - fetch: conectar con una API y traer información
// [X] Pintar una carta con la información del pokemon de la API
// - Información básica del pokemon
// [] Poder traer múltiples pokemon y almacenarlos todos
// [] Pintar tantas cartas como pokemon hayan
// [] No volver a repetir una petición si ya tenemos ese pokemon pedido

const App = () => {
  // Para asegurarme al montar el componente de que no pinto valores de un objeto
  // que puedan ser undefined. Uso null como valor inicial y aplico un ternario en el render
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    // Fetch con promesa
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then((res) => res.json())
      .then((pokeData) => {
        // console.log('La API ha devuelto:', pokeData);
        setPokemon(pokeData);
      })
      .catch((err) => {
        // Para manejar el error podríamos tener un estado boolean que cambie a true
        // Y usándolo rendericemos un mensaje de error en pantalla
      });

    // 2. Fetch con async await en IIFE
    // (async () => {
    //   try {
    //     const res = await fetch(
    //       'https://pokeapi.co/api/v2/pokemon/ditto'
    //     );
    //     const pokeData = await res.json();

    //     setPokemon(pokeData);
    //   } catch (err) {
    //     // Para manejar el error podríamos tener un estado boolean que cambie a true
    //     // Y usándolo rendericemos un mensaje de error en pantalla
    //   }
    // })();

    // 3. Creo una función y la invoco de seguido
    // const getPokemon = async () => {
    //   try {
    //     const res = await fetch(
    //       'https://pokeapi.co/api/v2/pokemon/ditto'
    //     );
    //     const pokeData = await res.json();

    //     setPokemon(pokeData);
    //   } catch (err) {
    //     // Para manejar el error podríamos tener un estado boolean que cambie a true
    //     // Y usándolo rendericemos un mensaje de error en pantalla
    //   }
    // }

    // getPokemon()
  }, []);

  console.log('El pokemon vale:', pokemon);

  return (
    <div className="App">
      <h1>useEffect en profundidad</h1>
      {/* <Counter /> */}

      {pokemon ? (
        <div>
          <h3>{pokemon.name}</h3>
          <img
            src={pokemon.sprites.front_shiny}
            alt={pokemon.name}
          />
          <p>Pokemon número {pokemon.id}</p>
        </div>
      ) : (
        // Puedo poner un loader cuando no hay state pokemon válido
        <h3>Cargando pokemon...</h3>
      )}
    </div>
  );
};

export default App;
