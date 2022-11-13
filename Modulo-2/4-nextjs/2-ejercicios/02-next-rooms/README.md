# Next Rooms | Rock{theCode} Challenge

**Prerequisitos:**

- Usa la API que te proporcionamos con `JSON-server` y prepara tu proyecto para que la API corra en local cuando arrancamos Next.
- Crea un proyecto de **Next** con **TypeScript** usando `create-next-app`.
- Sube el proyecto a un repositorio de Github (privado o público, como prefieras) y prepárate para trabajar con un git flow adecuado.
- Configura tu proyecto para usar **Styled Components** y **variables de entorno** en caso de ser necesarias.

  **Instrucciones:**

- En la API que te proporcionamos, tenemos un listado de pisos con un precio, fecha de publicación, fotos\* y algunas características adicionales. Crea una página `Home` en la ruta `/` donde muestres una interfaz que enseñe los 5 pisos destacados que devuelve la API bajo el endpoint `featured`.
  - \*fotos: Tendrás disponible un array de strings sin una URL específica. Haz un mock de las fotos añadiendo un par a tu proyecto (de lo que quieras, preferiblemente casas) y mapea cada string a una URL. Por ejemplo: Si un piso tiene `image_1` como foto, mapéalo a tu carpeta `public/assets/photo.url`.
- Ahora crea un link que lleve al user a `/listing`, página donde tendremos un listado de todos los pisos disponibles en la API en formato tarjeta. Debe mostrar los datos básicos.
- Cuando un user haga click sobre cualquier tarjeta de piso tanto en `Home` como en `Listing` aparecerá un popup con la información completa y extendida del piso y nos permitirá ver todas las fotos disponibles.
- Los popups tendrán un botón `Alquilar` que al ser clickado llevará al user a una nueva ruta `/rent` en la que se habrá propagado la información del piso por parámetro de URL (`/rent?id=id_del_piso`) y nos permitirá mostrar el precio y dirección de éste.
- En esta última página mostraremos un pequeño formulario para preguntar nombre, apellidos, email y descripción del perfil. Cuando se haga `submit` en el formulario, se simulará un OK llevando al usuario a `Home` nuevamente.

**Pasos finales:**

- Asegúrate de que la página `Home` usa SSR o ISR, ya que debe tener buen SEO.
- Añade el component `Head` a tus páginas para tener title, description y los metadatos suficientes.
- Usa `react-hook-form` a tu formulario y controla los errores haciendo los campos requeridos.
- Dale un buen CSS a través de styled components.

**Bonus:**

- En la página `/listing` crea una paginación cada cinco pisos, haciendo que SSR o ISR solo cargue inicialmente los cinco primeros. Esta paginación puede ser por medio de botones o por carga infinita de datos a través de scroll, lo dejamos a tu elección. Pista: [https://github.com/typicode/json-server#paginate](https://github.com/typicode/json-server#paginate) usa la paginación in-house de JSON Server.
