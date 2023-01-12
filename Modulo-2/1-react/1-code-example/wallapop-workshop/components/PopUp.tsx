import Div from '../components-ui/Div';
import theme from '../src/theme';

const PopUp = (props) => {
  const { children, show } = props;

  return (
    <Div
      onClick={(e) => e.target === e.currentTarget && show(false)}
      position="fixed"
      top="0"
      zIndex="3"
      height="100vh"
      width="100%"
      backgroundColor={theme.popUpBackground}
    >
      <Div
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        display="flex"
        dir="column"
        padding="2rem"
        min-width="10rem"
        maxWidth="30rem"
        width="max-content"
        backgroundColor={theme.background}
        borderRadius="1rem"
      >
        <Div
          onClick={() => show(false)}
          position="absolute"
          top="0"
          right="0"
          width="2rem"
          height="2rem"
          objectFit="contain"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" name="cross_icon">
            <path d="M22.586 24l-7.293-7.293a1 1 0 011.414-1.414L24 22.586l7.293-7.293a1 1 0 011.414 1.414L25.414 24l7.293 7.293a1 1 0 01-1.414 1.414L24 25.414l-7.293 7.293a1 1 0 01-1.414-1.414L22.586 24z"></path>
          </svg>
        </Div>
        {children}
      </Div>
    </Div>
  );
};

export default PopUp;
