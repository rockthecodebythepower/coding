import "./style.css";

//Importar la colección de datos
import { data } from "./data/data.js";

//Vamos a crear una variable global para setear el estado de los datos filtrados
let filteredData = [];

//Definir la función que lanzará el resto
const init = () => {
  //Almacenamos el retorno de newArrayGenerator pasandole data como arg
  filteredData = newArrayGenerator(data);
  //Le pasamos la lista a printData para que pinte los datos
  printData(filteredData);
};

//Tenemos muchos datos en cada uno de los objetos y queremos mapear para generar un nuevo array de objetos
const newArrayGenerator = (list) => {
  return list.map((item) => ({
    name: item.Title,
    year: item.Year,
    duration: item.Runtime,
    genre: item.Genre,
    director: item.Director,
    actors: item.Actors,
    synopsis: item.Plot,
    poster: item.Poster,
    images: item.Images,
    type: item.Type,
  }));
};

const printData = (list) => {
  //Recuperamos el contenedor donde vamos a pintar nuestros datos
  const container = document.querySelector("#app");
  //Limpiamos el container para que no se repitan los elementos al filtrar
  container.innerHTML = "";
  //Vamos a recorrer la lista
  for (const item of list) {
    //Por cada uno de los elementos vamos a crear un article
    const article = document.createElement("article");
    //Le añadimos una clase al articulo
    article.className = "card";

    //Vamos a darle contenido HTML a cada uno de los articles
    article.innerHTML = `
    <h2>${item.name}</h2>
    <img src=${item.poster} alt=${item.name} />
    <h3>${item.year} - ${item.duration}</h3>
    <h3>${item.genre}</h3>
    <h4>Directed by: ${item.director}</h4>
    <details>
      <summary>View more +</summary>
      <h4>Cast: ${item.actors}</h4>
      <div>
        ${item.images
          .map((image) => {
            return `<a href=${image} target="_blank"><img src=${image} alt='${item.name} still' /></a> `;
          })
          //Con join le eliminamos las comas por haber impreso directamente un array
          .join("")}
      </div>
    
</details>

   
    `;

    //Insertamos cada uno de los article en el container
    container.appendChild(article);
  }
};

//Recuperamos los botones de movies y shows
const moviesBtn = document.querySelector("#moviesBtn");
const showsBtn = document.querySelector("#showsBtn");
const allBtn = document.querySelector("#allBtn");

//Declarar una función que filtre los datos y nos devuelva los que coincida con x tipo
const filterType = (type, data) => {
  return data.filter((item) => item.type === type);
};

//Le añadimos funcionalidad al click en moviesBtn
moviesBtn.addEventListener("click", () => {
  //Vamos a modificar filteredData con el filtrado para que podamos combinar filtros
  filteredData = filterType("movie", filteredData);
  //Pintamos los datos filtrados
  printData(filteredData);
});
//Le añadimos funcionalidad al click en showsBtn
showsBtn.addEventListener("click", () => {
  //Vamos a modificar filteredData con el filtrado para que podamos combinar filtros
  filteredData = filterType("series", filteredData);
  printData(filteredData);
});
//Le añadimos funcionalidad al click en allBtn
allBtn.addEventListener("click", () => {
  init();
});

//Filtrado por nombre
const filterByName = (keyword, data) => {
  return data.filter((item) =>
    //Convertimos tanto la propiedad del objeto como la palabra de busqueda a minúscula para que podamos escribir con cualquier tipo de case
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );
};

//Vamos a recuperar el input de busqueda
const searchbar = document.querySelector("#searchbar");
//Le vamos a añadirle un evento
searchbar.addEventListener("input", (ev) => {
  const filteredList = filterByName(ev.target.value, filteredData);
  printData(filteredList);
});

//Vamos a filtrar por genero con select
const filterByGenre = (keyword, data) => {
  return data.filter((item) =>
    //Convertimos tanto la propiedad del objeto como la palabra de busqueda a minúscula para que podamos escribir con cualquier tipo de case
    item.genre.toLowerCase().includes(keyword.toLowerCase())
  );
};

//Recuperamos el select
const genreSelect = document.querySelector("#genreSelect");

//Le añadimos el escuchador de eventos
genreSelect.addEventListener("input", (ev) => {
  const filteredList = filterByGenre(ev.target.value, filteredData);
  printData(filteredList);
});

//Filtro por fecha
//Recuperar el input de tipo range
const rangeInput = document.querySelector("#rangeInput");
//Función que filtra los objetos por fecha > que
const filterByYear = (year, data) => {
  return data.filter((item) => item.year >= year);
};
//Le añadimos un escuchador de eventos
rangeInput.addEventListener("input", (ev) => {
  //Le pasamos el valor a la p que hay al lado del input
  document.querySelector("#rangeInputValue").innerText = ev.target.value;
  //Filtramos los datos y los pintamos
  const filteredList = filterByYear(ev.target.value, filteredData);
  printData(filteredList);
});

//Cambiamos el tema
const themeBtn = document.querySelector("#theme");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

//Arrancamos nuestra función que disparará las demás en cadena
init();
