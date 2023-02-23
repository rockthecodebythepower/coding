# Objetivos del proyecto

- Preparar server y conectar con una DB ✅
- Definir un modelo de datos simple ✅
- Hacer un CRUD sobre uno de los modelos (Create ✅ => Read ✅ => Update ✅ || Delete ✅)

## Modelo de datos

```javascript
const movieDocument = {
  name: 'Blade Runner 4: Electric Bogaloo',
  year: 2024,
  genres: ['Terror', 'Comedy'],
  length: 270, // Longitud en minutos
  author: 'Pepe', // Director de la peli
  finished: true, // Watched para la peli
  score: 4,
  mediaType: 'Movie'
};

const bookDocument = {
  name: 'Reina Roja',
  year: 2023,
  genres: ['Sci-Fi'],
  length: 450, // Longitud en páginas
  author: 'Pepe', // Autor del libro
  finished: false, // Read para el libro
  score: 5,
  mediaType: 'Book',
};
```
