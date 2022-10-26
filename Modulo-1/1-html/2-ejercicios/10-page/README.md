# Ejercicio 10 - Página HTML

Vamos a crear una página completa con HTML después de haber aprendido en esta parte del módulo.

## Pasos a seguir:

- Crea un `index.html` en el que añadiremos el código base para nuestro documento.
- Añade un `<head>` que contenga un `<title>` que añada a la página el título `Mi perfil en Rock{theCode}`.
- Ahora, navega a Google Fonts y copia los links de la fuente Poppins [aquí](https://fonts.google.com/specimen/Poppins?query=poppins). Te dejamos una imagen adjunta en esta carpeta para que puedas comprobar donde se encuentra dicho `link` (archivo 01-fonts.png).

---

<img src="../../../../README/01-fonts.PNG">

---

- Añade también a tu elemento `<body>` un estilo que añada la fuente **Poppins** a todos los elementos, usando lo siguiente: `<body style="font-family: 'Poppins', sans-serif">`. Así aplicaremos la fuente Poppins a toda nuestra página.
- Ahora crearemos un `h1` que contenga nuestro nombre.
- Crea una carpeta `assets` que contenga una imagen tuya y llámala `profile.png`, y añade dicha imagen debajo del `h1` con el siguiente CSS para crear un borde redondeado: `width="200" height="200" style="border-radius: 50%"`.
- Ahora añade un `h3` que diga `Full Stack Developer en Rock{theCode}`

Bien! Ya tenemos la parte superior de nuestra página. Ahora toca hacer varias `section` para añadir nuestra información.

- Crearemos una `section` que contena un `ul` con varios `li`. Cada uno contendrá un `a` con la propiedad `target="_blank"`. Estos links apuntarán a cada una de tus redes (LinkedIn, Instagram, Twitter...).

- Ahora crearemos una `section` que contenga un `h3` con el texto `Estudios`.
- En esta section crearemos una `table` que contenga 3 columnas en la cabecera: Título, Lugar y Año. Ahora añadiremos tantas rows como títulos tengamos con información para cada columna.

- Crearemos también una una `section` que contenga un `h3` con el texto `Experiencia`.
- Al igual que antes, añadiremos otra `table` con las 4 columnas de cabecera: Posición, Empresa, Desde, Hasta. Añadiremos tantas rows como títulos tengamos con información para cada columna.

- Por último, crearemos otra `section` que contenga un `h3` con el texto `Contactar`.
- Aquí crearemos un `form` con la propiedad `action="#` que tenga dos campos:
  - Un `input` de tipo `email` con la propiedad `required`, acompañado del `label` `Desde`.
  - Un `textarea` con la propiedad `required` y propiedades `cols="30" rows="10"`. Acompañado del `label` `Mensaje`.
  - Por último, un `button` de tipo `submit` que diga `Enviar`.

Si tienes todo listo, deberías tener algo similar a lo que te mostramos en la imagen `02-result.png` que acompaña a este `README.md`.

---

<img src="../../../../README/02-result.PNG">

---

## Ya tienes tu primera página HTML! 🧙‍♂️
