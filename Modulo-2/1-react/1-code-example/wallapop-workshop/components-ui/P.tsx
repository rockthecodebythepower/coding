import styled, { css } from 'styled-components';

import theme from '../src/theme';

interface PType {
  color?: string;
  width?: string;
  font?: string;
  size?: string;
}

const P = styled.p`
  color: ${theme.primary};

  ${(props: PType) => {
    const { color, width, size, font } = props;

    css`
      color: ${color};
      width: ${width};
      font-family: ${font};
      font-size: ${size};
    `;
  }}
`;

export default P;
