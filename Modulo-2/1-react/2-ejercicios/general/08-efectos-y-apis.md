# 08 - Efectos y llamadas API

## Preparación del ejercicio

¡Igual que en el ejercicio `01-jsx-interpolacion.md`! Prepara tu proyecto de Vite con React y sigue el enunciado 🦄

## Enunciado

Aprovechando que en el ejercicio 06 hemos utilizado un array de personajes obtenidos de la API pública de Rick&Morty, vamos a aprender como utilizar `useEffect` para completar una petición a la API oficial usando `fetch`.

> Por refrescar que son los efectos, como habrás visto en los videos del máster, son una función especial que seguirán el ciclo de vida de los componentes de React para invocarse en momentos puntuales, y podremos usarlas mediante el hook `useEffect`. Reciben un array de dependencias como segundo argumento que indicarán cuando se invocará la función que reciben como primer argumento, que será cada vez que una de las dependencias cambie su valor.

Vamos a hacer un ejercicio con `useEffect`:

1. Importa en `App.jsx` el hook `useEffect` y el hook `useState`.
2. En tu componente `App`, crea un estado, tal y como hiciste en el ejercicio anterior, llamado `characters` pero con un valor inicial de un array vacío. Este estado nos servirá para almacenar los personajes que recibimos de la API en cada petición.
3. Ahora añade el hook `useEffect`, como primer argumento pásale una función flecha vacía `() => {}` y como segundo argumento un array vacío `[]`. Con este array vacío indicamos que el hook `useEffect` se lanzará solamente una vez, cuando el componente se monte en el DOM (aparezca y se renderice) por pimera vez.
4. Añade a la función del `useEffect` un `fetch()` que haga una petición a `https://rickandmortyapi.com/api/character`. Recuerda resolver la promesa del `fetch` para obtener la respuesta de la API y analiza bien el resultado que devuelve. La API devuelve un objeto que contiene los personajes de Rick&Morty en la propiedad `.results`.
5. Usa esos personajes que llegan en un array de la API para invocar a `setCharacters` y añadirlos a tu estado `characters` de forma que los datos estén en tu componente `App`. Puedes comprobar que el estado se popula correctamnte añadiendo un `console.log` justo antes del `return ()` de tu componente `App`.
6. Para terminar, replica lo que hiciste en el ejercicio anterior para renderizar la lista de personajes con sus datos (nombre, estado, planeta...) y su imagen.

> Si has hecho todo correctamnte, cada vez que abras tu aplicación en tu navegador y el componente `App` se renderice, se lanzará una petición a la API y tu estado local almacenará los datos de los personajes que usará para renderizar el listado completo 🦄.
