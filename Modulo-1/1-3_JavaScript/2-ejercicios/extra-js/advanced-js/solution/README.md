## Iteración #1: Arrows

```jsx
const sum = (a = 10, b = 5) => {
  return console.log(a + b);
};

sum();
sum(2);
sum(2, 3);
```

## Iteración #2: Destructuring

```jsx
//2.1

const game = {
  title: "The last us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};

const {title, gender, year} = game;

console.log(title);
console.log(gender);
console.log(year);

//2.2

const fruits = ["Banana", "Strawberry", "Orange"];

const [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

//2.3

const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};

const { name, race } = animalFunction();

console.log(name);
console.log(race);

//2.4

const car = { name: "Mazda 6", itv: [2015, 2011, 2020] };

const { name, itv } = car;

const [year1, year2, year3] = itv;

console.log(name);
console.log(itv);
console.log(year1);
console.log(year2);
console.log(year3);
```

## Iteración #3: Spread Operator

```jsx
//3.1

const pointsList = [32, 54, 21, 64, 75, 43];

const pointsListCopy = [...pointsList];

//3.2

const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyCopy = { ...toy };

//3.3

const pointsList = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54, 87, 99, 65, 32];

const fusion = [...pointsList, ...pointsList2];

//3.4

const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };

const fusion = { ...toy, ...toyUpdate };

//3.5

const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

const colorsCopy = [...colors];
colorsCopy.splice(2, 1);

console.log(colors);
console.log(colorsCopy);
```

## Iteración #4: Map

```jsx
//4.1

const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const names = users.map((user) => user.name);

console.log(names); 

//4.2

const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const names = users.map((user) => {
  if (user.name[0].includes("A")) {
    user.name = "Anacleto";
  }
  return user.name;
});

console.log(names);

//4.3

const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const cityName = cities.map((city) => {
  if (city.isVisited) {
    city.name += ": (Visitado)";
  }
});

console.log(cityName);
```

## Iteración #5: Filter

```jsx
//5.1

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const greaterThan18 = ages.filter((age) => age > 18);

console.log(greaterThan18);

//5.2

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const numPar = ages.filter((num) => {
  return num % 2 == 0;
});

console.log(numPar);

//5.3

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const lolPlayers = streamers.filter((gamer) => {
  return gamer.gameMorePlayed == "League of Legends";
});

console.log(lolPlayers);

//5.4

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const playersWithU = streamers.filter((player) => {
  return player.name.includes("u");
});

console.log(playersWithU);

//5.5

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const filteredLoleros = streamers.filter((streamer) => {
  const toReturn = streamer.gameMorePlayed.toLowerCase().includes("legends");

  if (toReturn && streamer.age > 35) {
    streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
  }

  return toReturn;
});

console.log(filteredLoleros);
```

```jsx
//5.6

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <script src="it5.js" defer></script>
    <title>Document</title>
  </head>

  <body>
    <input type="text" data-function="toFilterStreamers" />
  </body>
</html>
```

```jsx
//5.6

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const handleChange = (event) => {
  console.log(event);
  const filteredStreamers = streamers.filter((streamer) =>
    streamer.name.toLowerCase().includes(input$$.value.toLowerCase())
  );

  console.log(filteredStreamers);
};

const input$$ = document.querySelector('[data-function="toFilterStreamers"]');

input$$.addEventListener("input", handleChange);
```

```jsx
//5.7

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <script src="it5.js" defer></script>
    <title>Document</title>
  </head>
  <body>
    <input type="text" data-function="toFilterStreamers" />
    <button data-function="toShowFilterStreamers">Filter</button>
  </body>
</html>
```

```jsx
//5.7

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const filterStreamers = (event) => {
  const input$$ = event.target.previousElementSibling;
  const filteredStreamers = streamers.filter((streamer) =>
    streamer.name.toLowerCase().includes(input$$.value.toLowerCase())
  );
  console.log(filteredStreamers);
};

const button$$ = document.querySelector(
  '[data-function="toShowFilterStreamers"]'
);

button$$.addEventListener("click", filterStreamers);
```

## Iteración #6: Find

```jsx
//6.1

const numbers = [32, 21, 63, 95, 100, 67, 43];

const number100 = numbers.find((number) => {
  return number === 100;
});

console.log(number100);

//6.2

const movies = [
  { title: "Madagascar", stars: 4.5, date: 2015 },
  { title: "Origen", stars: 5, date: 2010 },
  { title: "Your Name", stars: 5, date: 2016 },
];

const year2010 = movies.find((movie) => {
  return movie.date === 2010;
});

console.log(year2010);

//6.3

const aliens = [
  { name: "Zalamero", planet: "Eden", age: 4029 },
  { name: "Paktu", planet: "Andromeda", age: 32 },
  { name: "Cucushumushu", planet: "Marte", age: 503021 },
];
const mutations = [
  {
    name: "Porompompero",
    description:
      "Hace que el alien pueda adquirir la habilidad de tocar el tambor",
  },
  {
    name: "Fly me to the moon",
    description: "Permite volar, solo y exclusivamente a la luna",
  },
  {
    name: "Andando que es gerundio",
    description: "Invoca a un señor mayor como Personal Trainer",
  },
];

const cucu = aliens.find((alien) => {
  return alien.name == "Cucushumushu";
});

const poro = mutations.find((mutation) => {
  return mutation.name == "Porompompero";
});

const alien = { ...cucu, mutación: { ...poro } };

console.log(alien);
```

## Iteración #7: Reduce

```jsx
//7.1

const exams = [
  { name: "Yuyu Cabeza Crack", score: 5 },
  { name: "Maria Aranda Jimenez", score: 1 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedez Regrera Brito", score: 7 },
  { name: "Pamela Anderson", score: 3 },
  { name: "Enrique Perez Lijó", score: 6 },
  { name: "Pedro Benitez Pacheco", score: 8 },
  { name: "Ayumi Hamasaki", score: 4 },
  { name: "Robert Kiyosaki", score: 2 },
  { name: "Keanu Reeves", score: 10 },
];

const allScores = exams.reduce(
  (accumulator, exam) => accumulator + exam.score,
  0
);

console.log(allScores);

//7.2

totalApproved = exams.reduce((accumulator, exam) => {
  if (exam.score >= 5) {
    return accumulator + exam.score;
  } else {
    return accumulator;
  }
}, 0);

console.log(totalApproved);

//7.3

const totalScore = exams.reduce(
  (accumulator, exam) => accumulator + exam.score,
  0
);

const averageScore = totalScore / exams.length;

console.log(averageScore);
```

## Iteración #8: Bonus

```jsx
const videogames = [
  { name: "Final Fantasy VII", genders: ["RPG"], score: 9.5 },
  { name: "Assasins Creed Valhala", genders: ["Aventura", "RPG"], score: 4.5 },
  { name: "The last of Us 2", genders: ["Acción", "Aventura"], score: 9.8 },
  { name: "Super Mario Bros", genders: ["Plataforma"], score: 8.5 },
  { name: "Genshin Impact", genders: ["RPG", "Aventura"], score: 7.5 },
  {
    name: "Legend of Zelda: Breath of the wild",
    genders: ["RPG", "La cosa más puto bonita que he visto nunca"],
    score: 10,
  },
];

const rpgGames = videogames.filter(
  (videogame) => !!videogame.genders.find((gender) => gender === "RPG")
);
const totalScoreRpgGames = rpgGames.reduce(
  (accumulator, videogame) => accumulator + videogame.score,
  0
);
const average = totalScoreRpgGames / rpgGames.length;

console.log(average);
```