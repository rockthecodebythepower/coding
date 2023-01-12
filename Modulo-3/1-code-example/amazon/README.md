**Introducción**
---

El web scraping (o raspado web) es una técnica utilizada para extraer información de sitios web. Consiste en utilizar programas o scripts para automatizar la navegación por un sitio web y recolectar información de manera automatizada. Los datos recolectados pueden ser utilizados para diversos fines, como la monitorización de precios, la recopilación de datos para análisis, la generación de contenido automatizado, entre otros. Algunos ejemplos de uso del web scraping incluyen el análisis de tendencias en redes sociales, la extracción de datos de sitios de comparación de precios, la recopilación de noticias y actualizaciones de precios en sitios de comercio electrónico.

**Pupeteer y Mongoose**
---

**Puppeteer** es una biblioteca de Node.js desarrollada por Google que permite automatizar tareas en un navegador Chrome o Chromium. Con Puppeteer, se pueden crear scripts para realizar tareas como navegar por sitios web, rellenar formularios, hacer clic en botones, tomar capturas de pantalla y extraer datos de páginas web. Puppeteer también proporciona una interfaz para interactuar con una página web utilizando JavaScript, lo que permite realizar tareas avanzadas como simular eventos del usuario, ejecutar JavaScript en una página y acceder a elementos de la página que no están disponibles para el usuario final. Es importante mencionar que Puppeteer es una herramienta de automatización de navegador y no una librería de web scraping, pero puede ser utilizada para realizar tareas de scraping debido a su capacidad para interactuar con la página web y extraer información.

**Mongoose** es una biblioteca de Node.js que proporciona una interfaz de alto nivel para interactuar con una base de datos MongoDB. Mongoose proporciona una serie de características para trabajar con MongoDB, como la definición de esquemas para los documentos, la validación de datos, la construcción de consultas y la conexión a una base de datos.

Instalación
---

Inicializar un paquete de npm

```jsx
npm init -y
```

Instalación de los paquetes necesarios

```jsx
npm i puppeteer mongoose
```

crear un fichero index.js

```jsx
touch index.js
```

añadir el script para ejecutar dicho fichero en el package.json

```jsx
"start": node index.js
```

Guía
---

En nuestro fichero index.js

- Se importan las bibliotecas de Puppeteer y Mongoose al principio del script.
- Se crea un modelo de datos llamado "Data" utilizando Mongoose, con dos campos: título y precio.
- Se define una función "connect" para conectarse a la base de datos MongoDB.
- Se define una función "scrapeProducts" para extraer los datos de la página web.
    
    a. Se llama a la función "connect" para conectarse a la base de datos.
    b. Se inicializa el navegador con Puppeteer y se abre una nueva pestaña.
    c. Se navega a la URL específica (Amazon en este caso) y se realiza una búsqueda en el sitio utilizando la palabra "star wars".
    d. Se espera a que la página se cargue y se hace un scroll para ver más resultados de búsqueda.
    e. Utilizando el método ".$$eval" de Puppeteer se extraen los títulos y precios de los productos de la página.
    f. Se crea un array con los datos extraídos y se convierte en un objeto JSON.
    g. Se guarda el objeto JSON en la base de datos MongoDB.
    h. Se cierra el navegador y se imprime un mensaje de éxito.
    
- Finalmente, se llama a la función "scrapeProducts" para iniciar el proceso de extracción y guardado de datos.