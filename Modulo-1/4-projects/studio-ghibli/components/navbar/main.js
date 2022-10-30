import { FILMS } from './constants/films';
import { STUDIOS } from './constants/studios';
import './style.css';

// Setup -> Preparación del Componente
const headerContent = document.querySelector('#header');

const getNavbarTemplate = () => `
    <nav>
      <a href="#">Home 🏠</a>
    </nav>
    <button id="burger-toggle">🍔</button>
    <div class="navbar-content">
      <div class="navigation-container"></div>
      <div class="search-block">
        <input class="search-input" type="text" placeholder="Search">
        <h3>Elementos Buscados:</h3>
        <ul class="search-result"></ul>
      </div>
    </div>
`;

headerContent.innerHTML += getNavbarTemplate();

// Code -> Logica del Componente
const navbarContent = document.querySelector('.navbar-content');
const burgerToggle = document.querySelector('#burger-toggle');
const navigationContainer = document.querySelector('.navigation-container');
const searchInput = document.querySelector('.search-input');
const searchResultsContainer = document.querySelector('.search-result');

const setupNavigationContent = () => {
  STUDIOS.forEach((studio) => {
    const studioTemplate = generateStudio(studio);
    navigationContainer.innerHTML += studioTemplate;
  })
}

const generateStudio = (studio) => `
  <div class="studio-links">
    <a href="${studio.url}">${studio.name} - tipo: ${studio.type}</a>
  </div>
`;


const handleToggleNavbar = () => {
  console.log("Click Burger")
  navbarContent.classList.toggle('navbar-content--visible');
}

const addBurgerEventLister = () => {
  burgerToggle.addEventListener('click', handleToggleNavbar);
}

const getTemplateSearch = (name, url, cover) => `
  <li>${name}</li>
`;

const setupSearchResult = (searchFilms) => {
  searchResultsContainer.innerHTML = '';

  for (let film of searchFilms) {
    const { name, url, cover } = film;
    searchResultsContainer.innerHTML += getTemplateSearch(name, url, cover);
  }
}

const handleSearch = (event) => {
  const { value } = event.target;
  const normalizeValue = value.toLowerCase().trim();
  console.log(FILMS);
  const filteredFilms = FILMS.filter((film) => film.name.toLowerCase().includes(normalizeValue));
  setupSearchResult(filteredFilms);

}

const addSearchEventLister = () => {
  searchInput.addEventListener('input', handleSearch);
}

addBurgerEventLister();
setupNavigationContent();
addSearchEventLister();