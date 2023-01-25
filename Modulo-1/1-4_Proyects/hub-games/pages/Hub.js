import { initContent } from '../main'

export const printTemplate = () => {
  document.querySelector('#app').innerHTML = template();
  listener();
}

const template = () => `
  <div class="hub-container">
    <div class="hub-content tic-content">
      <button id="Tic">Tic Tac Toe</button>
    </div>
    <div class="hub-content whacka-content">
      <button id="Whacka">Whacka</button>
    </div>
    <div class="hub-content hangman-content">
      <button id="Hangman">Hangman</button>
    </div>
  </div>
`;

const listener = () => {
  document.querySelector('#Rover').addEventListener('click', () => initContent('MarsRover'))
  document.querySelector('#Tic').addEventListener('click', () => initContent('TicTacToe'))
  document.querySelector('#Memory').addEventListener('click', () => initContent('MemoryGame'))
  document.querySelector('#Whacka').addEventListener('click', () => initContent('Whacka'))
  document.querySelector('#Hangman').addEventListener('click', () => initContent('HangMan'))
}