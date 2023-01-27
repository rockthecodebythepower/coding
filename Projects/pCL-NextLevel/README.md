# Proyecto Cum Laude: Next Level

## Enunciado de proyecto

Ya has terminado tu camino base para convertirte en Full Stack Developer, pero quieres avanzar más y llegar al siguiente nivel, ¿cierto? Pues con estos dos proyectos que harás a continuación consideraremos que has llegado al nivel Cum Laude en Rock{theCode}, conviertiéndote en un perfil Junior con un muy nivel espectacular 🚀

En estos proyectos no vamos a guiarte tanto como en los anteriores, tendrás que trabajar con el contenido que hay para los módulos restantes y hacer un trabajo de investigación por tu parte para llegar al siguiente nivel.

---

Para el proyecto **Next Level** vas a trabajar con una API que elijas bajo tu propio criterio (recomendamos usar la API del proyecto final del Módulo 3). Esta API debe tener disponible:

- Autenticación para ciertos endpoints.
- Al menos dos modelos de datos que puedas leer con GET sin necesidad de autenticación.
- Subida de imágenes.
- Endpoints de tipo POST, PUT y DELETE protegidos.

Una vez tengas la API seleccionada, te pediremos que utilices **Next** y **TypeScript** para crear una aplicación web que tenga **Server Side Rendering (preferiblemente ISR)** para cargar los datos de los modelos disponibles en dos rutas de vista diferentes. Por ejemplo, si tienes una API con un modelo de atletas olímpicos y otro de juegos olímpicos, tendrás **dos vistas en las siguientes URLs** disponibles en tu proyecto de Next:

- **/athletes** ⇒ mostrará el listado de atletas y para cada elemento atleta mostrará sus juegos olímpicos correspondientes donde ha participado.
- **/olympic-games** ⇒ mostrará un listado de juegos olímpicos y los atletas que han participado en cada uno de ellos..

Como puedes imaginar, estos elementos `pages` tendrán a su disposición una serie de `components` que habrás creado para construir tu proyecto. Será necesario que uses **Styled Components** para la maquetación, comprueba aquí como añadirlo a un proyecto de Next: [https://github.com/vercel/next.js/tree/canary/examples/with-styled-components](https://github.com/vercel/next.js/tree/canary/examples/with-styled-components) aquí te dejamos código de referencia.

Adicionalmente, tendrás una Home en `/` donde el usuario no autenticado verá un formulario de registro o de login según seleccione (controla los formularios con `react-hook-forms` y `useState` para cambiar de vistas). Esta vista no puede funcionar mediante SSR ya que necesitan haber cargado en cliente y hacer una petición a tu API para comprobar que estás autenticado..

No olvides que una vez te hayas logeado, debes guardar el token en `localStorage` para poderlo leer cuando recargues la página.

Por último, si el usuario está registrado, añade en la Home una vista que permita seleccionar elementos de los otros dos modelos anteriores (un listado sencillo sirve), y que una vez clickado uno de estos, lleve al usuario a una vista de edición donde podrá editarlos actuando sobre la API directamente.

Añade por último un botón de borrado en cada perfil de edición de elemento y un botón que permita ir a una vista de creación de un nuevo elemento. (Recuerda que cambiar de ruta en el front usando Next puede suponer no tener el token disponible, por lo que tendrás que jugar con **Context** o **States** para ello, lo dejamo en tus manos 🤯)

<aside>
💡 Con esto tendrás una aplicación muy completa, con vistas protegidas, un CRUD total sobre varios elementos, y creación de usuarios. Habrás aplicado SSR y CSR según la necesidad del negocio en cada vista, un claro ejemplo de maestría de la programación Full Stack.

</aside>

### Criterio de aceptación

En este caso tendrás que presentarnos el repositorio y el proyecto desplegado en Vercel. Los requerimientos a cumplir son los siguientes:

- [ ]  El proyecto cuenta con al menos tres rutas distintas:
    - [ ]  Una ruta `/` que presente una Home.
    - [ ]  Una ruta `/elementos-a` (tendrás que cambiarla por el nombre adecuado de la API que uses, si son Pokémon pues será `/pokemon`). Presentará un listado de estos elementos en formato Cartas y mostrará toda la información disponible que puedas obtener para cada uno de ellos. **Esta ruta utilizará SSR o incluso ISR**.
    - [ ]  Lo mismo que en el punto anterior para una ruta con respecto al **modelo B** de datos. **Esta ruta utilizará SSR o incluso ISR**
- [ ]  La ruta `/` estará protegida y por tanto no tendrá SSR. Esta ruta comprobará si el usuario está autenticado:
    - [ ]  Si el usuario no está autenticado, la ruta mostrará un **formulario de registro y uno de login** para iniciar sesión. Ambos deben funcionar.
    - [ ]  Si el usuario si está autenticado, la ruta mostrará un botón para **Crear Elemento del Modelo A**, otro botón para **Crear Elemento del Modelo B** que, en la misma vista, mostrarán un formulario de para cada uno y permitan hacer un POST a la API para guardarlos.
- [ ]  En las rutas de los dos modelos A y B, se comprobará en cliente (nunca en SSR) si el usuario está registrado.
    - [ ]  Si el usuario está **registrado**, podrá ver un botón Eliminar al lado de cada elemento que permitrá eliminarlo de la API y de la vista simultáneamente.
    - [ ]  Adicionalmente, habrá un botón Editar al lado de cada elemento que mostrará, sin cambiar de ruta, un formulario que contenga los datos del elementos y permita editarlo en la API y en la vista aparezca actualizado tras completar la edición.
- [ ]  El usuario contará con un botón flotante para hacer `logout` que eliminará su token de autenticación del cliente.
- [ ]  Habrá al menos 4 componentes de React testeados con **React Testing Library**.
- [ ]  Se habrán configurado Github actions para no permitir que una Pull Request se complete si no se pasan los tests. (Esto es opcional ya que la cuenta personal de Github no completa la comprobación).