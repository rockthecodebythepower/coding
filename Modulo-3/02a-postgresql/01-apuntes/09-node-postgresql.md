# 09 - Video | Proyecto Node PostgreSQL

El conjunto de videos en el que hacemos un proyecto de **Node** con **PostgreSQL** conlleva el uso de una librería y tendrá un objetivo principal:

- El objetivo del proyecto es crear un script en **Node** para crear una **seed**, es decir, partir de información en formato `JSON` que leeremos y usaremos para crear tablas, columnas y filas en **PostgreSQL**.

- Para comunicarnos con PostgreSQL desde Node usaremos la librería [pg](https://node-postgres.com/) o `node-postgres`, que nos ofrece un conector para bases de datos PostgreSQL muy sencillo de inicializar, y la posiblidad de utilizar queries en `raw` SQL (código SQL puro).

Aquí te dejamos la información inicial en JSON para que la utilices en tu `seed.js`:

```js
const seed = {
  athletes: [
    {
      id: 1,
      name: 'usain',
      surname: 'bolt',
    },
    {
      id: 2,
      name: 'simone',
      surname: 'biles',
    },
    {
      id: 3,
      name: 'michael',
      surname: 'phelps',
    },
  ],
  olympic_games: [
    {
      id: 1,
      city: 'Rio',
      year: 2016,
    },
    {
      id: 2,
      city: 'London',
      year: 2012,
    },
  ],
  olympic_athletes: [
    {
      athlete_id: 1,
      olympic_game_id: 1,
      discipline: 'athletics',
    },
    {
      athlete_id: 2,
      olympic_game_id: 1,
      discipline: 'gymnastics',
    },
    {
      athlete_id: 3,
      olympic_game_id: 2,
      discipline: 'swimming',
    },
  ],
};

module.exports = seed;
```

> En el primer video de proyecto te explicamos que estructura de base de datos adecuada seguiríamos para esta información. Sigue los pasos para conseguir crear tu primera base de datos relacional que se alimenta de una `seed`! 🚀
