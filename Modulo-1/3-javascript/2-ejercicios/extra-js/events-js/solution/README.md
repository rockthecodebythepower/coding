## Iteración #1: Creando Events

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="it1.js" defer></script>
  </head>
  <body>
    <input class="click" type="text" />
    <input class="focus" type="text" />
    <input class="value" type="text" />
    <button id="btnToClick">Click</button>
  </body>
</html>
```

```jsx
let btnToClick = document.body.querySelector("#btnToClick");
btnToClick.addEventListener("click", function () {
  console.log(event);
});

//

let focusInput = document.body.querySelector(".focus");
focusInput.addEventListener("focus", function (event) {
  console.log(event.target.value);
});

//

let valueInput = document.body.querySelector(".value");
valueInput.addEventListener("input", function (event) {
  console.log(event.target.value);
});
```