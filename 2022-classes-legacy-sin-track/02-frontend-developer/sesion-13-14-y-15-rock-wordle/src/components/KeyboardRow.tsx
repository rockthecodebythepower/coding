type Props = {
  characters: string;
  onClickLetter: (letter: string) => void;
};

const KeyboardRow = ({ characters, onClickLetter }: Props) => {
  return (
    <>
      {characters.split('').map((character) => (
        <button
          key={character}
          onClick={() => {
            onClickLetter(character);
          }}
        >
          {character}
        </button>
      ))}
    </>
  );
};

export default KeyboardRow;
