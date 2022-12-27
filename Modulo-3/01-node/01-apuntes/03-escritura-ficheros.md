# 03 - Video Lectura ficheros

Al igual que podemos leer el contenido de archivos con Node, también podemos escribir en estos de una forma muy parecida.

Antes de comenzar, recuerda crear una carpeta de proyecto de Node como hicimos al principio y añade un `script` para lanzar tu archivo principal (como con `npm run start`).

1. Para importar la librería `fs` y `path` con Node, recuerda que puedes hacer:

```js
const fs = require('fs/promises');
const path = require('path');
```

2. Crea el PATH absoluto que apunte a la dirección en la que quieres escribir tu archivo con:

```js
const PATH_TO_WRITE = path.join(__dirname, './file.json');
```

3. Escribe el contenido que quieras, como por ejemplo un objeto de JavaScript utilizando `fs` así:

```js
const content = {
  school: 'Rock{theCode}',
  master: 'Full Stack',
};

const contentAsString = JSON.stringify(content);
await fs.writeFile(PATH_TO_WRITE, contentAsString);
```

- Recuerda que debes transformar el contenido en un string antes de escribirlo en el archivo 🦄
