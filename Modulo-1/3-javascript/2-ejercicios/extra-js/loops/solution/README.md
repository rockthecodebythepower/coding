## Iteración #1: Usa includes

```jsx
const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];

function showProducts() {
  for (let i = 0; i < products.length; i++) {
    if (products[i].includes("Camiseta")) {
      console.log(products[i]);
    }
  }
}

showProducts(products);
```

## Iteración #2: Condicionales avanzados

```jsx
const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

for (let index = 0; index < alumns.length; index++) {
  alumn = alumns[index];

  let approvedCount = 0;
  approvedCount = alumn.T1 ? approvedCount + 1 : approvedCount;
  approvedCount = alumn.T2 ? approvedCount + 1 : approvedCount;
  approvedCount = alumn.T3 ? approvedCount + 1 : approvedCount;
  alumn.isApproved = approvedCount >= 2 ? true : false;
}

console.log(alumns);
```

## Iteración #3: Probando For...of

```jsx
const placesToTravel = [
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];

for (const place of placesToTravel) {
  console.log(place);
}
```

## Iteración #4: Probando For...in

```jsx
const alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};

for (const key in alien) {
  console.log("Propiedad: " + key + ", valor: " + alien[key]);
}
```

## Iteración #5: Probando For

```jsx
const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

for (let index = 0; index < placesToTravel.length; index++) {
  const element = placesToTravel[index];
  if (element.id === 11 || element.id === 40) {
    placesToTravel.splice(index, 1);
  }
}
console.log(placesToTravel);
```

## Iteración #6: Mixed For...of e includes

```jsx
const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

for (const toy of toys) {
  if (toy.name.includes("gato")) {
    toys.splice(toys.indexOf(toy));
  }
}
console.log(toys);
```

## Iteración #7: For...of avanzado

```jsx
const popularToys = [];
const toys = [
  { id: 5, name: "Buzz MyYear", sellCount: 10 },
  { id: 11, name: "Action Woman", sellCount: 24 },
  { id: 23, name: "Barbie Man", sellCount: 15 },
  { id: 40, name: "El gato con Guantes", sellCount: 8 },
  { id: 40, name: "El gato felix", sellCount: 35 },
];

for (const toy of toys) {
  if (toy.sellCount > 15) {
    popularToys.push(toy);
  }
}

console.log(popularToys);
```