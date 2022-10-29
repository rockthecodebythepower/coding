## Iteración #1: Fetch

```jsx
//1.1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
<script src="it1.js" defer></script>
</html>
```

```jsx
//1.1
fetch("https://api.agify.io?name=michael")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  });
```

```jsx
//1.2
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="it1_2.js" defer></script>
    <title>Document</title>
</head>
<body>
    <input type="text">
    <button>Consultar</button>
</body>
</html>
```

```jsx
//1.2
const baseUrl = "https://api.nationalize.io";

const search = (event) => {
  const input$$ = document.querySelector("input");

  fetch(baseUrl + "?name=" + input$$.value)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
};

const button$ = document.querySelector("button");

button$.addEventListener("click", search);
```

```jsx
//1.3
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="it1_3.js" defer></script>
    <title>Document</title>
</head>
<body>
    <input type="text">
    <button>Consultar</button>
</body>
</html>
```

```jsx
//1.3
const baseUrl = "https://api.nationalize.io";

const search = () => {
  const input$$ = document.querySelector("input");

  fetch(baseUrl + "?name=" + input$$.value)
    .then((res) => res.json())
    .then((person) => {
      createNationalizeP(person);
    });
};

const createNationalizeP = (person) => {
  const p$$ = document.createElement("p");
  let text = `El nombre ${person.name} tiene`;

  for (const country of person.country) {
    const percentage = Math.floor(country.probability * 100);
    text += ` un ${percentage} porciento de ser de ${country.country_id}`;
  }

  p$$.textContent = text;

  document.body.appendChild(p$$);
};

const button$ = document.querySelector("button");

button$.addEventListener("click", search);

```

```jsx
//1.4
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="it1_4.js" defer></script>
    <title>Document</title>
</head>
<body>
    <input type="text">
    <button>Consultar</button>
</body>
</html>
```

```jsx
//1.4
const baseUrl = "https://api.nationalize.io";

const search = () => {
  const input$$ = document.querySelector("input");

  fetch(baseUrl + "?name=" + input$$.value)
    .then((res) => res.json())
    .then((person) => {
      createNationalizeP(person);
    });
};

const createNationalizeP = (person) => {
  let text = `El nombre ${person.name} tiene`;

  for (const country of person.country) {
    const percentage = Math.floor(country.probability * 100);
    text += ` un ${percentage} porciento de ser de ${country.country_id}`;
  }

  const div$$ = document.createElement("div");
  const p$$ = document.createElement("p");
  const button$$ = document.createElement("button");

  p$$.textContent = text;
  button$$.innerHTML = "X";

  div$$.appendChild(p$$);
  div$$.appendChild(button$$);

  button$$.addEventListener("click", () => {
    removeP(div$$);
  });
  document.body.appendChild(div$$);
};

const removeP = (nodeEl$$) => {
  nodeEl$$.remove();
};

const button$ = document.querySelector("button");

button$.addEventListener("click", search);
```

## **Iteración #2: async-await**

```jsx
//2.1

const runTimeOut = async () => {
    await new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })
    console.log('Time out!')
};

runTimeOut();
```

```jsx
//2.2

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <script src="it2_2.js"></script>
    <title>Document</title>
  </head>
  <body></body>
</html>
```

```jsx
//2.2
async function getCharacters () {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const characters = await res.json();
    console.log(characters);
}

getCharacters();

```