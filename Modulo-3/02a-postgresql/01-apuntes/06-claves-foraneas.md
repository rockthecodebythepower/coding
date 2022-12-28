# 06 - Video Clave Foráneas

Las `FOREIGN KEYS` en bases de datos SQL nos permiten relacionar una columna de una tabla con una fila de otra tabla distinta. Esto es gran parte de la filosofía relacional que hay detras de SQL.

> Si tengo una tabla `athletes` que contenga atletas olímpicos y una tabla `olympic_athletes` que contenga cada participación de un atleta en un juego olímpico, tendremos que conseguir, para no repetir información de forma innecesaria, que la tabla `olympic_athletes` apunte al atleta en cuestión de `athletes`.

- Para crear una tabla en relación con otra, tendremos que usar la cláusula `CREATE TABLE` de SQL donde definiremos las `FOREIGN KEYS`:

```sql
CREATE TABLE IF NOT EXISTS olympic_atheltes (
  id SERIAL PRIMARY KEY,
  olympic_game_name VARCHAR(255) NOT NULL,
  year INT NOT NULL,
  athlete_id INT NOT NULL,
  CONSTRAINT FK_athlete_id FOREIGN KEY (athlete_id) REFERENCES athletes(id)
);
```

> En esta query estamos creando una tabla `olympic_athletes` con las columnas `id, olympic_game_name, year, athlete_id` donde la columna `athlete_id` es un número entero que actúa como `FOREIGN KEY` o `Clave Foránea` que apunta a la `id` de una fila de la tabla `athletes`. Esta condición de Clave Foránea viene definida por la `CONTRAINT` llamada `FK_athlete_id`.

- Si ahora insertamos algún valor en la tabla `olympic_athletes` y no le pasamos un valor `athlete_id` válido que exista como `id` en `athletes`, la query no funcionará.

Dado el elemento siguiente en la tabla `athletes`:

```sql
SELECT * FROM public.athletes;
```

| id  | name   | surname |
| --- | ------ | ------- |
| 4   | simone | biles   |

Si introducimos un elemento en `olympic_athletes` con una `id` no válida, aparecerá un error en `pgAdmin`:

```sql
  INSERT INTO public.olympic_athletes(olympic_game_name, year, athlete_id)
  VALUES ('Rio de Janeiro', 2016, 10);

  -- ERROR: Key (athlete_id)=(9) is not present in table "athletes" ❌
```

> En cambio, si introducimos una `id` válida como la que tiene el valor `4`, podremos crear una nueva fila con una columna `athlete_id` en `olympic_athletes` que apunta al elemento `4` de la tabla `athletes`.
