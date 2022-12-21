# 03 - Uso de props en listas

## Preparación del ejercicio

¡Igual que en el ejercicio `01-jsx-interpolacion.md`! Prepara tu proyecto de Vite con React y sigue el enunciado 🦄

## Enunciado

¡Seguimos con los props y aumentamos un poco la dificultad! En este ejercicio te pedimos que crees un componente `Food` que reciba dos props, uno llamado `name` con el nombre de un alimento o comida, y otro prop llamado `calories` con las calorias de dicho alimento.

> Supongamos que `name` es de tipo string y `calories` es de tipo `number`.

Este componente `Food` devolverá y renderizará un `div` que contenga un `h3` donde interpolaremos el prop `name` y un `p` donde mostraremos el texto => Tiene `props.calories` calorías.

Ahora, en tu componente `App` crea una constante que contenga una lista o array con el siguiente contenido:

```js
const foods = [
  { name: 'pizza', calories: 1400 },
  { name: 'hamburger', calories: 1000 },
  { name: 'fish and chips', calories: 600 },
  { name: 'salad', calories: 400 },
];
```

Y por último, recuerda que para recorrer una lista de cualquier tipo de contenido y crear un elemento en JSX para cada uno, tenemos que usar `.map` para devolver un JSX para cada cosa.

Con esto en mente, recorre el array `foods` en el return de tu componente `App` para devolver un componente `Food` para cada elemento, al cual le pasaremos los props `name` y `calories` que creamos anteriormente usando los valores de cada elemento recorrido en el array, siendo objetos con las propiedades `name` y `calories` también.

Si has hecho todo correctamente, deberías ver una lista de elementos donde cada uno es un nombre de comida seguido de sus calorias. ¡Con esto habrás aprendido a pasar props de forma dinámica, a través de una lista recorrida, a un componente para cada elemento! 🔥

## Bonus

Añade a cada elemento del array `foods` una descripción del plato con el nombre de la propiedad que quieras (¡`description` podría servir!), y pásalo también como `prop` al componente `Food` de cada elemento. Comprueba que se renderiza correctamente la descripción de cada elemento.
