# 02 - Video Lectura ficheros

Para leer archivos (ficheros) de nuestro ordenador utilizando `Node` podremos utilizar la librería interna `fs`, que siempre estará disponible para todo el código que lanzamos usando el comando `node` (incluso a través de `npm`).

1. Crea un archivo `file.txt` donde escribas el texto que quieras dentro, puedes probar a crear un archivo `.json` que contenga un objeto o array de JavaScript que podrás utilizar luego.

2. Para importar el contenido de un archivo, importa la librería `fs` para trabajar con archivo a través de esta línea:

```js
const fs = require('fs/promises');
```

3. No olvides crear una función `main` que contendrá todo nuestro código (lógica) principal y que sea `async`, de esta forma podemos utilizar `async/await` en nuestra función cuando trabajemos con promesas. Invócala al final del archivo con `main()`.

4. Para leer un archivo, usa la librería `fs` que has requerido con:

```js
const fileContent = await fs.readFile('PATH_AL_ARCHIVO');
```

5. Para crear un `PATH` absoluto en tu sistema puedes usar otra librería `path` interna de `Node`, al igual que `fs`.

- Usando `path.join()` podrás crear un string que contiene el path absoluto después de unir el directorio actual y el path relativo del archivo a leer.

```js
// Con __dirname tendrás acceso al directorio actual de forma absoluta.
const filePath = path.join(__dirname, './file.txt');
```

6. Por último, convierte el contenido de `fileContent`, que es un Buffer, en un string con `const fileString = fileContent.toString()` para tener el contenido del archivo en texto.

- Si quieres convertirlo a algún tipo de dato utilizable por JavaScript porque creaste un archivo `.json`, puedes usar `const fileData = JSON.parse(fileString)`.
