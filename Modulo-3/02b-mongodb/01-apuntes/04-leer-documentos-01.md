# 04 - Video | Leer documentos, primera parte

Para leer documentos que hayamos creado previamente en MongoDB, usaremos `modelos de mongoose` y emplearemos varios métodos. Esta primera parte conlleva el uso de `.find()`.

Cuando usamos `Model.find()` estaremos buscando TODOS los documentos de una colección que cumplan con el criterio de búsqueda.

```js
const Dog = mongoose.model('Dog', new mongoose.Schema({}));

const allDogs = await Dog.find({});
```

> Dado el modelo `Dog`, usamos la función `.find()` para buscar todos los documentos y asignarlos a la constante `allDogs`. El criterio de búsqueda es el argumento que enviamos a `.find({})` que en este caso es un objeto vacío, por lo que traerá TODOS los documentos de la colección.

## Criterios de búsqueda

Para configurar la búsqueda, podemos especificar en el objeto que enviamos a `.find({})` los campos en los que queremos hacer "match":

```js
const allPugs = await Dog.find({ type: 'Pug' });
```

> Traerá todos los documentos de la colección Dog que tengan el tipo `Pug`. Escrito exactamente igual que hemos definido.

Con esto ya podemos filtrar de forma más eficiente, pero lo ideal sería no tener que ser tan específico con la búsqueda y traer los que tengan `type: 'pug'` o `type: 'Pug'`. Para ello podremos configurar opciones especiales en la búsqueda:

- Si el campo es un **string**, podemos usar `$regex` para enviar una Regular Expression y hacer una búsqueda más abierta:

```js
// Esta regular expression /pug/i busca todos los strings que valgan PUG independientemente
// de si está en mayúsculas o minúsculas, es decir, case insensitive.
const allPugs = await Dog.find({
  type: { $regex: /pug/i },
});
```

- Si el campo es un **number** podemos usar comparadores como:

  - `$gt`: mayor que, `age: { $gt: 4 }`. Obtendrá los documentos con campo `age > 4`.
  - `$gte`: mayor o igual que, `age: { $gte: 4 }`. Obtendrá los documentos con campo `age >= 4`.
  - `$lt`: mayor que, `age: { $lt: 6 }`. Obtendrá los documentos con campo `age < 6`.
  - `$lte`: mayor que, `age: { $lte: 4 }`. Obtendrá los documentos con campo `age <= 6`.

Hay muchas más opciones para utilizar, podemos filtrar con un `OR` para elegir entre múltiples condiciones:

```js
const allPugs = await Dog.find({
  $or: [{ type: { $regex: /pug/i } }, { age: { $gt: 4 } }],
});
```

> Esta query traerá todos los documentos que tengan `type` parecido a `pug` o tengan `age` mayor a `4`.
