import './style.css'

export const printHtml = () => {
  document.querySelector('#app').innerHTML = `
  <h1 class="black">One</h1>
  <button id="reolad">Volver</button>
  `;
  addListerners();
}


const addListerners = () => {
  const reload = document.querySelector('#reolad')
  reload.addEventListener('click', () => window.location.reload())

}