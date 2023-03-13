import "./Gallery.css";

let pageNum = 1;
let info;
//Por defecto vamos a pintar los characters
let type = "characters";

const template = () => {
  return `
    <main>
    <nav>
    <button id="charactersBtn">Characters</button>
    <button id="vehiclesBtn">Vehicles</button>
    </nav>
        <h2>Gallery</h2>
        <h2 id="pageNum">Page: 1</h2>
        <button id="prevBtn">Prev</button>
        <button id="nextBtn">Next</button>
        <section class="gallery-container"></section>
    </main>
    `;
};

//Definimos la función asincrona
const getData = async () => {
  //Declaramos la constante data y hasta que no termine de hacer el fetch no prosigue con el código
  const data = await fetch(
    `https://starwars-databank-server.vercel.app/api/v1/${type}?page=${pageNum}&limit=10`
  );
  //Ahora que tenemos los datos crudos declaramos una constante llamada res y no proseguirá con el siguiente bloque de codigo hasta que no convierta toda la respuesta en json
  const res = await data.json();
  //Almacenamos en la variable info la información de cada una de las peticiones
  info = res.info;
  //Pintamos el numero de pagina
  document.querySelector("#pageNum").innerText = `Page: ${info.page}`;
  //Comprobamos si tenemos que desactivar algún botón
  checkPages();
  //Le pasamos la clave data a printData porque es nuestro array de objetos que queremos pintar
  printData(res.data);
};

const addListeners = () => {
  document.querySelector("#prevBtn").addEventListener("click", () => {
    pageNum--;
    getData();
  });
  document.querySelector("#nextBtn").addEventListener("click", () => {
    pageNum++;
    getData();
  });
  document.querySelector("#charactersBtn").addEventListener("click", () => {
    pageNum = 1;
    type = "characters";
    getData();
  });
  document.querySelector("#vehiclesBtn").addEventListener("click", () => {
    pageNum = 1;
    type = "vehicles";
    getData();
  });
};

const printData = (list) => {
  //Recuperamos el contenedor del template donde queremos renderizar nuestros datos
  const container = document.querySelector(".gallery-container");
  //Vaciamos el container para que no se repitan los datos
  container.innerHTML = "";

  for (const item of list) {
    const article = document.createElement("article");
    article.innerHTML = `
    <img src=${item.image} alt=${item.name} />
    <h2>${item.name}</h2>
    <p>${item.description}</p>
    
    `;
    //Los inyectamos cada uno en container
    container.appendChild(article);
  }
};

//Función comprobadora de página anterior o posterior
const checkPages = () => {
  const prevBtn = document.querySelector("#prevBtn");
  const nextBtn = document.querySelector("#nextBtn");
  //Si no hay info.prev desactivamos el botón y si no lo activamos
  info.prev === null ? (prevBtn.disabled = true) : (prevBtn.disabled = false);
  //Si no hay info.next desactivamos el botón y si no lo activamos
  info.next === null ? (nextBtn.disabled = true) : (nextBtn.disabled = false);
};

export const printTemplate = () => {
  //Lo primero que vamos a hacer es pintar el template de HTML, de esta manera podemos modificarlo dinámicamente debajo de esta linea, darle listeners o lo que queramos.
  document.querySelector("#app").innerHTML = template();
  //Recuperamos los datos una vez tengamos el html
  getData();
  //Añadimos los listeners necesarios al HTML
  addListeners();
};
