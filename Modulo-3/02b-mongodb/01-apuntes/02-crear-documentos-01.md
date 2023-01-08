# 02 - Video | Crear documentos, primera parte

Para poder hacer cualquier operación sobre MongoDB usando `mongoose`, tenemos que tener un **modelo** definido, es decir, una clase especial que será capaz de crear **colecciones** en MongoDB y trabajar con sus **documentos**.

Como hemos comentado en los videos, no usaremos esquemas definidos, por lo que para crear un modelo podemos usar un esquema vacío directamente:

```js
const mongoose = require('mongoose');

// Creamos un esquema vacío que permitirá, junto al modo NO ESTRICTO que configuramos antes,
// trabajar con datos en cualquier formato siempre que queramos.
const emptySchema = new mongoose.Schema({});

// Podemos crear tantos modelos como colecciones necesitemos. El nombre SIEMPRE lo escribiremos
// en singular y capitalizado, mongoose adapta el nombre automáticamente en MongoDB.
const Dog = mongoose.model('Dog', emptySchema);
```

Para guardar un elemento en la base de datos, tendremos que **instanciar** el modelo con los datos que queremos guardar en el `documento` correspondiente y llamar a `.save()`:

```js
// Instanciamos la clase Dog para crear un nuevo documento `newDog`
const newDog = new Dog({
  name: 'Tambor',
  type: 'Pug',
  age: 4,
});

// Como hablar con la base de datos lleva siempre un tiempo indeterminado, tendremos que usar
// una promesa al guardar el documento para esperar a que termine el proceso.
await newDog.save();
```
