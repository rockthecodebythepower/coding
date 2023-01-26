import styled from 'styled-components';

export const BUTTON_DEFAULT_COLOR = '#5b5bc0';
export const BUTTON_SUCCESS = '#3e853e';
export const BUTTON_ERROR = '#9b2d2d';
export const BUTTON_INFO = '#4679c4';

const Button = styled.button`
  text-transform: uppercase;
  color: white;
  background-color: ${(props) => props.backgroundColor || BUTTON_DEFAULT_COLOR};
  border-radius: 4px;
  border: 1px solid black;
  padding: 8px;
  cursor: pointer;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }
`;



export default Button;
