# 09 - Video | Relaciones entre documentos y .populate()

Aunque estemos trabajando con una base de datos noSQL como es **MongoDB**, y eso nos invite a crear **documentos** con el formato que queramos, habrá veces en las que el valor de un campo (como el `owner` de cada perro) se pueda repetir muchas veces y merezca más la pena sacarlo a una **colección** aparte.

Para esto, como habrás visto en los esquemas que explicamos en video, habrá varios tipos de relaciones (1:1, 1:N o N:N) y podremos cumplirlas a través del uso de `ids` en campos de cada documento.

Para relacionar un documento `Owner` con un conjunto de documentos `Dog`, podremos añadir la `_id` de cada documento `Dog` a un campo `dogs` en el documento `Owner`:

```js
// 1. Buscamos todos los documentos Dog que sean de type Pug
const pugs = await Dog.find({
  type: { $regex: /pug/i },
}).lean();

// 2. Creamos un array de ids para relacionarlos con el otro documento Owner
const pugIds = pugs.map((pug) => pug._id);

// 3. Al owner le añadimos el array de ids como un campo `dogs`
const ownerOfPugs = await Owner.findByIfAndUpdate(
  'id_del_owner',
  {
    dogs: pugIds,
  }
).lean();

console.log(ownerOfPugs); // { name: 'Cristian', dogs: ['id_del_pug_01', 'id_del_pug_02'] }
```

> Con estas queries conseguiremos que todos los elementos Dog de type Pug se añadan como un array de ids al documento Owner con id igual a 'id_del_owner'. El problema es que ahora tendremos siempre unas ids, por lo que habrá que buscar la forma de obtener los elementos Dog cuando leamos el Owner para optimizar peticiones 🚀.

Si queremos traer no solo el array de ids para la propiedad `dogs` del owner, sino que queremos traer los elementos `Dog` para cada `id`, podemos utilizar el método `.populate()`.

Con `populate` indicaremos en las opciones que pasamos como argumento que campo del elemento en cuestión queremos relacionar con otro modelo o colección (campo `path`), que modelo corresponde con dicha colección (campo `model`) y que valores queremos seleccionar de dichos documentos relacionados (campo `select`).

```js
const ownerOfPugs = await Owner.findById('id_del_owner')
  .populate({
    path: 'dogs',
    model: 'Dog',
    select: {
      _id: true,
      name: true,
    },
  })
  .lean();

console.log(ownerOfPugs);
// { name: 'Cristian', dogs: [{ _id: 'id_del_pug_01', name: 'Tambor'}, {_id:'id_del_pug_02', name: 'Curro'}] }
```

> Con esta query estaremos encontrando un elemento Owner con la id `"id_del_owner"` y en lugar de haber obtenido en el campo `dogs` un array de `ids` como antes, estaremos obteniendo un array de objetos con la información de cada elemento `Dog` que haya podido matchear.
