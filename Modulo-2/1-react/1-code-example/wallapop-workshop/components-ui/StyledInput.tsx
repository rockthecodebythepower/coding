import styled, { css } from 'styled-components';

import { InputType } from '../src/SharedTypes';

const StyledInput = styled.input.attrs((props: InputType) => `type: ${props.type}`)`
  width: fit-content;
  flex: 1 1 auto;

  ${(props: InputType) => {
    const { color, backgroundColor, height, border, borderRadius, padding, justifySelf } =
      props;
    return css`
      color: ${color};
      background-color: ${backgroundColor};
      height: ${height};
      border: ${border};
      border-radius: ${borderRadius};
      padding: ${padding};
      justify-self: ${justifySelf};
    `;
  }}
`;

export default StyledInput;
