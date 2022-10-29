## **Iteración #1: Interacción con el DOM**

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="exercise-1.js" defer></script>
    <title>Document</title>
  </head>
  <body>
    <p class="fn-remove-me">Bye bye</p>
    <div data-function="printHere"></div>
    <button id="delete-last-element">Delete last element</button>
  </body>
</html>
```

```jsx
//1.1

const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

let countryList = document.createElement("ul");

for (const country of countries) {
  let countryItem = document.createElement("li");
  countryItem.textContent = country;
  countryList.appendChild(countryItem);
}
document.body.appendChild(countryList);

console.log(countries);

//1.2

let deleteElement = document.querySelector(".fn-remove-me");
deleteElement.remove();

//1.3

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

let selectDiv = document.querySelector('[data-function="printHere"]');

let createCarList = document.createElement("ul");

for (const car of cars) {
  let createCarItem = document.createElement("li");
  createCarItem.textContent = car;
  createCarList.appendChild(createCarItem);
}

selectDiv.appendChild(createCarList);

//1.4

const countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

for (const country of countries) {
  let createCountryItem = document.createElement("div");
  createCountryItem.innerHTML = `<h4>${country.title}</h4><img src=${country.imgUrl} />`;

  document.body.appendChild(createCountryItem);
}

//1.5

const lastElementButton = document.querySelector("#delete-last-element");
lastElementButton.addEventListener("click", function () {
  const selectDivs = document.querySelectorAll("div");
  selectDivs[selectDivs.length - 1].remove();
});

//1.6

const countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

for (const country of countries) {
  let createCountryItem = document.createElement("div");
  createCountryItem.innerHTML = `<h4>${country.title}</h4><img src=${country.imgUrl} />`;

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Remove";

  createCountryItem.appendChild(deleteButton);

  deleteButton.addEventListener("click", function () {
    createCountryItem.remove();
  });

  document.body.appendChild(createCountryItem);
}
```