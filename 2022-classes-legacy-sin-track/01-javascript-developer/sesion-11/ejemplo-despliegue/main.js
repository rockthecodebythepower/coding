import './style.css';

const pElement = `<p>Hola desde Rock{theCode}</p>`;

const appElement = document.querySelector('#app');
appElement.innerHTML += pElement;
