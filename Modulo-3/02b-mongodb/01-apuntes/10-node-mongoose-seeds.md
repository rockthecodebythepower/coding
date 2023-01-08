# 10 - Video | Proyecto Node y MongoDB para crear Seeds

El conjunto de videos en el que hacemos un proyecto de **Node** con **MongoDB** conlleva el uso de la librería `mongoose` y tendrá un objetivo principal:

- El objetivo del proyecto es crear un script en **Node** para crear una **seed**, es decir, partir de información en formato `JSON` que leeremos y usaremos para crear colecciones y documentos en **MongoDB**.

- Para comunicarnos con **MongoDB** desde **Node** usaremos la librería `mongoose`, que ya hemos utilizado en los videos anteriores y nos permite comunicarnos y operar fácilmente con MongoDB.

Aquí te dejamos la información inicial en JSON para que la utilices en tu `seed.js`:

```js
const seed = {
  dogs: [
    {
      name: 'Tambor',
      type: 'Pug',
      age: 6,
      _petId: 1,
      _owner: 1,
    },
    {
      name: 'Archie',
      type: 'Bulldog',
      age: 10,
      _petId: 2,
      _owner: 2,
    },
    {
      name: 'Casper',
      type: 'Pug',
      age: 2,
      _petId: 3,
      _owner: 1,
    },
    {
      name: 'Elmo',
      type: 'Labrador',
      age: 3,
      _petId: 4,
      _owner: 2,
    },
  ],
  owners: [
    {
      name: 'Cristian',
      surname: 'Castillo',
      _ownerId: 1,
      _dogs: [1, 3],
    },
    {
      name: 'Alberto',
      surname: 'Rivera',
      _ownerId: 2,
      _dogs: [2, 4],
    },
  ],
};

module.exports = seed;
```

Como puedes ver, hay muchos campos con guion bajo delante, es porque son campos privados y temporales que usaremos como soporte para trabajar y crear relaciones entre nuestros elementos de la seed. Esto lo vemos en los videos así que sigue el ejercicio con nosotros para crear tu seed 🎸

> En el primer video de proyecto te explicamos que estructura de proyecto y colecciones de base datos es la adecuada y seguiremos para esta información. Sigue los pasos para conseguir crear tu primera base de datos no relacional con MongoDB que se alimenta de una `seed`! 🚀
