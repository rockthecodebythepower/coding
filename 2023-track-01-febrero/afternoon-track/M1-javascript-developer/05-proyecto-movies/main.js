import "./style.css";

//Importar la colección de datos
import { data } from "./data/data.js";

//Definir la función que lanzará el resto
const init = () => {
  //Almacenamos el retorno de newArrayGenerator pasandole data como arg
  const list = newArrayGenerator(data);
  //Le pasamos la lista a printData para que pinte los datos
  printData(list);
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
    <h4>Cast: ${item.actors}</h4>
    <div>
      ${item.images
        .map((image) => {
          return `<a href=${image} target="_blank"><img src=${image} alt='${item.name} still' /></a> `;
        })
        //Con join le eliminamos las comas por haber impreso directamente un array
        .join("")}
    </div>
    
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
  const list = newArrayGenerator(data);
  const filteredList = filterType("movie", list);
  //Pintamos los datos filtrados
  printData(filteredList);
});
//Le añadimos funcionalidad al click en showsBtn
showsBtn.addEventListener("click", () => {
  const list = newArrayGenerator(data);
  const filteredList = filterType("series", list);
  printData(filteredList);
});
//Le añadimos funcionalidad al click en allBtn
allBtn.addEventListener("click", () => {
  init();
});

//Arrancamos nuestra función que disparará las demás en cadena
init();
