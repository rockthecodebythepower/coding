# 07 - Efectos - I

## Preparación del ejercicio

¡Igual que en el ejercicio `01-jsx-interpolacion.md`! Prepara tu proyecto de Vite con React y sigue el enunciado 🦄

## Enunciado

En este ejercicio vamos a ver el uso básico de useEffect con un contador, y de paso repasaremos el uso de useState.

> Por refrescar que son los efectos, como habrás visto en los videos del máster, son una función especial que seguirán el ciclo de vida de los componentes de React para invocarse en momentos puntuales, y podremos usarlas mediante el hook `useEffect`. Reciben un array de dependencias como segundo argumento que indicarán cuando se invocará la función que reciben como primer argumento, que será cada vez que una de las dependencias cambie su valor.

Vamos a hacer un ejercicio con `useEffect`:

1. Importa en `App.jsx` el hook `useEffect` y el hook `useState`.
2. En tu componente `App`, crea un estado llamado `counter` que almacene el valor del contador, con un valor inicial de 0.
3. Ahora añade el hook `useEffect`, como primer argumento pásale una función flecha vacía `() => {}` y como segundo argumento, como queremos que se lance la función cada vez que `counter` cambie su estado, añadimos un array que contenga el estado `counter`. Con este array, indicamos que el hook `useEffect` se lanzará cuando el componente se monte en el DOM (aparezca y se renderice) por pimera vez, y aparte, cada vez que cambie `counter` su estado.
4. Añade a la función del `useEffect` un `console.log` que muestre el valor actual de `counter`. 
5. Para terminar, renderiza un `p` que contenga el valor actual de `counter`, y un `button` que contenga la prop `onClick` con una función que sume 1 a `counter`.

> Prueba tu componente y asegúrate de que el mensaje se muestra en la consola cada vez que se pulse el botón. Este es un ejemplo básico de cómo utilizar useEffect para realizar una acción cada vez que cambia un valor en el estado de un componente de React.
