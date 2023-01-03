# 12 - Router - I

## Preparación del ejercicio

¡Igual que en el ejercicio `01-jsx-interpolacion.md`! Prepara tu proyecto de Vite con React y sigue el enunciado 🦄

## Enunciado

Instala el paquete `react-router-dom` ejecutando `npm install react-router-dom`.

Crea un nuevo componente llamado `Home` que muestre un mensaje que diga "Bienvenido a la página de inicio".

Crea un nuevo componente llamado `About` que muestre un mensaje que diga "Esta es la página acerca de".

En tu arhivo `main.jsx`, envuelve el componente `<App />` con el componente `BrowserRouter` de `react-router-dom` para que en tu aplicación se inyecte el código de React Router y tenga todas las funcionalidades disponibles a partir de `App`.

## Ejemplo aproximado:

```jsx
<React.StrictMode>
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>
</React.StrictMode>
```

Ahora en tu componente `App`, **usa el componente `Routes` para envolver todas las rutas, y el componente `Route` para definir cada una de ellas.** Para el componente `Home` y el componente `About`. La ruta para el componente `Home` debería ser `"/"` y la ruta para el componente `About` debería ser `"/about"`.

Adicionalente, para navegar con links, añade en el componente `App` una barra de navegación `nav` que esté fuera de `Routes`, es decir, esté al mismo nivel en el árbol de componentes. Esta barra de navegación debe contener dos enlaces: uno que enlace a la página de inicio `Home` y otro que enlace a la página `About`. **Usa el componente `Link` de `react-router-dom` para crear los enlaces.**

## Aproximación inicial

```jsx
import { Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        {/* Completa los props del componente Link para cada caso! */}
        <Link></Link>
      </nav>

      <Routes>
        {/* Completa los props del componente Route para cada caso! */}
        <Route />
      </Routes>
    </div>
  );
}

export default App;
```
