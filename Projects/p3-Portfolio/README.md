# Proyecto 3: Portfolio

## Enunciado de proyecto

Ha llegado el momento de hacer tu **proyecto final del Módulo 1: JavaScript Developer**. Si lo completas con éxito podrás obtener la primera certificación de Rock{theCode} 🚀

En este proyecto te vamos a pedir que apliques todo lo aprendido hasta ahora, incluyendo el uso de Vite como herramienta de desarrollo. Vas a crear tu propio portfolio, y simularás la navegación en una SPA (SIngle Page Application), es decir, simularás que puedes cambiar la ruta de proyecto para mostrar diferente contenido según el usuario haga click en un link de navegación.

> Para comenzar este proyecto, crea un proyecto de Vite con JavaScript tal y como se ha hecho en las clases en directo y en los videos del contenido de Rock{theCode}.
> 

En este proyecto comenzarás creando una barra de navegación donde prefieras (arriba o a la izquierda de la pantalla), donde tendrás al menos **tres links `a` diferentes**. A estos links les añadirás un evento mediante JavaScript de forma que cuando ocurra el evento `click` se lance esta función:

```jsx
// Lee los comentarios de este código para entender lo que hace 🔴
document.querySelector('...').addEventListener('click', (ev) => {
	ev.preventDefault(); // Esto hace que el link no cargue la URL a la que apunta
  const linkHref = ev.target.href; // Almacenamos la URL en una constante
  console.log('El link apunta a:', linkHref ); // La mostramos en consola
  
  // Añade aquí tu lógica! 🔽 
})
```

Tendrás este evento añadido a los elementos de tipo `a` los cuales tendrán tres propiedades HREF distintas, tres textos distintos, e invocarán al final de su evento a una función distinta para cada vista de la aplicación:

| Texto contenido | Valor de href | Pinta la página |
| --- | --- | --- |
| Página principal | /home | renderHome() |
| Experiencia | /experience | renderExperience() |
| Proyectos | /projects | renderProjects() |

Estas funciones `render...()` que hemos definido inyectarán en el DOM las vistas que te pediremos en los criterios de aceptación, de forma que tengas una página **totalmente dinámica.**.

### Criterio de aceptación

Para verificar que tu proyecto cumple unos requisitos adecuados al conocimiento que debes haber conseguido, validaremos los siguientes puntos:

**Criterios JavaScript**

- [ ]  Cuando cargo la página por primera vez, se inyecta el contenido HTML que me permite ver los datos de la persona dueña del porfolio (su imagen, nombre, puesto de trabajo, descripción, link a Github, link a LinkedIn…).
- [ ]  Cuando hago click en el Link con el texto `Proyectos`, en el DOM aparece un nuevo contenido que muestra una gran lista de proyectos acompañados de imágenes en los que la persona ha trabajado (pueden ser totalmente inventados por ahora). Tendrá al menos cinco proyectos en los que podré hacer click para visitar la página web del proyecto.
- [ ]  Cuando hago click en el Link con el texto `Experiencia`, en el DOM aparece un nuevo contenido que muestra un listado de empresas en las que la persona ha trabajado que contendrán título, logo de la empresa, fechas, descripción y un listado de responsabilidades (puede ser totalmente inventado). Tendrá al menos experiencia en cinco empresas distintas y podré ir a su web cuando haga click en los elementos.
- [ ]  Cuando hago click en el Link con el texto `Página principal`, en el DOM aparece el contenido inicial que podía ver al cargar la página por primera vez, con la información de la persona y sus datos.

**Criterios HTML y CSS**

- [ ]  La página es **completamente responsive** y se ve correctamente en móvil y escritorio.
- [ ]  Se ha diseñado con una buena gama de colores y es vistosa, ha tomado inspiración de algunos portfolios que ha podido encontrar online como el siguiente: [https://www.diegoliv.work](https://www.diegoliv.work/) (sin contar las animaciones en el cambio de página, aplicará el comportamiento exigido en los criterios de JavaScript en su lugar)

**Criterios Generales**

- [ ]  La web se ha publicado en Netlify siguiendo los pasos explicados en clase y demostrado en los videos de referencia para depsliegue con Vite y Netlify.