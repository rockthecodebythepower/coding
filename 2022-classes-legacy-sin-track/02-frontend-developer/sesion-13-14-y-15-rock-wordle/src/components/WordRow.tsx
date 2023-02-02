import { BoardCell, BoardLink } from '../ui/GameBoard';
import { getLetterColors } from '../utils/words';

type Props = {
  isActive: boolean;
  guess: string;
  word: string;
  previousGuess?: string;
  isValid: boolean;
};

const WordRow = ({ isValid, isActive, word, guess, previousGuess }: Props) => {
  const wordToShow = isActive ? guess : previousGuess;
  const colors = getLetterColors(word, wordToShow);

  return (
    <>
      {[0, 1, 2, 3, 4].map((cell) => (
        <BoardCell key={cell} isActive={isActive} backgroundColor={colors[cell]}>
          {wordToShow?.[cell] ?? ''}
        </BoardCell>
      ))}

      {isValid ? (
        <BoardLink target="_blank" rel="noopener" href={`https://dle.rae.es/${wordToShow}`}>
          Def. 📕
        </BoardLink>
      ) : (
        <BoardLink />
      )}
    </>
  );
};

export default WordRow;
