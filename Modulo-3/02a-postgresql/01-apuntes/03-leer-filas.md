# 03 - Video | Lectura de Filas

Ahora que tenemos datos en nuestra tabla `athletes`, podemos aprender a leer sus filas con las combinaciones y filtros que usamos principalmente en bases de datos SQL.

- Desde la `Query Tool`, vamos a crear una query de lectura básica:

```sql
SELECT * FROM public.athletes;
```

> Esta query traerá todos los elementos tal y como están guardados (mismo orden) de nuestra base de datos.

- Si queremos filtrar elementos, podemos usar la cláusula `WHERE` con una condición:

```sql
SELECT * FROM public.athletes
WHERE surname = 'bolt';
```

> Esta query traerá todos los elementos que tengan una columna `surname` con valor `bolt`. Podemos filtrar también por valores numéricos, fechas, booleans...

- Si queremos ordenar los resultados que objetemos en una query de lectura, podemos usar la cláusula `ORDER_BY`:

```sql
SELECT * FROM public.athletes
WHERE id <6
ORDER BY id DESC;
```

> Esta query traerá todos los elementos con una columna `id` con valor menor que `6` y los ordenará usando el campo `id` de forma `descendente`.

- Si queremos seleccionar solo unas columnas y no todas para los resultados de nuestra query, podemos especificar los campos en `SELECT`:

```sql
SELECT name, surname FROM public.athletes
WHERE surname = 'bolt';
```

> Esta query traerá todos los elementos con `surname` igual `bolt` y solamente mostrará las columnas `name, surname`, omitiendo el resto.

- Para buscar elementos por parecido y coincidencia de texto, podemos usar el símbolo `%` junto con un texto:

```sql
SELECT name, surname FROM public.athletes
WHERE surname LIKE 'b%';
```

> Traerá todos los elementos que tengan una columna `surname` con un valor que comienza por `b` y es seguido por cualquier tipo y cantidad de caracteres.

- Adicionalmente, podemos limitar la cantidad de elementos que leemos de la base de datos con `LIMIT` seguido del número de filas a leer:

```sql
SELECT * FROM public.athletes
LIMIT 3;
```

> Esta query traerá únicamente los `3` primeros elementos que encuentre en la tabla `athletes`, aunque haya un número N de estos realmente.
