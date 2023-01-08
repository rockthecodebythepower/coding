# 05 - Video | Leer documentos, segunda parte

En esta segunda parte de lectura de documentos de MongoDB con mongoose, vamos a diferenciar otros dos métodos distintos de `.find()`.

- `Model.findOne({})` se comporta de forma que traerá el **primer documento de la colección** que cumpla el criterio de filtrado, es decir, que a diferencia de `.find({})`, no tendremos un array de elementos, solo un objeto para el primero que haga "match" con el filtro.

- `Model.findById('id_del_documento')` es más eficaz que `.findOne()` ya que recibe un string como argumento, siendo este el valor del campo `_id` del documento de mongoose (que se asigna automáticamente al crear el documento). Usar el valor `_id` es algo más directo dado que el valor es único y solo pertenece a un posible documento, haciendo más sencilla y rápida la búsqueda.

---

Adicionalmente, podemos utilizar `.lean()` al final de `.find(), .findOne(), .findById()` para recibir un objeto de JavaScript adecuado a Node, y no una instancia de documento que es más pesada y difícil de manejar.

```js
const id = '1234abcd5678';

// Traerá un objeto con la información de dog que habrá encontrado a través de su _id
const dog = await Dog.findById(id).lean();
```

---

También se puede utilizar `.sort({})` para ordenar los resultados e incluso la query de matcheo:

```js
// Devolverá un array de pugs ordenados ascendentemente por su campo name.
const allPugs = await Dog.find({
  type: { $regex: /pug/i },
})
  .sort({ name: 1 }) // Con 1 ordenamos ascendente por un campo, con -1 descendente
  .lean();
```
