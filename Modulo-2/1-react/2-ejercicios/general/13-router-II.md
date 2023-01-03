# 13 - Router - II

## Preparación del ejercicio

¡Igual que en el ejercicio `01-jsx-interpolacion.md`! Prepara tu proyecto de Vite con React y sigue el enunciado 🦄

## Enunciado

Instala el paquete `react-router-dom` ejecutando `npm install react-router-dom`.

Crea un nuevo componente llamado `Login` que muestre un **formulario con campos para el nombre de usuario y la contraseña**. Cuando se envíe el formulario (ocurra un submit), debes utilizar la función `onSubmit` para pasar una función que compruebe el nombre de usuario y contraseña, y en caso de que el usuario tenga como valor `student` y la contraseña `1234abc`, guardarás en **LocalStorage** un valor `authenticated` con valor `true`:

```js
// Para guardar un valor en LocalStorage, usa algo similar a:
localStorage.setItem('nombre_del_valor', 'valor');
```

> Recuerda que en LocalStorage se guarda todo en valor string, así que cuando nos toque leer el valor habrá que comprobar que es un string con el valor `"true"`.

Crea ahora un nuevo componente llamado `Private` que muestre un mensaje en un `h2` que diga "Esta es una página privada". **Este componente solo debe ser accesible para los usuarios autenticados.**

Envuelve tu aplicación como hiciste en el ejercicio anterior usando React Router DOM para tener disponible el Router, y añade dos rutas:

- Crea un `Route` para la ruta `/login` que contenga el componente `Login` que has creado para autenticación.
- Crea un `Route` para la ruta `/private` que contenga el componente `Private`.

Añade ahora lógica en el componente `Private` para recoger el valor `authenticated` de `LocalStorage` y comprobar que sea `"true"`. Usando esta comprobación, haz que el componente `Private` devuelva el JSX que habíamos creado si esta comprobación es `true`, o devuelve un componente `Navigate` que saque al usuario de `/private` y lo mande a `/login` si la comprobación es `false`.

```jsx
// Para comprobar si el usuario se ha autenticado:
const isAuthenticated =
  localStorage.getItem('authenticated') === 'true';

// En caso de que isAuthenticated sea false, el componente Private devolverá:
return <Navigate to="/login" />;
```

> Con esto habrás creado tu primer ejercicio donde comprobarás que el usuario se ha autenticado correctamente 🚀 y tendrás una página privada solo para usuarios que se han autenticado.

## Bonus

Investiga como eliminar valores de `LocalStorage` usando `JavaScript` y crea un botón en el componente `Private` que permita al usuario hacer `Logout`.

Recuerda que cambiar un valor de `LocalStorage` no producirá un rerender, por lo que es posible que tengas que usar un estado como apoyo para almacenar si el usuario está o no autenticado, y que el `Navigate` que tenemos creado funcione correctamente!
