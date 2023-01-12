import styled, { css } from 'styled-components';

import theme from '../src/theme';

const ButtonVariants = {
  regular: css`
    color: ${theme.highlight};
    background-color: ${theme.background};
    border: 1px solid ${theme.highlight};
  `,
  highlight: css`
    color: ${theme.background};
    background-color: ${theme.highlight};
    border: 1px solid ${theme.highlight};
    font-family: 'Gentleman-Bold';
  `,
  login: css`
    width: 100%;
    color: ${theme.primary};
    background-color: ${theme.background};
    font-family: 'Gentleman-Bold';
  `,
  loginHighlight: css`
    width: 100%;
    color: ${theme.primary};
    background-color: ${theme.highlight};
    border: 1px solid ${theme.highlight};
    font-family: 'Gentleman-Bold';
  `,
};

const ButtonUI = styled.button`
  width: fit-content;
  height: 3rem;
  border-radius: 1.5rem;
  padding: 0 1.5rem;

  ${(props) => ButtonVariants[props.variant]}
`;

export default ButtonUI;
