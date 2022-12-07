import styled from "styled-components"

export const ButtonStyled = styled.button`
  background-color: ${props => props.background === 'coral' ? 'coral' : 'skyblue'};
  color: red;
  font-size: 20px;
  border: 0;
  padding: 10px 20px;
  cursor: pointer;
`