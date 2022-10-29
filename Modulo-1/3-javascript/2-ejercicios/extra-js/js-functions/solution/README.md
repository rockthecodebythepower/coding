## Iteración #1: Buscar el máximo

```jsx
function sum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
```

## Iteración #2: Buscar la palabra más larga

```jsx
const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(param) {
  let longestWord = param[0];
  for (let i = 1; i < param.length; i++) {
    if (param[i].length > longestWord.length) {
      longestWord = param[i];
    }
  }
  return console.log(longestWord);
}
findLongestWord(avengers);
```

## Iteración #3: Calcular la suma

```jsx
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return console.log(sum);
}

sumArray(numbers);
```

## Iteración #4: Calcular el promedio

```jsx
const nums = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
  let sum = 0;
  for (let i = 0; i < param.length; i++) {
    sum += param[i];
  }
  return console.log(sum / param.length);
}

average(nums);
```

## Iteración #5: Calcular promedio de strings

```jsx
const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "rock", 8, "code"];

function averageWord(param) {
  let sum = 0;
  for (let i = 0; i < param.length; i++) {
    if (typeof param[i] === "string") {
      sum += param[i].length;
    }
  }
  return console.log(sum / param.length);
}

averageWord(mixedElements);
```

## Iteración #6: Valores únicos

```jsx
const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

function removeDuplicates(param) {
  let unique = [];
  for (let i = 0; i < param.length; i++) {
    if (!unique.includes(param[i])) {
      unique.push(param[i]);
    }
  }
  return console.log(unique);
}

removeDuplicates(duplicates);
```

## Iteración #7: Buscador de nombres

```jsx
const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

function finderName(param, value) {
  for (let i = 0; i < param.length; i++) {
    if (param[i] === value) {
      return console.log(true, i);
    }
  }
  return console.log(false);
}

finderName(nameFinder, "Natasha");
```

## Iteración #8: Contador de repeticiones

```jsx
const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'rock',
    'code'
  ];
  
  function repeatCounter(param) {
    let counter = {};
    for (let i = 0; i < param.length; i++) {
      if (param[i] in counter) {
        counter[param[i]]++;
      } else {
        counter[param[i]] = 1;
      }
    }
    return console.log(counter);
  }

  repeatCounter(counterWords);
```