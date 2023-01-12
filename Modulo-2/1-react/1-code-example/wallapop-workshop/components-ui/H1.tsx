import styled from 'styled-components';
import { css } from 'styled-components';

import { HeadingType } from '../src/SharedTypes';

const H1 = styled.h1`
  font-size: 2rem;
  font-family: 'Gentleman-Bold';

  ${(props: HeadingType) => {
    const { color } = props;

    return css`
      color: ${color};
    `;
  }};
`;

export default H1;
