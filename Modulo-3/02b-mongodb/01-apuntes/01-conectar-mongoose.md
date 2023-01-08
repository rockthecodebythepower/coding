# 01 - Video | Conectar a Mongo con Mongoose

Para trabajar con [MongoDB](https://www.mongodb.com/) podemos utilizar scripting en combinación con Node, de forma que operaremos con una base de datos de forma programática.

Para esto tenemos dos librerías distintas muy usadas a nuestra disposición (entre muchas otras):

- [Mongo Driver](https://www.npmjs.com/package/mongodb)
  - Esta librería actúa como comunicador y conector con MongoDB desde Node. Su lenguaje es prácticamente similar al lenguaje propio del motor de MongoDB.
- [Mongoose](https://www.npmjs.com/package/mongoose)
  - Esta librería es un ODM (Object Data Mapper) y actúa como capa de abstracción sobre el driver de MongoDB. Permite simplificar el lenguaje de queries que usamos y el manejo general de MongoDB.

En el contenido de los videos del máster usaremos, como habrás podido ver en los videos, la librería `mongoose`. Esto se debe a que a diferencia de lo que hacemos en la sección de SQL, aquí no nos interesa aprender el lenguaje de queries de MongoDB en profundidad, ya que es probable que acabes trabajando con otras bases de datos `noSQL` y sus propias capas de abstracción.

---

## Cómo conectar con MongoDB usando mongoose

1. Sigue los pasos del video para crear un proyecto nuevo de Node. No olvides lanzar: `npm init -y` y configurar tu archivo `.gitignore` correctamente.

2. Ahora instala la librería `mongoose` a través del comando: `npm install mongoose`.

3. Cambia los `scripts` de tu `package.json` para tener uno similar a `"start": "node ."`, donde el punto significa que `node` se lanza sobre tu archivo principal marcado en la clave `"main": "index.js"` en el mismo archivo.

4. Ahora que tienes todo preparado, vamos a usar este código para conectar con **MongoDB** a través de `mongoose`:

```js
// 1. Importamos el paquete de node_modules 📦
const mongoose = require('mongoose');

// 2. Configuramos mongoose NO ESTRICTO 🚨, lo explicaremos a continuación
mongoose.set('strict', false);
mongoose.set('strictQuery', false);
mongoose.set('strictPopulate', false);

// 3. Conectamos con MongoDB usando una URL de mongo, donde estamos accediendo a nuestro Mongo Local
// en el puerto 27017 (puerto por defecto) a la base de datos test-db
mongoose
  .connect('mongodb://localhost:27017/test-db')
  .then(() => {
    console.log('Conectado a la base de datos!');
  })
  .catch((err) => {
    console.log(
      'Ha ocurrido un error al conectar con Mongo:',
      err
    );
  });
```

> Como habrás podido ver en el contenido, la base de datos `test-db` no es necesario tenerla creada de antemano y `mongoose` la creará automáticamente al usarla. También te habrás fijado en que desactivamos completamente el modo estricto. Esto es debido a que no vamos a usar esquemas en el contenido, ya que queremos que aprendas a trabajar con bases de datos `noSQL` de la forma más propia del concepto en si mismo, por lo que queremos completa libertar al definir nuestros documentos de la base de datos.
