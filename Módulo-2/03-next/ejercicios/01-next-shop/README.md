# Rock{theCode} | Next Shop

**Prerequisitos:**

- Usa la API que te proporcionamos con `JSON-server` y despliega tu propia versión en [render.com](http://render.com). (Por ejemplo [https://next-project-shop-api.onrender.com/](https://next-project-shop-api.onrender.com/))
- Crea un proyecto de **Next** con **TypeScript** usando `create-next-app`.
- Sube el proyecto a un repositorio de Github (privado o público, como prefieras) y prepárate para trabajar con un git flow adecuado.
- Configura tu proyecto para usar **Styled Components** y **variables de entorno**.

  **Instrucciones:**

- Crea con Next, una primera página Home que muestre un listado de los productos que la API proporcione. Haz que la página sea estática y se revalide cada 30 segundos.
- Haz una carta para cada producto en un grid adecuado a cada tipo de pantalla, esta carta debe tener un link de visita para la página de producto.
- La página de producto debe estar bajo la url `/shop/:productId` y mostrar la información del producto. Esta página debe ser generada estáticamente y revalidada cada 30 segundos.
- Adicionalmente, si la página no existe, debemos mostrar una **página 404**. Decide cómo prefieres hacerlo.
- Añade a cada página de producto un botón **EDITAR** que al ser pulsado lleve al usuario a una página de edición.
- Crea ahora una página `/edit/:productId` donde podrás editar un elemento y enviar su información al servidor con una request de tipo **PATCH**. Tras editar de forma existosa, redirije al usuario a la página de producto.

**Pasos finales:**

- Despliega tu aplicación en **Vercel** y haz que use el backend desplegado.
- Comprueba que las páginas estáticas se regeneran correctamente.

**Bonus:**

- Añade la posibilidad de tener imágenes en los productos y muéstralas. Debe soportar edición.
