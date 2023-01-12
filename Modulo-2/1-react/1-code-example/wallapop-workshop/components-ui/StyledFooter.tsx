import styled, { css } from 'styled-components';

interface FooterType {
  maxWidth?: string;
  justify?: string;
  alignSelf?: string;
}

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 1000px) {
    margin-bottom: 4rem;
  }

  ${(props: FooterType) => {
    const { maxWidth, justify, alignSelf } = props;

    return css`
      max-width: ${maxWidth};
      justify-content: ${justify};
      align-self: ${alignSelf};
    `;
  }}
`;

export default StyledFooter;
