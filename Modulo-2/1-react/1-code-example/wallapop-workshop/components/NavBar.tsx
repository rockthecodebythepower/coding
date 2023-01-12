import { memo } from 'react';
import { NavLink } from 'react-router-dom';

import Image from '../components/Image';
import Div from '../components-ui/Div';
import theme from '../src/theme';
import Button from './Button';
import Input from './Input';

const NavBar = ({ show }) => {
  return (
    <>
      <NavLink to="">
        <Div
          media="@media (max-width: 450px) {
           width: 100px;
           object-fit: contain;
        }"
        >
          <Image
            src="https://es.wallapop.com/images/logos/logo-wallapop-home-v2.svg"
            alt="Wallapop navigation bar logo"
            width="100%"
          />
        </Div>
      </NavLink>
      <Div display="flex" align="center" flex="1 1 auto">
        <Input
          type="text"
          color={theme.primary}
          backgroundColor={theme.background}
          placeholder="Buscar en Todas las categorías"
          height="3rem"
          border={`1px solid ${theme.primary}`}
          borderRadius="1.5rem"
          padding="0 1.5rem 0 3rem"
        />
        <Div position="absolute" margin="0 0 0 0.5rem" height="2rem" width="2rem">
          <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.263 32.547a1.975 1.975 0 0 1 2.717 0l4.454 4.284a1.81 1.81 0 0 1 0 2.627 1.975 1.975 0 0 1-2.717 0l-4.454-4.283a1.81 1.81 0 0 1 0-2.628zm-.46-2.569c-4.988 4.797-13.072 4.797-18.06 0-4.99-4.8-4.99-12.581 0-17.38 4.988-4.797 13.072-4.797 18.06 0 4.99 4.799 4.99 12.58 0 17.38zm-2.297-2.21c3.722-3.578 3.722-9.382 0-12.961-3.72-3.577-9.747-3.577-13.466 0-3.722 3.579-3.722 9.383 0 12.962 3.72 3.576 9.747 3.576 13.466 0z"></path>
          </svg>
        </Div>
      </Div>
      <Div
        display="flex"
        gap="0.5rem"
        media="@media (max-width: 1000px) {
           display: none;
        }"
      >
        <Button onClick={() => show(true)} variant="regular">
          Regístrate o inicia sesión
        </Button>
        <Button variant="highlight">Subir producto</Button>
      </Div>
    </>
  );
};

export default memo(NavBar);
