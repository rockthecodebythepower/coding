import styled from 'styled-components';

export const Board = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  width: fit-content;
  grid-column-gap: 4px;
  grid-row-gap: 4px;
  margin: 1rem auto;
`;

export const BoardCell = styled.div<{ isActive: boolean }>`
  border: 2px solid rgb(144, 202, 249);
  border-radius: 4px;
  width: 62px;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.isActive ? 'white' : 'lightgray')};
`;
