import styled from 'styled-components';

export const Board = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  width: min-content;
  grid-column-gap: 2px;
  grid-row-gap: 2px;
  margin: 1rem auto;
`;

export const BoardCell = styled.div<{ isActive: boolean; backgroundColor: string }>`
  border: 2px solid rgb(144, 202, 249);
  border-radius: 4px;
  width: 62px;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: ${(props) => (props.backgroundColor === 'green' && !props.isActive ? 'white' : 'black')};
  background-color: ${(props) => (props.isActive ? 'white' : props.backgroundColor)};
`;

export const BoardLink = styled.a`
  width: 62px;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
