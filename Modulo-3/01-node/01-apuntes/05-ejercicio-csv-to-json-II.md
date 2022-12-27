# 05 - Video Ejercicio CSV to JSON II

Ahora que tenemos el contenido de las filas en un array de elementos (cada elemento es un array de strings), vamos a recorrerlo y formatear cada array de valores correctamente para crear el CSV.

```js
valuesColum.forEach((values) => {
  const rowWithCommas = values.join(',');

  csvContent = +`\n${rowWithCommas}`;
});
```

Si te fijas en el contenido, algunos valores son arrays de arrays por lo que tendremos que transformarlos comprobando si el elemento es un string o un array! 😱

```js
valuesColums.forEach((values) => {
  let valuesString = +`\n`;

  values.forEach((value) => {
    // Si el valor es un Array, lo unimos usando comas como separador
    // y lo introducimos al string acumulador
    if (Array.isArray(value)) {
      valuesString += `"${value.join(',')}"`;
      return;
    }

    // Si el valor es un string con comas, lo añadimos directamente
    // al string acumulador para no crear columnas innecesarias
    if (value.includes(',')) {
      valuesString += `"${value}"`;
    }

    // Si el valor es un string normal, lo añadimos seguido de una coma
    valuesString += `${value.toString()},`;
  });

  // Al final del bucle, añadimos su contenido al csvContent que estamos creando
  csvContent += valueString;
});
```

Ahora solo queda escribir el archivo en CSV usando `fs.writeFile`de la siguiente forma:

```js
// Podemos escribir en el archivo csvContent directamente sin transformar a string
// porque ya es un string en el hemos acumulado valores!
await writeFile(WRITE_PATHNAME, csvContent);
```

> Para terminar, prueba a importarlo en tu hoja Excel o Google Sheets para comprar que se ha creado un archivo adecuado con las filas y columnas ordenadas como hacemos en el video 🎸
