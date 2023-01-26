import { useState } from 'react';
import styled from 'styled-components';
import Button, { BUTTON_ERROR, BUTTON_SUCCESS } from './ui/Button';
import Grid from './ui/Grid';
import Image from './ui/Image';
import MainTitle from './ui/MainTitle';

const GridChild = styled.div`
  border: 1px solid white;
  padding: 8px;
  flex-basis: 25%;
`;

const App = () => {
  const [invert, setInvert] = useState(false);

  return (
    <div className="App">
      <MainTitle>Aprendiendo Styled Components</MainTitle>

      <Grid justify="flex-end" gap={8}>
        {['dani', 'yeti', 'alberto', 'ruben', 'juan', 'gonzalo', 'manu'].map((name) => {
          return (
            <GridChild key={name}>
              <h3>{name}</h3>
            </GridChild>
          );
        })}
      </Grid>

      <Button
        onClick={() => {
          alert('CLickado!');
        }}
      >
        Sumar
      </Button>

      <div>
        <h3>Aceptas los cambios?</h3>

        <Button backgroundColor={BUTTON_SUCCESS}>Aceptar</Button>
        <Button backgroundColor={BUTTON_ERROR}>Rechazar</Button>
      </div>

      <h2>Invertimos los colores de una imagen</h2>
      <Grid direction="column" align="center" gap={8}>
        <Button
          onClick={() => {
            setInvert(!invert);
          }}
        >
          <span>Invertir imagen 🔄</span>
        </Button>

        <Image src="/pug.PNG" alt="pug" width="500px" height="auto" invert={invert} />
      </Grid>
    </div>
  );
};

export default App;
