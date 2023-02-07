Escritura y lectura de ficheros con NodeJS
---

No es una práctica habitual pero para conocer un poco lo que nos permite hacer **Node.js** vamos a trabajar con la escritura y lectura de ficheros con **Node.Js.** Para la gestión de archivos con Node.Js utilizaremos el paquete de Node llamado **'[fs](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback)'.**

**Proyecto Node**
---

Antes de definir nuestro .js tendremos que ejecutar en la misma carpeta el comando:

```bash
npm init -y
```

De esta forma nos generará un fichero `package.json` con los datos de nuestro servidor y nos permitirá arrancar el servidor mediante `npm run start`.

```json
{
  "name": "lesson_1_wr",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "write": "node write.js",
    "read": "node read.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

**Write files  NodeJS**
---

Creamos un fichero  llamado `write.js` e importamos el paquete de escritura de Node `fs`, además podemos añadir su método `writeFile` en la que tenemos que pasar por params:

- **file →** Esto será un string que representará el nombre del archivo.
- **data →** La información en formato string que enviaremos al archivo.
- **callback →**  Función que será invocada cuando termine de escribirse el archivo.

```jsx
//Requerimos el paquete
const fs = require('fs');
//Usamos el método de la librería
fs.writeFile(file, data[nameFile.json, options], callback)
```

Ahora podemos crear una lista de elementos que queremos generar de manera dinámica.

```jsx
//Requerimos el paquete
const fs = require('fs');

// Creamos un array de objetos que representan personas
const avengers = [
    {
        name: 'SpiderMan',
        power: 70
    },
    {
        name: 'Dr.Strange',
        power: 80
    },
    {
        name: 'Hulk',
        power: 110
    }
];

// Transformamos el array a un JSON en formato String
const avengersJson = JSON.stringify(avengers);

// Creamos el archivo people.json y dejamos que el callback
// nos avise cuando se complete la escritura.
fs.writeFile('avengers.json', avengersJson, () => {
    console.log('avengers.json created!');
})
```

![Captura de Pantalla 2022-11-13 a las 20.18.14.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/96310028-0bf6-4152-b0ad-e5025059b4cf/Captura_de_Pantalla_2022-11-13_a_las_20.18.14.png)

**Read Files  NodeJS**
---

Creamos un fichero  llamado `read.js` e importamos el paquete de escritura de Node `fs`, además podemos añadir su método `readFile` en la que tenemos que pasar por params:

- **file →** Esto será un string que representará el nombre del archivo.
- **data →** La información en formato string que leemos del archivo.
- **error →**  Ops! hay problemas en la lectura.

```jsx
//Requerimos el paquete
const fs = require('fs');
//Usamos el método de la librería
fs.readFile(file, callback(error, data) => {})
```

Ahora podemos leer un fichero desde NodeJS y hacer cualquier manipulación que queramos.

```jsx
const fs = require('fs');

// Leemos un archivo en la dirección dada y el callback es invocado
// cuando se termina de leer y procesar el archivo
fs.readFile('avengers.json', (err, avengers) => {
    if (err) {
        // Si recibimos un error en el callback, lo mostraremos en consola
        console.log('There was an error reading the file!');
    } else {
        // Si obtenemos los datos y no un error, habrá que transformar
        // la información con JSON.parse() para poder mostrarla
        const parsedAvengers = JSON.parse(avengers);
        console.log(parsedAvengers);
    }
});
```

![Captura de Pantalla 2022-11-13 a las 20.25.46.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/05895d1b-e825-4775-96f3-678144c322ef/Captura_de_Pantalla_2022-11-13_a_las_20.25.46.png)

**Script JSON to CSV**
---

Este script utiliza la biblioteca de archivos incorporada de Node.js (**`fs`**) para escribir el archivo CSV en el disco. La función **`convertJsonToCsv`** toma un objeto JSON como entrada y devuelve una cadena en formato CSV.

```jsx
const fs = require('fs');

// Función para convertir objeto JSON a CSV
function convertJsonToCsv(jsonData) {
    let csv = "";

    // Encabezados de columna
    let headers = Object.keys(jsonData[0]);
    csv += headers.join(",") + "\n";

    // Datos de fila
    jsonData.forEach(function(row) {
        headers.forEach(function(header, index) {
            if (index > 0) {
                csv += ",";
            }
            csv += row[header];
        });
        csv += "\n";
    });

    return csv;
}

// Datos de ejemplo en formato JSON
let jsonData = [
    { name: "John Doe", age: 30, city: "New York" },
    { name: "Jane Doe", age: 25, city: "London" }
];

// Convierte JSON a CSV
let csvData = convertJsonToCsv(jsonData);

// Guarda CSV en un archivo
fs.writeFile("data.csv", csvData, function(err) {
    if (err) {
        console.error("Error al escribir archivo CSV: " + err);
    } else {
        console.log("Archivo CSV guardado con éxito.");
    }
});
```

**Frecuencia de palabras**
---

Este script utiliza la biblioteca de archivos incorporada de Node.js (**`fs`**) para leer un archivo de texto. La función **`countWords`** toma una cadena de texto como entrada y devuelve un objeto que mantiene un recuento de la frecuencia de cada palabra en el texto.

```jsx
const fs = require('fs');

// Función para contar la frecuencia de palabras
function countWords(text) {
    let wordCounts = {};
    let words = text.split(/\b/);

    for (let i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase();
        if (word.match(/\w+/)) {
            if (wordCounts[word]) {
                wordCounts[word]++;
            } else {
                wordCounts[word] = 1;
            }
        }
    }

    return wordCounts;
}

// Lee un archivo de texto
fs.readFile("text.txt", "utf-8", function(err, text) {
    if (err) {
        console.error("Error al leer archivo: " + err);
    } else {
        let wordCounts = countWords(text);
        console.log("Frecuencia de palabras:", wordCounts);
    }
});
```

Este script hace lo siguiente:

1. Importa el módulo de archivos incorporado de Node.js (**`fs`**) para leer un archivo.
2. Define una función **`countWords`** que toma una cadena de texto como entrada y devuelve un objeto que mantiene un recuento de la frecuencia de cada palabra en el texto. La función primero divide el texto en palabras usando **`text.split(/\b/)`**. Después, itera a través de cada palabra, convierte la palabra a minúsculas y luego verifica si la palabra es una palabra válida (usando **`word.match(/\w+/)`**). Si es una palabra válida, se agrega o se incrementa el contador de frecuencia para esa palabra en el objeto **`wordCounts`**.
3. Usa el método **`fs.readFile`** para leer un archivo de texto llamado "text.txt". Este método toma como argumentos el nombre del archivo, la codificación y una función de devolución de llamada que se invoca una vez que se ha leído el archivo. La función de devolución de llamada verifica si hay un error al leer el archivo y, de lo contrario, llama a la función **`countWords`** con el texto del archivo y luego muestra el resultado de la frecuencia de palabras en la consola.

En resumen, este script lee un archivo de texto, cuenta la frecuencia de cada palabra en el texto y muestra el resultado en la consola.

**Inquirer**
---

Este es un ejemplo de código que puede ser usado con Node.js y la biblioteca inquirer para hacer las preguntas y crear la estructura de archivos y carpetas para un proyecto de JavaScript o TypeScript:

```jsx
const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "list",
      name: "language",
      message: "Qué lenguaje estás usando?",
      choices: ["JavaScript", "TypeScript"],
    },
    {
      type: "confirm",
      name: "template",
      message: "Quieres un template para un proyecto con este lenguaje?",
    },
    {
      type: "input",
      name: "projectName",
      message: "Nombre del proyecto",
      when: (answers) => answers.template,
    },
  ])
  .then((answers) => {
    if (answers.template) {
      const projectName = answers.projectName;
      const language = answers.language;

      // Crear una carpeta con el nombre del proyecto
      fs.mkdirSync(projectName);

      // Crear archivos y escribir configuraciones
      fs.writeFileSync(
        `${projectName}/.prettierrc`,
        JSON.stringify({
          semi: true,
          singleQuote: true,
        })
      );
      fs.writeFileSync(
        `${projectName}/.eslintrc`,
        JSON.stringify({
          extends: ["eslint:recommended"],
        })
      );
      fs.writeFileSync(`${projectName}/index.html`, "<html></html>");
      fs.writeFileSync(`${projectName}/style.css`, " ");
      if (language === "JavaScript") {
        fs.writeFileSync(`${projectName}/index.js`, "console.log('Hello World!')");
      } else {
        fs.writeFileSync(`${projectName}/index.ts`, "console.log('Hello World!')");
        fs.writeFileSync(
          `${projectName}/tsconfig.json`,
          JSON.stringify({
            compilerOptions: {
              target: "es5",
              module: "commonjs",
              outDir: "dist",
            },
          })
        );
        fs.writeFileSync(
          `${projectName}/package.json`,
          JSON.stringify({
            scripts: {
              build: "tsc",
              start: "node dist/index.js",
            },
            dependencies: {
              typescript: "^4.0.0",
            },
          })
        );
      }
      console.log(`El proyecto "${projectName}" ha sido creado con éxito.`);
    } else {
      console.log("No se ha creado ningún proyecto.");
    }
  });
```