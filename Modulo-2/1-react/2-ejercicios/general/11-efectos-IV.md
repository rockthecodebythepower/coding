# 11 - Efectos - IV

## Preparación del ejercicio

¡Igual que en el ejercicio `01-jsx-interpolacion.md`! Prepara tu proyecto de Vite con React y sigue el enunciado 🦄

## Enunciado

Crea una aplicación que muestre una lista de películas y permite al usuario filtrar la lista por género. La aplicación debe almacenar la lista de películas y géneros en el estado de la aplicación y debes usar useEffect para filtrar la lista cuando el usuario selecciona un género.

1. Usa useState para almacenar la lista de películas y géneros.
2. Usa useEffect para filtrar la lista de películas cuando el usuario selecciona un género.
3. Muestra la lista de películas y permite al usuario seleccionar un género para filtrar la lista con un elemento `select`.

Aquí te va un ejemplo de una lista de películas y de géneros:

```js
const movies = [
  { id: 1, title: 'The Shawshank Redemption', genre: 'Drama' },
  { id: 2, title: 'The Godfather', genre: 'Drama' },
  { id: 3, title: 'The Godfather: Part II', genre: 'Drama' },
  { id: 4, title: 'The Dark Knight', genre: 'Action' },
  { id: 5, title: 'Pulp Fiction', genre: 'Thriller' },
];

const genres = [
  { id: 1, name: 'All' },
  { id: 2, name: 'Drama' },
  { id: 3, name: 'Action' },
  { id: 4, name: 'Thriller' },
];
```
