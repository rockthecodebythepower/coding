import styled from 'styled-components';

const Image = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  ${(props) =>
    props.invert
      ? `
    filter: invert(1);
    transform: rotate(180deg);
  `
      : ''}
`;

export default Image;
