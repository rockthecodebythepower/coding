# 11 - Router - I

## Preparación del ejercicio

¡Igual que en el ejercicio `01-jsx-interpolacion.md`! Prepara tu proyecto de Vite con React y sigue el enunciado 🦄

## Enunciado

Instala el paquete react-router-dom ejecutando npm install react-router-dom.

Crea un nuevo componente llamado Home que muestre un mensaje que diga "Bienvenido a la página de inicio".

Crea un nuevo componente llamado About que muestre un mensaje que diga "Esta es la página acerca de".

En tu componente App, usa el componente BrowserRouter de react-router-dom para envolver tu aplicación.

Dentro de BrowserRouter, usa el componente Route para definir una ruta para el componente Home y el componente About. La ruta para el componente Home debería ser / y la ruta para el componente About debería ser /about.

En el componente App, crea una barra de navegación con dos enlaces: uno que enlace a la página de inicio y otro que enlace a la página acerca de. Usa el componente Link de react-router-dom para crear los enlaces.

## Aproximación inicial

```jsx
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// Componentes
const Home = () => <h1>Bienvenido a la página de inicio</h1>;
const About = () => <h1>Esta es la página acerca de</h1>;

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca de</Link>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
}

export default App;
```