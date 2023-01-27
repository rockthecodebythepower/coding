# Proyecto 1: Página web Responsive

## Enunciado de proyecto

En este proyecto crearás una landing page **maquetada y responsive** para una “supuesta tienda” de la que serás dueñ@. 

Para esto, navega a cualquier web de una tienda ya existente (o si prefieres, inventa tu propia tienda), y copia su página de inicio con HTML y CSS. Por ejemplo, accede a la web de [PcComponentes](https://www.pccomponentes.com/) y guarda una captura completa del diseño de su página de inicio como referencia para la entrega.

Consideraremos el proyecto completo cuando hayas maquetado al completo la landing page correspondiente. ¡Te pediremos unos mínimos a entregar, por lo que intenta que la web tenga algunas secciones y no sea algo sencillo o parecido a **[Google](https://www.google.es/)**!

Como indicaciones para comenzar:

- Crea tu carpeta de proyecto e inicializa un repositorio de Git en ella.
- Crea un archivo `index.html` y un archivo `index.css`.
- Carga el CSS en el HTML y haz tu primer commit.
- Sube todo a la rama `main` de un nuevo repositorio de Github.
- Ya puedes empezar tu proyecto 🚀

Crea elementos HTML para hacer el esqueleto de tu web y añade poco a poco los estilos de CSS. ¡Intenta crear clases reutilizables y no olvides que la web debe verse bien en móvil y escritorio!

### Criterio de aceptación

Para verificar que tu proyecto cumple unos requisitos adecuados al conocimiento que debes haber conseguido, validaremos los siguientes puntos:

**Criterios HTML**

- [ ]  Has creado una estructura HTML semántica donde priman los `section` y `article` frente a los `div` siempre y cuando sea correcto su uso. Estará el contenido envuelto en un `main`.
- [ ]  La web cuenta con al menos un elemento `header` o un elemento `footer` para contenido de navegación o adicional.
- [ ]  Hay al menos un elemento de tipo `ul` o de tipo `ol` con varios productos enumerados.
- [ ]  La web tendrá imágenes para al menos 10 productos, puedes copiar su URL de la web original haciendo `click derecho > abrir imagen en nueva pestaña > copia la URL de la imagen` o con el inspector del navegador.
- [ ]  La web contendrá links `a` que apunten a los productos originales, recuerda usar `rel="noopener"` para añadir links a webs externas.

**Criterios CSS**

- [ ]  Se han aplicado estilos globales para añadir `box-sizing: border-box;` y eliminar el padding y margin del `body`.
- [ ]  El posicionamiento de los elementos se ha realizado por medio de `flex`. En su defecto, se habrá podido usar `grid` para esto.
- [ ]  La web cuenta con `media queries` para hacerla responsive, de forma que se ve el contenido correctamente en móvil `menor de 375px` y en “escritorio” `mayor que mobile`.
    - [ ]  Punto adicional si haces la web adecuada para tablet, entre los rangos de `375px y 768px`.
- [ ]  Existen **variables de CSS** para los colores y tamaños más utilizados.
- [ ]  Se ha configurado el texto para definir estilos generales para los `h1, h2, h3, p, span`.
    - [ ]  Punto adicional si ha cargado fuentes de [Google Fonts](https://fonts.google.com/).