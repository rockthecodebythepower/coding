import { BoardCell } from '../ui/GameBoard';

type Props = {
  isActive: boolean;
};

const WordRow = ({ isActive }: Props) => {
  return (
    <>
      <BoardCell isActive={isActive}></BoardCell>
      <BoardCell isActive={isActive}></BoardCell>
      <BoardCell isActive={isActive}></BoardCell>
      <BoardCell isActive={isActive}></BoardCell>
      <BoardCell isActive={isActive}></BoardCell>
    </>
  );
};

export default WordRow;
