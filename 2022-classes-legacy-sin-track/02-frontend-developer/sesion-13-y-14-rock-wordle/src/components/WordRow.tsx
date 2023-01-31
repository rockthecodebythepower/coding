import { BoardCell } from '../ui/GameBoard';

type Props = {
  isActive: boolean;
  guess: string;
  word: string;
  previousGuess?: string;
};



const WordRow = ({ isActive, word, guess, previousGuess }: Props) => {
  const wordToShow = isActive ? guess : previousGuess;
  
  return (
    <>
      {[0, 1, 2, 3, 4].map((cell) => (
        <BoardCell
          key={cell}
          isActive={isActive}
          isGreen={word[cell] === previousGuess?.[cell]}
          isYellow={previousGuess ? word.includes(previousGuess?.[cell]) : false}
        >
          {wordToShow?.[cell] ?? ''}
        </BoardCell>
      ))}
    </>
  );
};

export default WordRow;
