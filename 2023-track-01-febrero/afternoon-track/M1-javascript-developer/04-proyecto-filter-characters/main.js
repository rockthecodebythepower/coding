import "./style.css";
//Nos importamos el array de personajes del archivo data.js
import { characters } from "./data";

const printCharacters = (list) => {
  //1º Recuperar el contenedor donde va a pintar los personajes
  const container = document.querySelector("#app");
  //1º.1 Vamos a vaciar el contenedor para que al ejecutar otras veces printCharacters no se amontonen los personajes
  container.innerHTML = "";
  //2º Vamos a recorrer la lista
  for (const item of list) {
    //3º Por cada uno de ellos vamos a crear una etiqueta vacía article
    const article = document.createElement("article");
    //4º Vamos a darle contenido HTML a cada uno de los article
    article.innerHTML = `
        <h2>${item.name}</h2>
        <img src=${item.image} alt='${item.name}' />
        <h3>${item.race}-${item.species}</h3>
        <h4>${item.origin}</h4>
        <h4>${item.affiliation}</h4>
    `;
    //4º.1 Vamos a asignarle a cada uno de los articles un nombre de clase con item.affiliation
    article.classList.add(item.affiliation.replace(" ", ""));
    //5º Siguiendo dentro del bucle, le vamos a decir que añada estos articles al contenedor
    container.appendChild(article);
  }
};

//---------------------------------------------------//

//Definimos una función que filtre los personajes
const filterCharacters = (list, keyword) => {
  const filteredCharacters = list.filter((item) =>
    //Pasamos tanto el nombre del objeto como la palabra a buscar a minusculas para igualarlas y poder escribirlas en el buscador como queramos
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );
  printCharacters(filteredCharacters);
};

//Añadirle al input que cuando cambie el valor del input dispare la función filterCharacters
const searchInput = document.querySelector("#searchInput");
searchInput.addEventListener("input", (ev) =>
  filterCharacters(characters, ev.target.value)
);

//---------------------------------------------------//
//Vamos a definir filtros por el affiliation de cada uno de los personajes
//Jedi Order
//Rebel Alliance
//Galactic Empire
//Galactic Republic
const filterAffiliation = (list, keyword) => {
  const filteredAffiliation = list.filter(
    (item) => item.affiliation === keyword
  );
  if (!keyword) {
    printCharacters(characters);
  } else {
    printCharacters(filteredAffiliation);
  }
};

//Recuperamos los botones
const jediBtn = document.querySelector("#jediBtn");
const rebelBtn = document.querySelector("#rebelBtn");
const empireBtn = document.querySelector("#empireBtn");
const republicBtn = document.querySelector("#republicBtn");
const allBtn = document.querySelector("#allBtn");

//Le vamos a añadir un evento click a cada uno que lance la función filterAffiliation y la pase characters y el valor que queremos que filtre por afiliación
jediBtn.addEventListener("click", () =>
  filterAffiliation(characters, "Jedi Order")
);

rebelBtn.addEventListener("click", () =>
  filterAffiliation(characters, "Rebel Alliance")
);

empireBtn.addEventListener("click", () =>
  filterAffiliation(characters, "Galactic Empire")
);

republicBtn.addEventListener("click", () =>
  filterAffiliation(characters, "Galactic Republic")
);

allBtn.addEventListener("click", () => filterAffiliation(characters));
//---------------------------------------------------//

//Al arrancar la aplicación vamos a ejecutar printCharacters y le vamos a pasar los characters originales de nuestro fichero data.js
printCharacters(characters);

//---------------------------------------------------//
//Vamos a añadir un footer con un h2 que tenga como contenido de texto Powered by Rock the Code
const footer = document.createElement("footer");
const h2 = document.createElement("h2");
h2.textContent = "Powered by Rock the Code";
footer.appendChild(h2);
document.body.appendChild(footer);

//---------------------------------------------------//
//Vamos a añadirle al boton del tema una funcionalidad para que nos añada y nos quite una clase del body
const themeBtn = document.querySelector("#themeBtn");
themeBtn.addEventListener("click", (ev) => {
  // ev.target.previousElementSibling.innerText = "Hola";
  document.body.classList.toggle("light");
  if (themeBtn.textContent === "☀️") {
    themeBtn.textContent = "🌚";
  } else {
    themeBtn.textContent = "☀️";
  }
});
