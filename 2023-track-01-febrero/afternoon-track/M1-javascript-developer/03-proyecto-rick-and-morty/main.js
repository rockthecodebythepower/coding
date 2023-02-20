import "./style.css";

//Recuperar el div app para poder insertarle contenido al html
const container = document.querySelector("#app");
//Recuperamos los botones de html
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//Esta es la URL donde esta la base de datos de personajes
const BASEURL = "https://rickandmortyapi.com/api/character?page=";

//Almacenamos en una variable el numero de la página, que es el dato que va a cambiar para hacer las distintas peticiones
let pageNum = 1;

const getCharacters = async () => {
  console.log("Estamos en la página:", pageNum);
  //Cada vez que hagamos una petición vamos a comprobar el numero de pagina para saber si desactivar o no los botones de next y prev
  checkBtns();
  //Recuperamos la información "cruda"
  const res = await fetch(BASEURL + pageNum);
  //Parseamos la información en formato json
  const data = await res.json();
  //Ahora le pasaremos lo que queramos recorrer a la función del mapeo para crear un nuevo array de objetos con las claves que queramos
  //Le pasamos data.results, porque data tiene un .info y un .results, y los personajes están en .results
  mapCharacters(data.results);
};

const mapCharacters = (list) => {
  //Creamos un nuevo array de objetos con las claves y los valores que quiero del array original
  const mappedList = list.map((item) => ({
    name: item.name,
    status: item.status,
    specie: item.species,
    origin: item.origin.name,
    photo: item.image,
  }));
  console.log(mappedList);
  //La lista mapeada se la pasamos a la función printCharacters que se encargará de pintar los personajes en el DOM
  printCharacters(mappedList);
};

const printCharacters = (list) => {
  //Vaciamos el contenedor para que pinte los personajes encima unos de otros y no me pinte la lista infinita hacia abajo
  container.innerHTML = "";
  //Recorre los elementos de la lista
  for (const item of list) {
    //Por cada uno de los personajes creamos un elemento de html article
    const article = document.createElement("article");
    //Le damos html interno a cada uno de los articles
    article.innerHTML = `
    <h2>${item.name}</h2>
    <h3>${item.status}</h3>
    <img src=${item.photo} alt=${item.name} />
    <p>${item.origin}</p>
    <p>${item.specie}</p>
    `;
    //Por cada uno de los elementos, le insertamos un elemento hijo a container, que lo hemos recuperado al principio
    container.appendChild(article);
  }
};

//Vamos a crear una función que compruebe el numero de paginas y desactive o active los botones de next y prev
const checkBtns = () => {
  if (pageNum <= 1) {
    prevBtn.disabled = true;
  } else if (pageNum >= 42) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
};

//Vamos a darle una funcionalidad a cada uno de los botones
nextBtn.addEventListener("click", () => {
  pageNum++;
  getCharacters();
});

prevBtn.addEventListener("click", () => {
  pageNum--;
  getCharacters();
});

//Ejecutamos getCharacters, que en cadena va a ejecutar el resto de las funciones
getCharacters();
