# 06 - Estados dinámicos

## Preparación del ejercicio

¡Igual que en el ejercicio `01-jsx-interpolacion.md`! Prepara tu proyecto de Vite con React y sigue el enunciado 🦄

## Enunciado

Trabajar con estados nos permite persistir información entre un render y otro, y esto es especialmente útil para trabajar con listas y estados más complejos sin perder información. Para trabajar con estados complejos vamos a solucionar el siguiente ejercicio siguiendo los pasos:

1. Añade esta constante en tu archivo `App.jsx` para tener datos de personajes de la serie Rick&Morty, y úsala para crear un estado con un valor inicial al que llamaremos `characters` utilizando el hook `useState`.

```js
const characters = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    origin: 'Earth (C-137)',
    location: 'Citadel of Ricks',
    image:
      'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },

  {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    origin: 'Earth (C-137)',
    location: 'Citadel of Ricks',
    image:
      'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  },

  {
    id: 3,
    name: 'Summer Smith',
    status: 'Alive',
    species: 'Human',
    origin: 'Earth (Replacement Dimension)',
    location: 'Earth (Replacement Dimension)',
    image:
      'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
  },
];
```

2. Ahora recorre la lista para que el JSX que devuelve tu componente `App` devuelva un elemento para cada personaje de la lista, con el siguiente formato:

- Cada elemento será un `div` que envuelve el contenido, con el prop `className` con el valor `character-card`.
- Contendrá un elemento `h3` que interpolará la propiedad `name` de cada elemento.
- Contendrá un elemento `p` que interpolará la propiedad `status` del elemento en el siguiente texto => "Estado: {status}".
- Contendrá un elemento `p` que interpolará la propiedad `location` del elemento en el siguiente texto => "Vive en: {location}".
- Contendrá un elemento `img` que tenga como prop `src` la propiedad `image` de cada elemento. Añade un `width` y `height` para limitar el tamaño de la imagen y comprueba que se renderiza bien.

3. Una vez tengas la lista renderizada y la veas bien en tu navegador, es el momento de dar dinamismo a nuestros estados. Crea una función dentro de tu componente `App` que se llame `handleAddCharacter` que, como su nombre indica, se encargará de añadir un personaje al array `characters` que está en nuestro estado. Para ello, la función contendrá una constante con el siguiente valor:

```js
const newCharacter = {
  id: Date.now(),
  name: 'Mr. Meeseeks',
  status: 'unknown',
  species: 'Humanoid',
  type: 'Meeseeks',
  origin: 'Mr. Meeseeks Box',
  location: 'Earth',
  image:
    'https://rickandmortyapi.com/api/character/avatar/242.jpeg',
};
```

4. Ahora crea un botón en JSX justo después de la lista de personajes renderizada con un prop `onClick` que invoque a la función `handleAddCharacter`. No olvides que no debes invocar a la función de esta forma `❌ onClick={handleAddCharacter()} ❌` ya que invocará la función directamente y no cuando hagamos click, escríbela de esta forma en tu botón: `onClick={handleAddCharacter}`.
5. Para terminar, vamos a añadir lógica a nuestra función para que el personaje `newCharacter` se añada a nuestro estado. Tendrás que invocar al setter de nuestro estado, tal y como has visto en los videos del máster, que en este caso deberías haber llamado `setCharacter`, para mantener el valor anterior del array `characters` y añadir el elemento `newCharacter`. Te recomendamos usar el spread operator para crear un nuevo array cuando lo pases a `setCharacter`.

> Si has conseguido que al estado se añada el nuevo personaje cuando se invoque la función `handleAddCharacter` al clickar el botón, deberías ver como automáticamente se añade y renderiza un nuevo personaje en tu aplicación ¡sin tener que hacer nada más!

## Bonus

Vamos a extender el ejercicio dándole más complejidad por medio del borrado de elementos.

1. Añade un botón con el texto `Borrar` para cada elemento de personaje.
2. Crea una función `handleDeleteCharacter` que reciba como argumento un valor `id`, que usaremos para filtrar del array `characters` el personaje que tenga esta misma `id`. De esta forma le daremos sentido a la función ya que dada una `id` filtraremos del array el personaje con esa `id`, haciendo una función que elimina el personaje que queramos por su campo `id` único que no debería estar repetido nunca en ningún otro elemento.
3. Para completar el borrado, invoca a `setCharacters` con el nuevo array que hayas creado del cual hayas filtrado fuera el elemento con esa `id`.
4. Por último, añade al botón `Borrar` un prop `onClick` que invoque a la función `handleDeleteCharacter` que hemos creado y le pase la `id` del personaje. Como renderizamos los personajes con un `.map`, para cada botón de cada personaje podremos pasar la función con una función flecha de la siguiente forma `onClick={() => handleDeleteCharacter(id)}`.
