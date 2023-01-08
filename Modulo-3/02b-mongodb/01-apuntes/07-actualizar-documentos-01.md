# 07 - Video | Actualizar documentos, primera parte

Al igual que con el borrado de elementos, la actualización o "update" tiene varios métodos que se comportan de formas distintas.

Los métodos que actualizan elementos pero NO DEVUELVEN su valor son:

- `Model.updateMany({})`: actualizará todos los elementos que cumplan la condición filtro que pasamos como argumento.

- `Model.updateOne({})`: actualizará UN SOLO elemento que cumplan la condición filtro que pasamos como argumento.

```js
// Actualiza TODOS los documentos que tenga type igual a pug y les añade el campo `isCute: true`
await Dog.updateMany(
  {
    type: { $regex: /pug/i },
  },
  {
    isCute: true,
  }
);

// Actualiza un solo elemento por su _id y les añade el campo `isCute: false`
await Dog.updateOne(
  { _id: 'id_del_documento' },
  { isCute: false }
);
```

Hay otros métodos con los que podremos obtener actualizados los documentos una vez haya ocurrido el update:

- `Model.findOneAndUpdate({})`: actualizará UN SOLO elemento que cumplan la condición filtro que pasamos como argumento.

- `Model.findByIdAndUpdate('id_del_elemento')`: actualizará UN SOLO elemento que tenga como campo `_id` el valor que mandemos como argumento. Será muy eficiente en la búsqueda del elemento y lo devolverá a una constante.

```js
// Actualiza el primer elemento que encuentra con nombre Tambor,
// se lo cambia a Tamborcillo y lo devuelve actualizado en la constante.
const updatedDog = await Dog.findOneAndUpdate(
  {
    name: 'Tambor',
  },
  { name: 'Tamborcillo' },
  { new: true } // Esta opción es necesaria para tener el objeto ACTUALIZADO en la constante
).lean();

// Actualiza un perro por su id, le cambia su nombre a Tamborcillo y lo asigna a la constante
const updatedDog = await Dog.findByIdAndUpdate(
  'id_del_elemento',
  { name: 'Tamborcillo' },
  { new: true } // Esta opción es necesaria para tener el objeto ACTUALIZADO en la constante
).lean();
```

> Es importante que si quieres tener en la constante el objeto recién actualizado, mandes como TERCER argumento el objeto `{ new: true }` a las operaciones. Si no lo haces, obtendrás el objeto en la constante antes de haber sido actualizado.
