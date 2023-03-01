import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  flex-wrap: wrap;
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify || 'flex-start'};
  gap: ${(props) => props.gap}px;
`;

export default Grid;
