## Iteración #1: Variables

```jsx
const favoriteHero = "Hulk";
let x = 50;
let h = 5;
let y = 10;
let z = h + y;
```

## Iteración #2: Variables avanzadas

```jsx
const character = { name: "Jack Sparrow", age: 25 };

const firstName = "Jon";
const lastName = "Snow";
const age = 24;

console.log(
  "Soy " +
    firstName +
    " " +
    lastName +
    ", tengo " +
    age +
    " años y me gustan los lobos."
);

//

const toy1 = { name: "Buss myYear", price: 19 };
const toy2 = { name: "Rallo mcKing", price: 29 };

console.log(
  "La suma del precio de " +
    toy1.name +
    " y " +
    toy2.name +
    " es: " +
    (toy1.price + toy2.price)
);

//

let globalBasePrice = 10000;
const car1 = { name: "BMW m&m", basePrice: 50000, finalPrice: 60000 };
const car2 = { name: "Chevrolet Corbina", basePrice: 70000, finalPrice: 80000 };

globalBasePrice = 25000;

car1.finalPrice = globalBasePrice + car1.basePrice;
car2.finalPrice = globalBasePrice + car2.basePrice;
```

## Iteración #3: Operadores

```jsx
const mul = 5 * 5;
console.log(mul);
const div = 10 / 2;
console.log(div);
const res = 15 % 9;
console.log(res);

let y = 10;
let z = 5;
let x = y + z;
console.log(x);

let x = y * z;
let y = 10;
let z = 5;
console.log(x);
```

## Iteración #4: Arrays

```jsx
let avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

avengers[0] = "IRON MAN";
console.log(avengers);

console.log(avengers.length);

//

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);

//

rickAndMortyCharacters.pop();
console.log(
  rickAndMortyCharacters[0],
  rickAndMortyCharacters[rickAndMortyCharacters.length - 1]
);

//

const rickAndMortyCharacters = [
  "Rick",
  "Beth",
  "Jerry",
  "Morty",
  "Summer",
  "Lapiz Lopez",
];
rickAndMortyCharacters.splice(1, 1);
console.log(rickAndMortyCharacters);
```

## Iteración #5: Condicionales

```jsx
const number1 = 10;
const number2 = 20;
const number3 = 2;

if (number1 === 10) {
  console.log("number1 es estrictamente igual a 10");
}

if (number2 / number1 == 2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
  console.log("number3 es distinto number1");
}

if (number3 * 5 == number1) {
  console.log("number3 por 5 es igual a number1");
}

if (number3 * 5 == number1 && number1 * 2 === number2) {
  console.log(
    "number3 por 5 es igual a number1 Y number1 por 2 es igual a number2"
  );
}

if (number2 / 2 == number1 || number1 / 5 === number3) {
  console.log(
    "number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3"
  );
}
```

## Iteración #6: Bucles

```jsx
for (let index = 0; index < 10; index++) {
  console.log(index);
}

//

for (let index = 0; index < 10; index++) {
  if (index % 2 === 0) {
    console.log(index);
  }
}

//

for (let index = 0; index < 10; index++) {
  if (index === 9) {
    console.log("Dormido!");
  } else {
    console.log("Intentando dormir");
  }
}
```