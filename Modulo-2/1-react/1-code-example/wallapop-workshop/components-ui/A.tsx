import styled, { css } from 'styled-components';

import theme from '../src/theme';

interface AType {
  color?: string;
  hoverColor?: string;
  font?: string;
  borderBottom?: string;
  size?: size;
}

const A = styled.a`
  all: unset;

  ${({ color, hoverColor, font, borderBottom, size }: AType) =>
    css`
      color: ${color};
      font-family: ${font};
      border-bottom: ${borderBottom};
      font-size: ${size};

      &:hover {
        cursor: pointer;
        color: ${hoverColor || theme.highlight};
      }
    `}
`;

export default A;
