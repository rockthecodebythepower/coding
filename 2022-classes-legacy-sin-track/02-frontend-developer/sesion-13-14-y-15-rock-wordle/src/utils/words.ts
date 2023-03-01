export const getLetterColors = (word: string, guess = '') => {
  let splitWord = word.split('');
  let splitGuess = guess.split('');
  let colors = ['', '', '', '', ''];

  // Sacamos los colores verdes
  splitGuess.forEach((letter, index) => {
    if (letter === splitWord[index]) {
      splitWord[index] = '';
      splitGuess[index] = '';
      colors[index] = 'green';
    }
  });

  // Sacamos los colores amarillos
  splitGuess.forEach((letter, index) => {
    if (letter && splitWord.includes(letter)) {
      const indexOfLetter = splitWord.indexOf(letter);

      splitWord[indexOfLetter] = '';
      splitGuess[index] = '';
      colors[index] = 'yellow';
    }
  });

  // Añadimos grises donde no hay color
  const acolors = colors.map((letter) => (!letter.length ? 'gray' : letter));

  return acolors;
};
