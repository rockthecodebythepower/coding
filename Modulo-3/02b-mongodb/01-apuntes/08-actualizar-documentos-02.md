# 08 - Video | Actualizar documentos, segunda parte

Como habrás podido ver en los videos, hemos estado trabajando con Arrays y Objetos dentro de documentos de MongoDB, y habrás podido ver ejemplos en los que se hace complicado editarlos. Vamos a ver algunos ejemplos.

## Trabajar con arrays en mongoose

Para actualizar un campo de un documento y añadir un array, podemos usar:

```js
await Dog.updateOne(
  { _id: 'id_del_documento' },
  { likes: ['running', 'eating'] }
);
```

Si ahora invocamos de nuevo esta función para añadir un elemento más al array `likes`:

```js
await Dog.updateOne(
  { _id: 'id_del_documento' },
  { likes: ['swimming'] }
);
```

> Verás que el array de `likes` en la base de datos ahora solo vale `['swimming']`, es decir, se ha pisado por completo y no se ha actualizado correctamente ❌.

Para solucionar este problema podemos usar `$push` como operador en el `update`:

```js
await Dog.updateOne(
  { _id: 'id_del_documento' },
  { likes: { $push: 'swimming' } }
);
```

> Esta query busca el array de `likes` del documento y lo actualiza adecuadamente añadiendo el valor 'swimming' al array y manteniendo los valores anteriores ✅.

Si en cambio quieres añadir múltiples elementos al array al mismo tiempo, puedes usar:

```js
await Dog.updateOne(
  { _id: 'id_del_documento' },
  {
    $addToSet: {
      likes: { $each: ['swimming', 'sleeping'] },
    },
  }
);
```

> Esta query actualiza el array `likes` y solamente hace PUSH de los strings que **no existan previamente**, y a su vez introduce tantos como hayamos pasado en `$each`.

## Trabajar con objetos en mongoose

Esto es algo más sencillo que trabajar con arrays, ya que siempre que queramos introducir un objeto podremos hacer:

```js
await Dog.updateOne(
  { _id: 'id_del_documento' },
  {
    owner: { name: 'Cristian' },
  }
);
```

Pero cuidado, si quieres añadir una clave al objeto, tendrás que hacerlo mediante una opción especial o harás override del objeto completo tal y como pasaba con los arrays:

```js
await Dog.updateOne(
  { _id: 'id_del_documento' },
  {
    $set: {
      'owner.surname': 'Castillo',
    },
  }
);
```

> Con esta query, estamos buscando el objeto `owner` y seteando una propiedad `surname`, sin pisar el resto de claves que tenía el objeto anteriormente ✅.

Para eliminar un valor del objeto, puedes usar `$unset` en su lugar con un valor de `1` para confirmar qu quieres borrar esa clave:

```js
await Dog.updateOne(
  { _id: 'id_del_documento' },
  {
    $unset: {
      'owner.surname': 1,
    },
  }
);
```

> Esta query borrará la clave `surname` del objeto `owner` del documento correspondiente de la base de datos.
