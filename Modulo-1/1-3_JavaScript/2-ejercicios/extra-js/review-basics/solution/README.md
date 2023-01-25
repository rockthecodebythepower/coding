## Iteración #1: Mix for e includes

```jsx
const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

const movieCategories = [];

for (const movie of movies) {
  for (const category of movie.categories) {
    if (!movieCategories.includes(category)) {
      movieCategories.push(category);
    }
  }
}

console.log(movieCategories);
```

## Iteración #2: Mix Fors

```jsx
const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

const volumeInfo = { totalVolume: 0, totalCount: 0 };

for (const user of users) {
  for (const key in user.favoritesSounds) {
    const favoriteSound = user.favoritesSounds[key];
    volumeInfo.totalVolume += favoriteSound.volume;
    volumeInfo.totalCount++;
  }
}

console.log(
  "El volumen medio de los sonidos favoritos es de: " +
    volumeInfo.totalVolume / volumeInfo.totalCount
);
```

## Iteración #3: Mix Fors

```jsx
const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

const favoritesSounds = [];

for (const user of users) {
  for (const key in user.favoritesSounds) {
    if (favoritesSounds.length) {
      let favoriteSoundIsInside = false;
      for (const favoriteSound of favoritesSounds) {
        if (favoriteSound.name === key) {
          favoriteSoundIsInside = true;
          favoriteSound.count++;
          break;
        }
      }

      if (!favoriteSoundIsInside) {
        favoritesSounds.push({ name: key, count: 1 });
      }
    } else {
      favoritesSounds.push({ name: key, count: 1 });
    }
  }
}

console.log(favoritesSounds);
```

## Iteración #4: Métodos findArrayIndex

```jsx
function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    let obj = array[i];
    if (obj === text) {
      return i;
    }
  }
}

const index = findArrayIndex(
  ["Caracol", "Mosquito", "Salamandra", "Ajolote"],
  "Ajolote"
);
console.log(index);

const index2 = findArrayIndex(
  ["Caracol", "Mosquito", "Salamandra", "Ajolote"],
  "Mosquito"
);
console.log(index2);
```

## Iteración #5: Función rollDice

```jsx
function rollDice(maxNum) {
  return Math.floor(Math.random() * (maxNum - 1) + 1);
}

console.log(rollDice(10));
console.log(rollDice(20));
console.log(rollDice(6));
```

## Iteración #6: Función swap

```jsx
function swap(array, firstIndex, secondIndex){
    const firstElement = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = firstElement;

    return array;
}

const newArray = swap(['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'], 0, 2)
console.log(newArray);
```