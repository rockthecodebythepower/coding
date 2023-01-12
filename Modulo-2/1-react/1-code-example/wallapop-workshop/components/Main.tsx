import { memo } from 'react';

import StyledMain from '../components-ui/StyledMain';

const Main = (props: { children: JSX.Element }) => {
  const { children } = props;

  return <StyledMain>{children}</StyledMain>;
};

export default memo(Main);
