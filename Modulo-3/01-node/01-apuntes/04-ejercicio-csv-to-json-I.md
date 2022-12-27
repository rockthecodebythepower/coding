# 04 - Video Ejercicio CSV to JSON I

Antes de comenzar, recuerda que hemos visto:

- Un archivo JSON contiene datos en un formato legible por JavaScript, y su contenido es "parseable", es decir, posible de ser transformado a JavaScript (objetos, arrays...)
- Un archivo CSV contiene texto separado por comas, donde cada salto de línea es una fila nueva (para un Excel). Cada campo separado por comas viene a ser una columna de Excel.

## Leyendo el contenido del JSON

Te dejamos un JSON parecido al que usamos en el video en esta misma carpeta con el nombre `04-house-listing.json`.

> Para leer el contenido del archivo, tendrás que leerlo en texto plano como hemos hecho hasta ahora con `fs` y hacer una transformación a JSON para tener un objeto como dato para trabajar con JavaScript.

```js
const fileContent = await fs.readFile(PATH_TO_FILE);
const dataAsString = fileContent.toString();
const data = JSON.parse(dataAsString);
```

## Preparando el CSV

En CSV, la primera fila del archivo en la que tenemos bloques de texto separado por comas serán las cabeceras de cada columna en Excel una vez lo importes, por lo que habrá que tener en cuenta:

- Cuántas claves hay en el objeto que hemos leido?
- Hay claves dentro de otras en el objeto? Cuántas columnas producirían en tu excel?

Una vez respondido esto, podrás leer las claves del primer elemento de tu array de objetos con:

```js
// Tenemos un array con las claves del primer objeto
const headerColumns = Object.keys(data[0]);
```

Para almacenar el texto con el crearemos el CSV, tendremos una variable `let` sobre la que podemos escribir cada fila.

Para recorrer las filas de nuestros elementos, podemos recorrer los elementos con `Array.map`, de forma que consigamos tener finalmente un array de strings (valor de cada columna), separado por comas.

```js
let csvContent = ``;

// Almacenamos los valores de cada elemento en un array de valores con Object.values()
const valuesColumns = data.map((element) =>
  Object.values(element)
);

// Unimos cada elemento header de la primera fila con comas usando join(',')
csvContent += headerColumns.join(',');
```

> En el siguiente video añadiremos estos valores formateados a `csvContent` y escribiremos el CSV para importarlo en Excel o Google Sheets! 🎸
