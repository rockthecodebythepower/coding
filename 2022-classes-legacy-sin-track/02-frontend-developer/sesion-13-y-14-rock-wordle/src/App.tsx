import { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import KeyboardRow from './components/KeyboardRow';
import WordRow from './components/WordRow';
import { Board } from './ui/GameBoard';
import { Keyboard } from './ui/Keyboard';
import { getRandomBetween } from './utils/numbers';

const words = ['plata', 'hielo', 'suelo', 'patio', 'radio', 'sanar', 'verde', 'yetis'];

function App() {
  const [word, setWord] = useState('');
  const [guess, setGuess] = useState('');
  const [activeRow, setActiveRow] = useState(0);
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
    if (guess.length === 5) {
      if (guess === word) {
        toast.success('Has ganado y acertado la palabra! 📑 Recarga para jugar de nuevo!', {
          position: 'bottom-center',
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      } else {
        previousGuesses.current.push(guess);
        // previousGuessesObject.current[activeRow] = guess // En este caso usamos el ref de ejemplo con objetos para guardar la "guess" indexada por "activeRow"
        setActiveRow(activeRow + 1);
        setGuess('');
      }
    }
  }, [guess]);

  // Comprobamos que el usuario ha completado todas las filas erroneamente y por tanto ha perdido la partida
  useEffect(() => {
    if (activeRow === 6) {
      toast.error('Has perdido la partida! Recarga para intentarlo de nuevo! 🦄', {
        position: 'bottom-center',
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
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
