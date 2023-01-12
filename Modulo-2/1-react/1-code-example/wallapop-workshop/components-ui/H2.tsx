import styled from 'styled-components';
import { css } from 'styled-components';

import { HeadingType } from '../src/SharedTypes';

const H2 = styled.h2`
  font-size: 1.25rem;

  ${(props: HeadingType) => {
    const { color, font } = props;

    return css`
      color: ${color};
      font-family: ${font};
    `;
  }}
`;

export default H2;
