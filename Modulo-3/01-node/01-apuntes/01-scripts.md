# 01 - Video Scripts

Hasta ahora hemos lanzado scripts utilizando el comando `node NOMBRE_ARCHIVO.js` para lanzar un script que hayamos escrito y preparado.

De cara a este **Módulo 3 - Backend** aprenderemos a lanzar nuestros scripts manteniendo sus funciones separadas en múltiples archivos, todo organizado para poder hacer crecer nuestros script de la forma más estructurada posible y combinándolos con el uso de librerías externas que instalaremos con `npm`.

1. Para preparar una carpeta de proyecto con Node vamos a lanzar el comando `mkdir MI_PROYECTO` dándole un nombre adecuado a la carpeta de proyecto.

2. Una vez navegues a la carpeta, lanza el comando `npm init -y`. Esto creará un archivo `package.json` que contendrá las referencias a las librerías (dependencias) que vamos a instalar, los `scripts` que queremos automatizar con el uso de `npm` y metadatos sobre licencias, autores del proyecto...

3. Dentro de la propiedad `scripts` añade uno que se llame `start`. Este script lo lanzaremos con el comando `npm run start` en nuestra terminal y lo usaremos normalmente para lanzar `node` sobre el archivo principal del proyecto, que será el archivo `index.js` que crearemos a continuación.

4. Ahora puedes probar a instalar una librería con `npm`. En el video verás que instalamos [cowsay](https://www.npmjs.com/package/cowsay) y la utilizamos tras requerirla en `index.js` con:

```js
const cowsay = require('cowsay');
```

5. Lanza tu script con `npm start` o `npm run start` y verás el output en terminal 🎸
