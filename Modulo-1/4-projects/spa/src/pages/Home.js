export const template = () => `
  <h1>Home 🏠</h1>
  <button id="buttonHello">PortFolio!</button>
`

export const listener = () => {
  document.querySelector("#buttonHello").addEventListener("click", sayHello);
}

const sayHello = () => {
  document.querySelector('#portfolio').click();
}

