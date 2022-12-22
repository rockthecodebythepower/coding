# 05 - Estados en componentes

## Preparación del ejercicio

¡Igual que en el ejercicio `01-jsx-interpolacion.md`! Prepara tu proyecto de Vite con React y sigue el enunciado 🦄

## Enunciado

Toca aprender a usar estados en React. Un estado, como habrás podido aprender en los videos del máster, es una variable que tiene un valor que persiste entre cada render de un componente, es decir, si un componente de React fuese a "pintar" su contenido de nuevo y ejecutar otra vez todo el código que tiene dentro, el valor de esta variable no cambiará a menos que lo indiquemos nosotros.

> Ten en cuenta que cuando un estado cambia su valor, el componente que ha creado este estado y el árbol de componentes que contiene se renderizará de nuevo.

Vamos a empezar con un concepto al que llamamos `toggle`, que viene a ser algo que cambia entre apagado y encendido (un interruptor). Sigue el enunciado para crear tu primer toggle:

1. En tu archivo `App.jsx`, importa el hook `useState` tal y como hemos visto en el contenido del máster.
2. En la primera línea dentro de tu componente `App`, crea un nuevo state `[active, setActive]` que tendrá un boolean como valor inicial. Este boolean tendrá un valor `false`.
3. Ahora en el JSX que devuelve tu componente `App`, añade un botón con un prop `onClick` al que debes pasar una función que, cuando sea invocada, cambiará el state al boolean contrario que tiene ahora mismo. Por ejemplo, si `active` es `false` y clickamos el botón, invocaremos a `setActive(true)` para cambiar el valor de `active` a su contrario.
4. Para comprobar si el valor cambia correctamente, podrás hacer un `console.log(active)` antes de devolver el JSX de tu componente, y como cada vez que un state cambia se produce un rerender, tu componente ejecutará nuevamente ese log.
5. Por último, utiliza un ternario en el JSX de tu componente para que un elemento `p` cambie tu texto entre `"Encendido"` o `"Apagado"` si `active` es `true` o `false` respectivamente.

¡Si has hecho todo correctamente, deberías ver que cuando haces click en el botón, el texto cambia como si fuese un interruptor!

## Bonus

Te proponemos que conviertas esto en un interruptor de verdad usando CSS y un par de elementos más.

1. Crea una clase en el archivo `App.css` llamada `.on` que tenga un `background-color: yellow` y otra `.off` que tenga un `background-color: grey`.
2. Asegúrate de que el archivo CSS está importando en `App.jsx` para que el CSS aplique a tu código.
3. Ahora envuelve tu texto `p` en un `div` que tenga una propiedad `className` donde cambiarás tu valor entre `"on"` y `"off"` según `active` sea `true` o `false`. Deberías ver el color de fondo del elemento `div` cambiar entre amarillo y gris.
4. Dale ahora tu toque personal para que parezca una bombilla jugando con las propiedades `padding, border, border-radius...` y consigue un diseño adecuado.
