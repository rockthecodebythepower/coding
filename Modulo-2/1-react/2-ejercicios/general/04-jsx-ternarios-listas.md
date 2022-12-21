# 04 - Ternarios y listas en JSX

## Preparación del ejercicio

¡Igual que en el ejercicio `01-jsx-interpolacion.md`! Prepara tu proyecto de Vite con React y sigue el enunciado 🦄

## Enunciado

En este ejercicio vas a aprender a combinar el uso de ternarios para renderizar un componente u otro con el renderizado de listas.

Antes de comenzar, añade esta constante a tu archivo `App.jsx` para tener una fuente de datos de la que partir:

```js
const movies = [
  {
    title: 'Avatar 10: más 3D',
    year: 2028,
    isFavorite: true,
  },
  {
    title: 'Titanic 2: el gran iceberg',
    year: 2026,
    isFavorite: false,
  },
  {
    title: 'Terminator Infinite',
    year: 2027,
    isFavorite: false,
  },
  {
    title: 'Rocking the code',
    year: 2022,
    isFavorite: true,
  },
];
```

Con este objeto estaremos representando una lista de películas que se han estrenado hace poco, y supondremos que estamos trabajando en una aplicación de cine. Vamos a seguir los siguientes pasos para crear nuestra aplicación:

1. Queremos crear un componente `MovieList` que reciba un prop al que llamaremos `movies`. Usaremos (renderizaremos) este componente en `App` y le pasaremos el array `movies` que habíamos creado preparando el ejercicio como prop `movies`.
2. Crearemos ahora un componente `FavoriteMovie` que recibe dos props, uno al que llamaremos `title` (será un string con el título de la película) y otro prop al que llamaremos `year` (será un number con el año de la película). El componente `FavoriteMovie` usará estos props para devolver un JSX (renderizar) un `div` que envuelva un `h3` donde interpolaremos el prop `title` y un `p` donde interpolaremos el prop `year`.
3. Crearemos también un componente `NormalMovie` que recibirá un solo prop `title` (será un string con el título de la película) y devolverá un JSX que será un `div` que envuelve un `h3` donde interpolaremos el prop `title` y un `p` donde escribiremos el texto "Película no favorita ❌".
4. Ahora volveremos al componente `MovieList` donde recibimos un prop `movies` que será una lista (array) de películas que le pasamos desde `App` al renderizar este componente. Recorre la lista para devolver el componente `FavoriteMovie` si la propiedad `isFavorite` del elemento que estamos recorriendo es `true`, o el componente `NormalMovie` si es `false`.

> Para resolver esto utiliza un ternario dentro del bucle para crea el contenido JSX y pasa los props correctos a cada componente.
