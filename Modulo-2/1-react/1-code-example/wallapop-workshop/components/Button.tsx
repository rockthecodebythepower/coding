import ButtonUI from '../components-ui/ButtonUI';
import { ButtonType } from '../src/SharedTypes';

const Button = (props: ButtonType) => {
  const { children } = props;

  return <ButtonUI {...props}>{children}</ButtonUI>;
};

export default Button;
