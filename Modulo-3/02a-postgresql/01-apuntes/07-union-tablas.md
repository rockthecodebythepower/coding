# 07 - Video Unión de tablas

Cuando tenemos varias tablas relacionadas entre si, puede ser que queramos leer el contenido de una de ellas y traer también la información de la fila de la tabla con la que hay relación. Para ello tendremos que especifir a **PostgreSQL** que queremos hacer una unión o `JOIN` entre ambas tablas.

> Hay muchos tipos de `JOIN`, pero como habrás podido ver en el video, nos centraremos en `LEFT JOIN` e `INNER JOIN`.

## LEFT JOIN

Usando `LEFT JOIN` uniremos la tabla a la que estamos la query principal a la izquierda de la tabla objetivo que contiene las filas con las que buscamos relacionar nuestras filas.

```
TABLA QUE BUSCO Y TIENE CLAVES FORANEAS | **LEFT JOIN** | TABLA QUE CONTIENE IDs QUE ACTUAN COMO CLAVES FORANEAS
```

- Para lanzar una query que hace un `LEFT JOIN` entre mi tabla principal y la tabla que buscamos relacionar, usamos la cláusula `LEFT JOIN`:

```sql
SELECT * FROM public.olympic_athletes
LEFT JOIN public.athletes
ON public.olympic_athletes.athlete_id = public.athletes.id;
```

> Esta query selecciona todos los campos que pueda del resultado de unir la tabla `olympic_athletes` por la izquierda de `athletes`, uniendo las filas que tienen un valor coincidente en `athlete_id` de la tabla `olympic_athletes` e `id` de la tabla `athletes`.

Como podrás observar en el video y probando por tu cuenta, esto traer TODA la tabla a la que unimos nuestra tabla principal por la izquierda, y por tanto habrá información innecesaria. A veces esto es muy bueno para iterar con nuestro código en **Node**, pero normalmente podremos optimizar más esta query para traer únicamente lo que sea necesario.

## INNER JOIN

Usando `INNER JOIN` uniremos los elementos de la tabla principal que buscamos en la query con los elementos de la tabla objetivo a unir y traerá únicamente los elementos que tienen una relación que se cumpla.

- Para replicar la query anterior y traer información más precisa usando `INNER JOIN`:

```sql
SELECT * FROM public.olympic_athletes
INNER JOIN public.athletes
ON public.olympic_athletes.athlete_id = public.athletes.id;
```

## Limpiando las queries

Como has podido ver en el video del contenido, podemos crear `aliases` para cada tabla que buscamos en nuestra query `SELECT`:

```sql
SELECT * FROM public.olympic_athletes AS oa
INNER JOIN public.athletes AS a
ON oa.athlete_id = a.id;
```

> En esta query estamos haciendo que `public.olympic_athletes` se convierta en `oa`, como si fuese una variable en JavaScript para usar en esta query referenciando a la tabla. Lo mismo hacemos con `public.athletes` que podremos referencias con `a`.
