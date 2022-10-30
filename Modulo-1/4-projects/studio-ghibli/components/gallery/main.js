import { BASE_URL, URL_FILMS } from './constants/endpoints';
import './style.css';

let films;

const principalContainer = document.querySelector('#app');

const getTemaplateGallery = () => `<div class="grid-container"></diV>`;

const getTemplateModal = () => `
  <div class="modal">
    <div class="modal-header">
      <h3></h3>
      <button class="close-btn">❌</button>
    </div>
    <div class="modal-body"></div>
  </div>
`;

const setupGallery = () => {
  principalContainer.innerHTML += getTemaplateGallery();
}

const setupModal = () => {
  principalContainer.innerHTML += getTemplateModal();
}

setupGallery();

setupModal();



const gridContainer = document.querySelector('.grid-container');

const modal = document.querySelector('.modal');
const modalHeader = document.querySelector('.modal-header h3');
const modalBody = document.querySelector('.modal-body');


const getDataFilm = async () => {
  try {
    const response = await fetch(`${BASE_URL}${URL_FILMS}`);
    const data = await response.json();
    films = data;
    setupContent();
  } catch (error) {
    console.log(error);
  }
}

getDataFilm();

const setupContent = () => {
  films.forEach((film) => {
    const elementCard = `
    <div class="card" data-id="${film.id}">
      <div class="card-image">
        <img src="${film.image}" alt="${film.title}">
      </div>
      <div class="card-content">
        <h3>${film.title}</h3>
      </div>
    </div>
    `
    gridContainer.innerHTML += elementCard;
  });
  cardEventListener()
}

const showModal = (event) => {
  modal.style.display = 'block';
  const selectedFilms = event.target.dataset.id;
  const film = films.find((film) => film.id == selectedFilms);
  getModalContent(film);
  closeButtonListerner();
}

const closeModal = () => {
  modal.style.display = 'none';
  modalHeader.textContent = '';
  modalBody.innerHTML = '';
}

const getModalContent = (film) => {
  modalHeader.textContent = film.title;
  modalBody.innerHTML += `<p>${film.description}</p>`;
}

const cardEventListener = () => {
  const allCards = document.querySelectorAll('.card');
  allCards.forEach((card) => { card.addEventListener('click', showModal) })
}

const closeButtonListerner = () => {
  const closeButton = document.querySelector(".close-btn");
  closeButton.addEventListener('click', closeModal)
}

