# Proyecto 2: Tienda dinámica

## Enunciado de proyecto

¿Recuerdas el proyecto anterior dónde has creado una Landing Page para una “supuesta” tienda? Pues ha llegado el momento de mejorar este proyecto utilizando JavaScript en el DOM 🤘

Busca un web de productos donde inspirarte, al igual que en proyecto anterior, la web [PcComponentes](https://www.pccomponentes.com/portatiles) es un buen lugar para ello. Toma como referencia el listado de productos:

![Capture.PNG](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/59649ffa-04ec-4db4-8a17-cad226271439/Capture.png)

En este caso, para arrancar el proyecto puedes seguir los siguientes pasos:

- Crea tu carpeta de proyecto e inicializa un repositorio de Git en ella.
- Crea un archivo `index.html` y un archivo `index.css`.
- Carga el CSS en el HTML.
- Crea un archivo `main.js` que contendrá el JavaScript principal de tu proyecto utilizando JavaScript para el DOM.
- Introduce primero en tu archivo un objeto que simule todos los elementos de la tienda con un formato similar al siguiente. ***Los campos vendedor `seller` y precio `price` son obligatorios en cualquiera de los proyectos:***

```jsx
const products = [
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    stars: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image: 'https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
  },
  // Añade aquí al menos 9 productos más para tener un total de 10 productos
  // puedes cambiar los campos de cada objeto si es necesario para tu diseño...
];
```

- Como podrás observar, **tenemos un array de objetos** que recorreremos para pintar cada carta de elemento.
- Carga el archivo JS en tu HTML al final del `body` tal y como hacemos en los videos de JS DOM.
- Ya puedes empezar tu proyecto 🚀

Una vez tengas todo preparado, tendrás que hacer código de JavaScript que permita crear una página parecida pero con menor cantidad de objetos.

<aside>
💡 Ten en cuenta los criterios de aceptación ya que definirán los mínimos que debes cumplir en el proyecto una vez pases a añadir tu lógica de JavaScript.

</aside>

### Criterio de aceptación

Para verificar que tu proyecto cumple unos requisitos adecuados al conocimiento que debes haber conseguido, validaremos los siguientes puntos:

**Criterios JavaScript**

- [ ]  El HTML de la web se genera de forma dinámica mediante los `tag templates` que se habrá definido en JavaScript. Se permitirá tener de base dos secciones `.filter` y `.products` para introducir elementos dentro con JavaScript para el DOM.
- [ ]  Se recorrerá la lista de productos y se creará una carta de producto para cada elemento de forma dinámica por medio de `for` o de `.forEach`.
- [ ]  Se definirán al menos dos filtros para los productos en la parte izquierda del documento:
    - [ ]  El primer filtro será un elemento `[select](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)` que muestra todos los **vendedores** (`seller`) distintos que hay en los productos del proyecto; y que al ser clickado, hará que el documento solamente muestro los elementos que tengan la propiedad `seller` con el mismo valor. Para esto, se definirán al menos 4 seller distintos en los productos del objeto **products**.
    - [ ]  El segundo filtro será un `input` de tipo `number` acompañado de un botón que contenga el texto “Buscar”. El usuario podrá introducir una cantidad de dinero en el filtro y pulsar buscar, esto hará que solo aparezcan en pantalla los elementos cuyo **precio** (`price`) sea menor que esta cantidad.
    - [ ]  Habrá un botón “Limpiar Filtros” que al ser pulsado, volverá a pintar en pantalla todos los productos, sin aplicar filtro ninguno.

**Criterios HTML y CSS**

- [ ]  El código HTML está correctamente estructurado. Hay dos elementos `section` o `article` principales que representan los filtros de búsqueda (a la izquierda en escritorio, arriba del contenido en móvil), y los elementos a vender en la tienda (a la derecha en escritorio, abajo de los filtros en móvil).
- [ ]  Los elementos a vender en la tienda comparten la misma clase de CSS, que define una carta de producto y tiene algún efecto `:hover` cuando pasa el ratón sobre ellas.
- [ ]  La web cuenta con media queries para escritorio y móvil. Así como una correcta estructura y posicionamiento de elementos por medio de `flex` o `grid`.
- [ ]  Los productos tienen imágenes correctas que se ven en la carta de componente de cada uno