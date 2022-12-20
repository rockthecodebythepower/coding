import { useMemo, useState } from 'react';
import './App.css';
import foods from './food.json';
import Food from './components/Food';

// Usa el archivo food.json para obtener un listado de comidas ✅
// Crea una función getCalories que calcule las calorias de cada plato
// carbs y proteins x4, fats x10  ✅
// Pinta una lista de comidas donde tengas el nombre y el total de calorias
const getCalories = (dish) => {
  const calories =
    dish.carbs * 4 + dish.proteins * 4 + dish.fats * 10;

  return calories;
};

function App() {
  // Hook: useMemo
  // Me permite memoizar contenido entre cada render, sin recalcular el output de una función
  const foodJsx = useMemo(
    () => {
      // Una lista para React es un conjunto de elementos (p.ej. array de objetos) que se mapea
      // a una lista/array de elementos HTML
      return foods.map((food) => {
        return (
          // El prop "key" lo debemos mandar a cada elemento que devuelvo de crear una lista en React
          // Me permite optimizar el pintado y repintado (render y rerender) de mi lista cuando hay cambios
          <li key={food.id}>
            <p>{food.name}</p>
            <p>{getCalories(food)} calories</p>
          </li>
        );
      });
    },
    [foods] // Array de dependencias
  );

  return (
    <div className="App">
      <h1>Dudas React!</h1>

      <ul>{foodJsx}</ul>

      <hr />
      <hr />

      {/* Props => Properties */}
      <Food food="Hamburguesa" calories={1200} />
      <Food food="Pizza" calories={2000} />
      <Food food="Ensalada" calories={400} />

      {foods.map((food) => {
        return (
          <Food
            key={food.id}
            food={food.name}
            calories={getCalories(food)}
          />
        );
      })}

      {/* Atributos */}
      <button type="button" id="my-button">
        Botón
      </button>
    </div>
  );
}

export default App;
