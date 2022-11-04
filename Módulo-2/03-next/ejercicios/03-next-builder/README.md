# Rock{theCode} | Next builder

Next.js es una tecnología maravillosa para construir páginas web estáticas con un dinamismo sin igual gracias a React. Hasta ahora hemos usado este framework para construir HTML con una forma dada a través de componentes, es decir, con un conjunto de nodos preestablecidos.

Algo que potencia una gran cantidad de webs hoy en día es el uso de los CMS (Content Management Systems). Vamos a simular uno usando un archivo JSON para ello.

**Prerequisitos:**

- Usa los archivos JSON que te proporcionamos en la misma carpeta de proyecto para construir tu web.
- Crea un proyecto de **Next** con **TypeScript** usando `create-next-app`.
- Sube el proyecto a un repositorio de Github (privado o público, como prefieras) y prepárate para trabajar con un git flow adecuado.
- Configura tu proyecto para usar **Styled Components** y **variables de entorno** en caso de ser necesarias.

**Instrucciones:**

- Lee el archivo JSON que te proporcionamos, verás que tiene una estructura definitoria de lo que sería una web estática, esto es un ejemplo semántico de la estructura:

```bash
{
  "head": {
    "title": "",
    "description": "",
    "image": ""
  }
}
```

- Usando este JSON, vamos a crear una página estática (sin revalidación) para crear una web, la maquetación será elección tuya, pero la estructura de la web vendrá definida por el JSON.
- Importa el archivo JSON en getStaticProps y pásalo a tu component página, será siempre `index.tsx` ya que no trabajaremos con más rutas que la ruta index `/`.
- A nivel página, crea un component personalizado para cada cosa, es decir, si tienes definida una sección de la siguiente forma, crearás un `Section` que tenga un `Title` y un `Link` que pueda parecer un botón y reciba una url externa:

```bash
{
  "section": {
    "title": "La programación es divertida, únete a Rock{theCode}!"
    "link": {
      "text": "Únete aquí",
      "similarTo": "button",
      "url": "https://www.google.com/search?q=rockthecode"
    }
  }
}
```

- Conociendo esto, recorre todo el objeto JSON completo a nivel página para crear secciones y elementos dando forma tu web. Esta prueba es lo suficientemente abstracta como para permitirte crear lo que seas capaz, despliega tus conocimientos bajo tu propio criterio! 🚀

**Pasos finales:**

- Despliega el proyecto en Vercel, comrpueba que se genera la página con los componentes y estilos que has creado en tu proyecto local.
- Dale buenos estilos a la web, tienes total libertad y Styled Components!
- Asegúrate de haber usado cada clave del objeto JSON, inclusive el elemento `Head` para un buen SEO.
- No te estreses mucho, dedica tiempo a pensar y planear pasos a seguir para superar esta prueba e intenta extenderla tanto como puedas según hayas aprendido, es de un nivel bastante elevado!
