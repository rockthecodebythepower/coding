## Iteración #1: Interacción con el DOM

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="it1.js" defer></script>
    <title>Document</title>
  </head>
  <body>
    <button class="showme">Pillame!</button>
    <h1 id="pillado">Aqui estoy 8)</h1>
    <p>Soy el power ranger Amarillo</p>
    <p>Soy el power ranger Rojo</p>
    <p>Soy el power ranger Azul</p>
    <p>Soy el power ranger Negro</p>
    <h4 class="pokemon">Bulbasaur</h4>
    <h4 class="pokemon">Charmander</h4>
    <h4 class="pokemon">Pikachu</h4>
    <h4 class="pokemon">Squirtle</h4>
    <span data-function="testMe">Batman</span>
    <span data-function="testMe">Robin</span>
    <span data-function="testMe">Rick</span>
    <span data-function="testMe">Morty</span>
  </body>
</html>
```

```jsx
showButton = document.querySelector(".showme");
console.log(showButton);

//

h1Pillado = document.querySelector("#pillado");
console.log(h1Pillado);

//

allPElements = document.querySelectorAll("p");
console.log(allPElements);

//

pokemonClassElements = document.querySelectorAll(".pokemon");
console.log(pokemonClassElements);

//

showAllFunction = document.querySelectorAll('[data-function="testMe"]');

console.log(showAllFunction);

//

showBatman = document.querySelectorAll('[data-function="testMe"]');

console.log(showBatman[2]);
```

## Iteración #2: Modificando el DOM

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="it2.js" defer></script>
  </head>
  <body>
    <h2 class="fn-insert-here"></h2>
    <p class="fn-remove-me">Eliminame!</p>
    <p>No me elimines!</p>
    <p>No me elimines!</p>
    <p class="fn-remove-me">Eliminame!</p>
    <p>No me elimines!</p>
    <p class="fn-remove-me">Eliminame!</p>
    <p class="fn-remove-me">Eliminame!</p>
    <p>No me elimines!</p>
    <div></div>
    <div></div>
    <div class="fn-insert-here"></div>
    <div class="fn-insert-here"></div>
  </body>
</html>
```

```jsx
let createDiv = document.createElement("div");

document.body.appendChild(createDiv);

//

let createDivWithP = document.createElement("div");

let createP = document.createElement("p");

createDivWithP.appendChild(createP);

document.body.appendChild(createDivWithP);

//

let createDivWith6P = document.createElement("div");

document.body.appendChild(createDivWith6P);

for (let i = 0; i < 6; i++) {
  let sixP = document.createElement("p");
  createDivWith6P.appendChild(sixP);
}

//

let createPWithText = document.createElement("p");
createPWithText.textContent = "Soy dinámico!";
document.body.appendChild(createPWithText);

//

let h2ElementWithText = document.querySelector(".fn-insert-here")
h2ElementWithText.textContent = "Wubba Lubba dub dub";

//

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let newUl = document.createElement("ul");

for (const app of apps) {
    let newLi = document.createElement("li");
    newLi.textContent = app;
    newUl.appendChild(newLi);
 
}

document.body.appendChild(newUl);

//

let eraseElements = document.querySelectorAll(".fn-remove-me"); 
for (const element of eraseElements) {
    element.remove();
}

//

let newP = document.createElement("p");
selectDivs = document.querySelectorAll("div");

newP.textContent = "Voy en medio!";

document.body.insertBefore(newP, selectDivs[1]);

//

let selectClass = document.querySelectorAll(".fn-insert-here");

for (const singleClass of selectClass) {
    let newPInside = document.createElement("p");
    newPInside.textContent = "Voy dentro!"

    singleClass.appendChild(newPInside);
}
```