import { initContent } from '../main';

const template = () => `
  <form>
    <fieldset>
      <label for="name">
        <input type="text" name="name" id="name">
      </label>
    </fieldset>
    <button type="button" id="Submit">Enter</button>
  </form>
`

const eventListener = () => {
  document.querySelector('#Submit').addEventListener('click', saveName);
}

const saveName = () => {
  window.localStorage.setItem('user', document.querySelector('#name').value);
  initContent('Hub');
}

export const printTemplate = () => {
  document.querySelector('#app').innerHTML = template();
  eventListener();
}