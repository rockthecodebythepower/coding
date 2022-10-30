import '../styles/hangman.css'

// List of words
const wordList = [
  'javascript',
  'react',
  'node',
  'css3',
  'html5',
  'vallecas',
  'rayo',
];
// Template elements
let word, incorrect, incorrectLettersEl, backdrop, finalMsg, msgInfo, playBtn, indication, bodyParts;
// Word that is selected to play
let selectedWord = null;
// Stores the count of no.of incorrectly typed letters
let incorrectCount = 0;
// Correct letters typed by the player
const correctLetters = [];
// Incorrect letters typed by the player
const incorrectLetters = [];

// Template de Hangman
const template = () => `
  <div class="container">
  <h1>Hangman Game</h1>
  <p>
    Try to find the hidden word by typing a letter each time of your choice.
  </p>
  <div class="game-box">
    <svg class="figure">
      <!-- Stand -->
      <line x1="25%" y1="5%" x2="65%" y2="5%" />
      <line x1="65%" y1="5%" x2="65%" y2="20%" />
      <line x1="25%" y1="5%" x2="25%" y2="95%" />
      <line x1="5%" y1="95%" x2="45%" y2="95%" />

      <!-- Head -->
      <circle r="10%" cx="65%" cy="30%" class="body-part" />

      <!-- Body -->
      <line x1="65%" y1="40%" x2="65%" y2="60%" class="body-part" />

      <!-- Arms -->
      <line x1="50%" y1="40%" x2="65%" y2="50%" class="body-part" />
      <line x1="80%" y1="40%" x2="65%" y2="50%" class="body-part" />

      <!-- Legs -->
      <line x1="65%" y1="60%" x2="80%" y2="70%" class="body-part" />
      <line x1="65%" y1="60%" x2="50%" y2="70%" class="body-part" />
    </svg>
    <div class="content">
      <ul id="word" class="word"></ul>
      <div id="incorrect" class="incorrect">
        <h2>Incorrect :</h2>
        <p></p>
      </div>
    </div>
    <div id="backdrop" class="backdrop"></div>
    <div id="no-work" class="no-work">
      <p>This app doesn't work in touch screen devices.</p>
    </div>
    <div id="final-msg" class="final-msg">
      <p id="msg-info" class="msg-info"></p>
      <button id="play" class="play">Play Again</button>
    </div>
    <div id="indication" class="indication">
      <p>You have already entered this letter</p>
    </div>
  </div>
  </div>
`

export const printTemplate = () => {
  // Template created
  document.querySelector('#app').innerHTML = template();
  // Recover elements
  recoverElements();
  // Start the game
  initializeWord();
  // Add Listeners
  addListeners();
}

// function recover elements template
const recoverElements = () => {
  word = document.getElementById('word');
  console.log(word)
  incorrect = document.getElementById('incorrect');
  incorrectLettersEl = document.querySelector('#incorrect p');
  backdrop = document.getElementById('backdrop');
  finalMsg = document.getElementById('final-msg');
  msgInfo = document.getElementById('msg-info');
  playBtn = document.getElementById('play');
  indication = document.getElementById('indication');
  bodyParts = document.getElementsByClassName('body-part');
}

// Select a word randomly from wordList and initialize in the DOM
const initializeWord = () => {
  selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
  const noOfLetters = selectedWord.length;
  for (let i = 0; i < noOfLetters; i++) {
    const listItem = document.createElement('li');
    listItem.classList.add('letter');
    word.append(listItem);
  }
  incorrectLettersEl.innerHTML = '';
}

// Displays an indication sliding from the bottom
const displayIndication = () => {
  indication.classList.add('visible');

  setTimeout(() => {
    indication.classList.remove('visible');
  }, 2400);
}

// Update the figure when incorrect letters typed
const updateFigure = () => {
  try {
    bodyParts[incorrectCount].style.display = 'block';
    incorrectCount++;
  } catch (error) { }
}

// When player wins
const successState = () => {
  setTimeout(() => {
    backdrop.classList.add('visible');
    finalMsg.classList.add('visible');
    msgInfo.textContent = 'Hurrah! You won.';
  }, 400);
}

// When player looses
const failureState = () => {
  setTimeout(() => {
    backdrop.classList.add('visible');
    finalMsg.classList.add('visible');
    msgInfo.textContent = `Oops! You lost. The right word is "${selectedWord}"`;
  }, 400);
}

// Check if typed key is part of the selected word and update in the DOM if required
const check = (ev) => {
  const letterElements = document.querySelectorAll('.word .letter');
  const character = ev.key;

  // Handle keyboard events
  if (
    !backdrop.classList.contains('visible') &&
    !indication.classList.contains('visible') &&
    ev.keyCode >= 65 &&
    ev.keyCode <= 90
  ) {
    if (selectedWord.includes(character)) {
      if (correctLetters.includes(character)) {
        displayIndication();
      } else {
        correctLetters.push(character);
        const indexes = [];
        [...selectedWord].forEach((value, index) => {
          if (value === character) {
            indexes.push(index);
          }
        });
        indexes.forEach((value) => {
          letterElements[value].textContent = character;
        });
      }
    } else {
      if (incorrectLetters.includes(character)) {
        displayIndication();
      } else {
        incorrectLetters.push(character);
        if (!incorrect.classList.contains('visible')) {
          incorrect.classList.add('visible');
        }
        incorrectLettersEl.textContent = `${incorrectLetters.join(', ')}`;
        updateFigure();
      }
    }
  }

  // Create a word from all letter items
  let formedWord = '';
  letterElements.forEach((value) => {
    formedWord += value.textContent;
  });

  // Check if created word is correct
  if (formedWord === selectedWord) {
    successState();
  }

  // Check if man was hung
  if (incorrectCount >= 6) {
    failureState();
  }
}

// Reset all variables and start a new game
const startNewGame = () => {
  selectedWord = null;
  incorrectCount = 0;
  correctLetters.splice(0);
  incorrectLetters.splice(0);
  word.innerHTML = '';
  Array.from(bodyParts).forEach((value) => {
    value.style.display = 'none';
  });
  incorrect.classList.remove('visible');
  backdrop.classList.remove('visible');
  finalMsg.classList.remove('visible');
  initializeWord();
}

const addListeners = () => {
  // Event Listeners
  window.addEventListener('keyup', check);
  playBtn.addEventListener('click', startNewGame);
}


