type Props = {
  characters: string;
};

const KeyboardRow = ({ characters }: Props) => {
  return (
    <>
      {characters.split('').map((character) => (
        <button key={character}>{character}</button>
      ))}
    </>
  );
};

export default KeyboardRow;
