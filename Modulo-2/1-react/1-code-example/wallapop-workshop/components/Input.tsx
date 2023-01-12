import StyledInput from '../components-ui/StyledInput';
import { InputType } from '../src/SharedTypes';

const Input = (props: InputType) => {
  return <StyledInput {...props}></StyledInput>;
};

export default Input;
