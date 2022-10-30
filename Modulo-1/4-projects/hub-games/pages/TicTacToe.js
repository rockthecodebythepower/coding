import '../styles/tictactoe.css'

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

/*
We store our game status element here to allow us to more easily 
use it later on 
*/
let statusDisplay;
let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

const template = () => `
  <section>
    <h1 class="game--title">Tic Tac Toe</h1>
    <div class="game--container">
    <div data-cell-index="0" class="cell"></div>
    <div data-cell-index="1" class="cell"></div>
    <div data-cell-index="2" class="cell"></div>
    <div data-cell-index="3" class="cell"></div>
    <div data-cell-index="4" class="cell"></div>
    <div data-cell-index="5" class="cell"></div>
    <div data-cell-index="6" class="cell"></div>
    <div data-cell-index="7" class="cell"></div>
    <div data-cell-index="8" class="cell"></div>
    </div>
    <h2 class="game--status"></h2>
    <button class="game--restart">Restart Game</button>
  </section>
`

export const printTemplate = () => {
  document.querySelector('#app').innerHTML = template();
  statusDisplay = document.querySelector('.game--status');
  statusDisplay.innerHTML = currentPlayerTurn();
  addListeners();
}


const handleCellPlayed = (clickedCell, clickedCellIndex) => {
  /*
  We update our internal game state to reflect the played move, 
  as well as update the user interface to reflect the played move
  */
  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.innerHTML = currentPlayer;
}

const handlePlayerChange = () => {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusDisplay.innerHTML = currentPlayerTurn();
}

const handleResultValidation = () => {
  let roundWon = false;
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i];
    let a = gameState[winCondition[0]];
    let b = gameState[winCondition[1]];
    let c = gameState[winCondition[2]];
    if (a === '' || b === '' || c === '') {
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
      break
    }
  }
  if (roundWon) {
    statusDisplay.innerHTML = winningMessage();
    gameActive = false;
    return;
  }
  /* 
  We will check weather there are any values in our game state array 
  that are still not populated with a player sign
  */
  let roundDraw = !gameState.includes("");
  if (roundDraw) {
    statusDisplay.innerHTML = drawMessage();
    gameActive = false;
    return;
  }
  /*
  If we get to here we know that the no one won the game yet, 
  and that there are still moves to be played, so we continue by changing the current player.
  */
  handlePlayerChange();
}

const handleCellClick = (clickedCellEvent) => {
  /*
  We will save the clicked html element in a variable for easier further use
  */
  const clickedCell = clickedCellEvent.target;
  /*
  Here we will grab the 'data-cell-index' attribute from the clicked cell to identify where that cell is in our grid. 
  Please note that the getAttribute will return a string value. Since we need an actual number we will parse it to an 
  integer(number)
  */
  const clickedCellIndex = parseInt(
    clickedCell.getAttribute('data-cell-index')
  );
  /* 
  Next up we need to check whether the call has already been played, 
  or if the game is paused. If either of those is true we will simply ignore the click.
  */
  if (gameState[clickedCellIndex] !== "" || !gameActive) {
    return;
  }
  /* 
  If everything if in order we will proceed with the game flow
  */
  handleCellPlayed(clickedCell, clickedCellIndex);
  handleResultValidation();
}

const handleRestartGame = () => {
  gameActive = true;
  currentPlayer = "X";
  gameState = ["", "", "", "", "", "", "", "", ""];
  statusDisplay.innerHTML = currentPlayerTurn();
  document.querySelectorAll('.cell')
    .forEach(cell => cell.innerHTML = "");
}

const addListeners = () => {
  document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
  document.querySelector('.game--restart').addEventListener('click', handleRestartGame);
}

