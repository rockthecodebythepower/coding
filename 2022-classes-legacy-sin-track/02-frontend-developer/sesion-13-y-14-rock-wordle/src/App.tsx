import { useEffect, useState } from 'react';
import KeyboardRow from './components/KeyboardRow';
import WordRow from './components/WordRow';
import { Board } from './ui/GameBoard';
import { Keyboard } from './ui/Keyboard';
import { getRandomBetween } from './utils/numbers';

const words = ['plata', 'hielo', 'suelo', 'patio', 'radio', 'sanar', 'verde', 'yetis'];

function App() {
  const [word, setWord] = useState('');
  const [activeRow, setActiveRow] = useState(0);

  useEffect(() => {
    const randomIndex = getRandomBetween(0, words.length - 1);
    const randomWord = words[randomIndex];
    setWord(randomWord);
  }, []);

  return (
    <main className="App">
      <h1>Rock the Wordle</h1>
      <Board id="board">
        <WordRow isActive={activeRow === 0} />
        <WordRow isActive={activeRow === 1} />
        <WordRow isActive={activeRow === 2} />
        <WordRow isActive={activeRow === 3} />
        <WordRow isActive={activeRow === 4} />
        <WordRow isActive={activeRow === 5} />
      </Board>

      <Keyboard id="keyboard">
        <KeyboardRow characters="abcdefghi" />
        <KeyboardRow characters="jklmnñopq" />
        <KeyboardRow characters="rstuvwxyz" />
      </Keyboard>
    </main>
  );
}

export default App;
