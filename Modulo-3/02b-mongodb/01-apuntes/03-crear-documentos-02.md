# 03 - Video | Crear documentos, segunda parte

Se dará el caso trabajando con MongoDB, en el que tengamos arrays de elementos en una cantidad desconocida, y necesitemos guardar todos a la vez.

Para hacer esto tenemos dos opciones, o hacer un `.save()` individual en bucle para cada uno (conlleva muchas peticiones a la DB y acabará siendo lento y sobrecargando el sistema), o hacer un guardado en **"bulk"**, es decir, todo de una.

Para hacer un guardado en bulk en `mongoose` podemos usar `.insertMany`. Esta función ya instancia y guarda automáticamente todos los documentos que pueda:

```js
const dogs = [
  {
    name: 'Tambor',
    type: 'Pug',
  },
  {
    name: 'Curro',
    type: 'Bulldog',
  },
];

const Dog = mongoose.model('Dog', new mongoose.Schema({}));

// Guardamos todos al mismo tiempo, esperamos a que la operación termine como siempre
await Dog.insertMany(dogs);
```
