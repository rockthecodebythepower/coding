import './style.css'

import { printTemplate } from './pages/Home'
import { printTemplate as hubTemplate } from './pages/Hub'
import { printTemplate as TicTacToeTemplate } from './pages/TicTacToe'
import { printTemplate as HangmanTemplate } from './pages/Hangman'
import { printTemplate as WhackaTemplate } from './pages/Whacka'


export const initContent = (navigation) => {
  console.log(navigation)
  switch (navigation) {
    case undefined:
      window.localStorage.getItem('user') ? hubTemplate() : printTemplate()
      break;

    case 'Hub':
      hubTemplate();
      break;

    case 'TicTacToe':
      TicTacToeTemplate();
      break;

    case 'MarsRover':
      // init Mars Rover
      break;

    case 'HangMan':
      HangmanTemplate();
      break;

    case 'MemoryGame':
      // init Memory Game
      break;

    case 'Whacka':
      WhackaTemplate();
      break;
    default:
      break;
  }
}

export const ColorMode = () => {

}

// Add Listener ColorMode
initContent();
