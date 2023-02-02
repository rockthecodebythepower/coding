import styled from 'styled-components';

export const Keyboard = styled.section`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: fit-content;
  grid-column-gap: 4px;
  grid-row-gap: 4px;
  margin: 1rem 0;
  margin: 0 auto;
`;
