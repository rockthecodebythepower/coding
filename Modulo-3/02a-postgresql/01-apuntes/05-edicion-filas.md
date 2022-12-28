# 05 - Video Edición de Filas

Ya sabemos leer, crear y borrar, nos falta saber editar para saber hacer un CRUD `(create, read, update, delete)`.

- Para editar un elemento de la base de datos usaremos la cláusula `UPDATE` acompañada de `WHERE`:

```sql
UPDATE public.athletes
SET name = 'usain'
WHERE id = 7;
```

> Esta query actualizará el elemento con la `id = 7` de la tabla `athletes` de forma que la columna `name` obtendrá el valor `usain`.

- Podemos cambiar varios campos a la vez de la siguiente forma, separándolos por comas:

```sql
UPDATE public.athletes
SET name = 'usain', surname = 'bolt'
WHERE id = 7;
```

> Esta query actualizará las columnas `name, surname` del elemento con `id = 7` de la tabla `athletes`.
