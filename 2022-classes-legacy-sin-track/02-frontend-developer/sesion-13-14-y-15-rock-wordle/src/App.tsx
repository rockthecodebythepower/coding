import { useEffect, useRef, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import KeyboardRow from './components/KeyboardRow';
import WordRow from './components/WordRow';
import { Board } from './ui/GameBoard';
import { Keyboard } from './ui/Keyboard';
import { getRandomBetween } from './utils/numbers';
import { errorToast, successToast } from './utils/toast';

const words = ['plata', 'hielo', 'suelo', 'patio', 'radio', 'sanar', 'verde', 'yetis'];

function App() {
  const [word, setWord] = useState('');
  const [guess, setGuess] = useState('');
  const [activeRow, setActiveRow] = useState(0);
  const prevGuessesValidity = useRef<boolean[]>([]); // Podemos usar un state o un ref si prefiero
  const previousGuesses = useRef<string[]>([]); // Podemos usar un state o un ref si prefiero
  // const previousGuessesObject = useRef<Record<number, string>>({}) // En este caso tenemos un objeto como referencia (ejemplo adicional)

  // Al inicio de la partida, tomamos una palabra aleatoria y la usamos como "word" para adivinar
  useEffect(() => {
    const randomIndex = getRandomBetween(0, words.length - 1);
    const randomWord = words[randomIndex];
    setWord(randomWord);
  }, []);

  const addLetterToGuess = (letter: string) => {
    if (guess.length < 5) {
      setGuess(guess + letter);
    }
  };

  // Comprobamos, cuando el usuario tiene un guess de 5 letras, que ha acertado o fallado
  useEffect(() => {
    const checkGuess = async () => {
      if (guess.length === 5) {
        const url = `https://api-express-rae.vercel.app/api/search/${guess}`;
        const res = await fetch(url);
        const isValid = res.status === 200;

        if (isValid) {
          if (guess === word) {
            successToast('Has ganado y acertado la palabra! 📑 Recarga para jugar de nuevo!');
            setActiveRow(NaN);
          } else {
            setActiveRow(activeRow + 1);
          }

          // previousGuessesObject.current[activeRow] = guess // En este caso usamos el ref de ejemplo con objetos para guardar la "guess" indexada por "activeRow"
          previousGuesses.current.push(guess);
          prevGuessesValidity.current.push(true);
          setGuess('');
        } else {
          errorToast(`La palabra ${guess} no exite en la RAE!`);
          // Saltamos el turno y avanzamos a la siguiente linea al haber fallado, podríamos también
          // borrar solo "guess" y que el user lo intente de nuevo en esta misma linea
          previousGuesses.current.push(guess);
          prevGuessesValidity.current.push(false);
          setActiveRow(activeRow + 1);
          setGuess('');
        }
      }
    };

    checkGuess();
  }, [guess]);

  // Comprobamos que el usuario ha completado todas las filas erroneamente y por tanto ha perdido la partida
  useEffect(() => {
    if (activeRow === 6) {
      errorToast('Has perdido la partida! Recarga para intentarlo de nuevo! 🦄');
    }
  }, [activeRow]);

  return (
    <main className="App">
      <h1>Rock the Wordle</h1>
      <Board id="board">
        {[0, 1, 2, 3, 4, 5].map((row) => (
          <WordRow
            key={row}
            word={word}
            guess={guess}
            isActive={activeRow === row}
            previousGuess={previousGuesses.current[row]}
            isValid={prevGuessesValidity.current[row]}
          />
        ))}
      </Board>

      <Keyboard id="keyboard">
        <KeyboardRow onClickLetter={addLetterToGuess} characters="abcdefghi" />
        <KeyboardRow onClickLetter={addLetterToGuess} characters="jklmnñopq" />
        <KeyboardRow onClickLetter={addLetterToGuess} characters="rstuvwxyz" />
      </Keyboard>

      <ToastContainer />
    </main>
  );
}

export default App;
