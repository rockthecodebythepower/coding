import "../styles/whacka.css"

const template = () => `
  <h1>Whack-a-Hans Moleman!</h1><span class="score">0</span>
  <button id="startGame">Start!</button>
  <div class="game">
      <div class="hole hole1">
          <div class="mole"></div>
      </div>
      <div class="hole hole2">
          <div class="mole"></div>
      </div>
      <div class="hole hole3">
          <div class="mole"></div>
      </div>
      <div class="hole hole4">
          <div class="mole"></div>
      </div>
      <div class="hole hole5">
          <div class="mole"></div>
      </div>
      <div class="hole hole6">
          <div class="mole"></div>
      </div>
  </div>
`

export const printTemplate = () => {
  document.querySelector('#app').innerHTML = template();
  addListener()
}

let lastHole;
let timeUp = false;
let score = 0;

//create a function to make a random time for mole to pop from the hole
const randomTime = (min, max) => {
  return Math.round(Math.random() * (max - min) + min)
};

const randomHole = () => {
  const index = Math.floor(Math.random() * document.querySelectorAll('.hole').length);
  const hole = document.querySelectorAll('.hole')[index];

  //prevent same hole from getting the same number
  if (hole === lastHole) {
    return randomHole(document.querySelectorAll('.hole'));
  }
  lastHole = hole;
  return hole;
}

const peep = () => {
  const time = randomTime(500, 1000); //get a random time to determine how long mole should peep
  const hole = randomHole(document.querySelectorAll('.hole')); //get the random hole from the randomHole function
  hole.classList.add('up'); //add the CSS class so selected mole can "pop up"
  setTimeout(() => {
    hole.classList.remove('up'); //make the selected mole "pop down" after a random time
    if (!timeUp) {
      peep();
    }
  }, time);
}

const startGame = () => {
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => timeUp = true, 15000) //show random moles for 15 seconds
}

function wack(e) {
  if (!e.isTrusted) return; //** new thing I learned */
  score++;
  this.parentNode.classList.remove('up'); //this refers to item clicked
  document.querySelector('.score').textContent = score;
}

const addListener = () => {
  document.querySelectorAll('.mole').forEach(mole => mole.addEventListener('click', wack))
  document.querySelector('#startGame').addEventListener('click', startGame)
}
