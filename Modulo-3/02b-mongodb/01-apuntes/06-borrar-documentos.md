# 06 - Video | Borrar documentos

Para seguir aprendiendo las formas de trabajar con MongoDB usando `mongoose`, vamos a borrar elementos.

Esto métodos borran el elemento directamente, y no devuelven nada al ser invocados:

- `Model.deleteMany({})`: borrará todos los elementos que cumplan la condición filtro que pasamos como argumento. Hay que tener cuidado porque podría borrar muchos elementos de forma inesperada si no controlamos el filtro.

- `Model.deleteOne({})`: borrará UN SOLO elemento que cumplan la condición filtro que pasamos como argumento. Borrará el primero de los elementos que cumplan este filtro, por lo que podremos ser bastante específicos al buscar.

```js
// Borra TODOS los documentos que tenga type igual a pug
await Dog.deleteMany({
  type: { $regex: /pug/i },
});

// Borra un solo elemento por su _id
await Dog.deleteOne({ _id: 'id_del_documento' });
```

Aunque estos métodos servirán y cumplirán nuestros objetivos la gran mayoría de las veces, habrá ocasiones en las que necesitemos acceder al elemento que vamos a borrar para mantenerlo en memoria en Node (para operaciones posteriores), para ello hay otros dos métodos disponibles:

- `Model.findOneAndDelete({})`: borrará UN SOLO elemento que cumplan la condición filtro que pasamos como argumento. Adicionalmente lo buscará y devolverá en la constante a la que asignemos la invocación de esta función.

- `Model.findByIdAndDelete('id_del_elemento')`: borrará UN SOLO elemento que tenga como campo `_id` el valor que mandemos como argumento. Será muy eficiente en la búsqueda del elemento y lo devolverá a una constante.

```js
// Borra el PRIMER elemento que encuentra con el nombre "Tambor" y lo asigna a la constante
const deletedDog = await Dog.findOneAndDelete({
  name: 'Tambor',
}).lean();

// Borra un perro por su id y lo asigna a la constante
const deletedDog = await Dog.findByIdAndDelete(id).lean();
```
