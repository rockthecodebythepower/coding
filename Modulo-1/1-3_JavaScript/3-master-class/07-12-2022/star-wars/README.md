### Guia Basic Project

Paso 1: Creamos un proyecto con Vite - `npm create vite @latest`

- Seleccionamos Vanilla y Javascript

```bash
cd name_project
npm install
npm run dev
```

Paso 2: Limpiamos nuestro proyecto

 - Borramos el contenido del fichero `main.js` y `style.css`
 - Eliminamos el ficherto `counter.js`

Paso 3: Preparamos nuestros pasos

  - Selector de app
  - variable para asignar la página
  - variable para guardar el valor de la petición
  - variable del elemento atacar 

Paso 4: Petición a la API - función asíncrona para recupera info

```jsx
const getData = async () => {
  const data = await fetch(`https://starwars-databank.vercel.app/${destination}?page=${page}&limit=10`)
  console.log('1', data)
  const json = await data.json()
  console.log('2', json)
  dataList = [...dataList, ...json[`${destination}`]]
  console.log('3', dataList)
  mapData(dataList)
}
```

Paso 5: Mappeo de la respuesta - función que recoge los valores con los que trabajamos

```jsx
const mapData = (list) => {
    const mappedData = list.map((item) => ({
      name: item.name,
      description: item.description,
      image: item.image,
      creator: 'Alberto Rivera'
    }))
    console.log('4', mappedData)
    printData(mappedData)
  }
```

Paso 6: Pintamos la información en el DOM

```jsx
const printData = (list) => {
  container.innerHTML = ""
  for (const item of list) {
    const figure = document.createElement('figure')
    figure.innerHTML = `
      <img src=${item.image} alt=${item.name} />
      <h1>${item.name}</h1>
      <div>
        <p>${item.description}</p>
        <p>creator: ${item.creator}</p>
      </div>
    `
    container.appendChild(figure)
  }
}
```

Paso 7: Lanzamos nuestra función disparadora `getData()` y probamos nuestros avances y que se visualiza el contenido dentro de nuestra aplicación.

```bash
npm run dev
```

Paso 8: Reestructuramos nuestro index.html para mejorar la semántica.

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Star Wars App</title>
</head>

<body>
  <header>
    <div class="logo">
      <img src="/images/logo.png" alt="star wars logo">
    </div>
    <nav>
      <ul>
        <li>
          <a id="characters">Characters</a>
        </li>
        <li>
          <a id="locations">Locations</a>
        </li>
        <li>
          <a id="droids">Droids</a>
        </li>
      </ul>
    </nav>
    <div class="slogan">
      <p>ALL OF YOUR STAR WARS FAVORITES NOW STREMING</p>
    </div>
  </header>
  <main>
    <section id="app"></section>
    <section id="showmore">
      <button> Show More</button>
    </section>
  </main>
  <footer>
    <p>Created with love 💕 by Rock{TheCode}</p>
  </footer>

  <script type="module" src="/main.js"></script>
</body>

</html>
```

Paso 9: Añadimos los selectores de los anchors en nuestro `main.js` y el selector del botón para cargar la siguiente página

```jsx
const btn = document.querySelector("button");

const charactersAnchor = document.querySelector("#characters");
const locationsAnchor = document.querySelector("#locations");
const droidsAnchor = document.querySelector("#droids");
```

Paso 10: Establecemos los listeners para lanzar la funcionalidad asociada.

```jsx
btn.addEventListener('click', () => {
  page++
  getData()
})

charactersAnchor.addEventListener('click', () => {
  dataList = []
  destination = 'characters'
  page = 1
  getData()
})

locationAnchor.addEventListener('click', () => {
  dataList = []
  destination = 'locations'
  page = 1
  getData()
})

droidsAnchor.addEventListener('click', () => {
  dataList = []
  destination = 'droids'
  page = 1
  getData()
})
```

Paso 11: Nos queda darle un poco de alegría a nuestra aplicación vía CSS.

```css
:root {
 --primary: #a8a8a8;
 --secondary: #ffffff;
 --black: black;
 --bg: #151515;
 --box-bg: #292828;
 --crimson: crimson;
}

* {
  margin: 0;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

li {
  list-style-type: none;
}

a {
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  color: var(--primary);
  cursor: pointer;
}

a:hover {
  color: var(--secondary);
}

body {
  background-color: var(--bg);
  color: var(--primary);
  font-size: 14px;
}

header {
  height: 25vh;
  background-size: contain;
}

header > .logo {
  height: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
}

header > .logo > img {
  height: 80%;
}

header > nav > ul {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

header > nav > ul > li {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  height: 100%;
  border-left:  1px solid var(--primary);
  border-right:  1px solid var(--primary);
}

header > .slogan {
  height: 22.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 300;
  font-size: 25px;
}

main {
  min-height: 70vh;
}

main > section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 400px;
  gap: 2rem;
  padding: 1rem 5rem;
}

main > section > figure {
  overflow: hidden;
}

main > section > figure > img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: top;
  border-bottom: 1.5px solid var(--crimson);
}

button {
  width: 50%;
  height: 50px;
  color: var(--primary);
  border: none;
  border-radius: 0.5rem;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
}

footer {
  min-height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

Paso 12: Intenta crear una aplicación similar atacando a otra API ;) 🚀