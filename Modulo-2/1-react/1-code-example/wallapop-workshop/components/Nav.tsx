import { memo } from 'react';

import NavStyle from '../components-ui/StyledNav';

const Nav = ({ children }) => {
  return <NavStyle>{children}</NavStyle>;
};

export default memo(Nav);
