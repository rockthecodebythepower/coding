import styled from 'styled-components';

import theme from '../src/theme';

const NavStyle = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${theme.background};
  z-index: 3;
  display: flex;
  flex: 0 1 4rem;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem;
  gap: 1rem;
`;

export default NavStyle;
