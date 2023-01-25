import "./Characters.css";
import { CharacterCard } from "../../components/CharacterCard/CharacterCard";
import { getData } from "../../services/services";
import { cleanPage } from "../../utils/cleanPage";

//Almacenamos nuestra lista fuera para poder recuperarla en cualquier punto (OPCIONAL)
let characterList;

const getCharacters = async () => {
  //Utilizamos la función getData para almacenar los datos en json en una constante
  const characters = await getData("characters");
  //Almacenamos los datos fuera también para que sean accesible a todas las funciones (buscad una solución alternativa a este problema)
  characterList = characters;
  //Ejecutamos printCharacters pasandole la lista como primer parametro y el string vacio como palabra en el segundo
  printCharacters(characters, "");
};

const printCharacters = (list, word) => {
  //Filtramos los personajes en base a la palabra y transformamos los nombres y la palabra en minuscula para que nos encuentre cualquier coincidencia de Case
  const filteredCharacters = list.filter((item) =>
    item.name.toLowerCase().includes(word.toLowerCase())
  );
  //Recuperamos el contenedor donde vamos a inyectar los personajes
  const characterContainer = document.querySelector(".character-gallery");
  //Lo vaciamos, porque cuando busquemos queremos que se pinte solamente las coincidencias y no se repitan los personajes todo el rato cada vez que ejecutemos el evento del input
  characterContainer.innerHTML = "";
  //Pintamos los personajes ya filtrados
  for (const item of filteredCharacters) {
    characterContainer.innerHTML += CharacterCard(item);
  }
  //Ejecutamos la elección de personaje
  chooseCharacter();
};

//Esta función cambia la imagen del contenedor derecho superior, por parametro le entra la imagen y un index que viene dado por el forEach que ejecutaremos mas abajo
const changeRightCard = (image, index) => {
  const rightCard = document.querySelector(".right");
  rightCard.style.backgroundImage = `url(${image})`;
  //A su vez, ese index que le ha entrado por parametro nos servirá para ejecutar la función changeText
  changeText(index);
};

const changeText = (index) => {
  //Recupera los dos elementos de texto y le cambia el contenido mediante el indice para saber que texto y de que personaje lo tiene que pintar (esto tambien se puede hacer de muchas maneras distintas)

  //Esto si los personajes son menos o con diferentes posiciones que los originales no va a funcionar a la hora de hacer click, hay que buscar un método alternativo para recuperar la información del personaje adecuado (pista: target)
  const h2 = document.querySelector("#char-name");
  const p = document.querySelector("#char-desc");
  h2.innerHTML = `${characterList[index].name}`;
  p.innerHTML = `${characterList[index].quote}`;
};

const chooseCharacter = () => {
  //A todas las cartas de mis personajes le vamos a aplicar un evento click para que cada una de ellas ejecute la función changeRightCard y le pase por parametro cada uno de sus src con las imagenes para el changeRightCard y el indice de la posición para el changeText
  const allCard = document.querySelectorAll(".character");
  allCard.forEach((card, index) => {
    card.addEventListener("click", (ev) =>
      changeRightCard(ev.target.src, index)
    );
  });
};

export const Characters = () => {
  //Recuperamos nuestro contenedor principal
  const app = document.querySelector("#app");
  //Lo vaciamos para despintar la pagina anterior
  cleanPage(app);
  //Le inyectamos el codigo base
  app.innerHTML = `
    <section class="characters">
    <div class="upper-codec">
    <div class="left"></div>
    <div class="center">
    <input type="text" id="search" placeholder="Search a character:"/>
    </div>
    <div class="right" style="background: url(${"https://i.redd.it/uz93jd5ifl191.jpg"}) no-repeat center center;
    background-size: cover 120%"></div>
  </div>
  <div class="lower-codec">
  <h2 id="char-name">Choose your character:</h2>
  <p id="char-desc">-</p>
  </div>
  <div class="character-gallery">
  </div>
    </section>
    `;

  //Recuperamos los personajes
  getCharacters();

  //Le añadimos un evento input al input que ejecute de nuevo el pintado de los personajes tomando como palabra el valor de input y la lista "local" de personajes que hemos almacenado arriba (hemos dicho que esto se puede hacer de otra maneras)
  const searchInput = document.querySelector("#search");
  searchInput.addEventListener("input", (ev) =>
    printCharacters(characterList, ev.target.value)
  );
};
