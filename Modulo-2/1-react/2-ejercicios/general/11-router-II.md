# 11 - Router - II

## Preparación del ejercicio

¡Igual que en el ejercicio `01-jsx-interpolacion.md`! Prepara tu proyecto de Vite con React y sigue el enunciado 🦄

## Enunciado

Instala el paquete react-router-dom ejecutando npm install react-router-dom.

Crea un nuevo componente llamado Login que muestre un formulario con campos para el nombre de usuario y la contraseña. Cuando se envíe el formulario, debe establecer una bandera en el almacenamiento local indicando que el usuario está autenticado.

Crea un nuevo componente llamado Private que muestre un mensaje que diga "Esta es una página privada". Este componente solo debe ser accesible para los usuarios autenticados.

En tu componente App, usa el componente BrowserRouter de react-router-dom para envolver tu aplicación.

Dentro de BrowserRouter, usa el componente Route para definir una ruta para el componente Login y el componente Private. La ruta para el componente Login debería ser /login y la ruta para el componente Private debería ser /private.

En el componente Private, comprueba el valor de la bandera en el almacenamiento local para determinar si el usuario está autenticado. Si el usuario no está autenticado, redirígelo a la página /login.

## Aproximación inicial

```jsx
import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

// Components
const Login = () => {
  // Set flag in local storage when form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('isAuthenticated', true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <br />
      <button type="submit">Log in</button>
    </form>
  );
};

const Private = () => {
  // Check if user is authenticated
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  if (isAuthenticated) {
    return <h1>This is a private page</h1>;
  } else {
    return <Redirect to="/login" />;
  }
};

function App() {
  return (
    <BrowserRouter>
      <Route path="/login" component={Login} />
      <Route path="/private" component={Private} />
    </BrowserRouter>
  );
}

export default App;


```