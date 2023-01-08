# 04 - Video | Borrado de Filas

Ahora que sabemos escribir y leer en nuestra base de datos, toca aprender a borrar elementos para completar nuestro control sobre las tablas.

- Para borrar un elemento de una tabla, usaremos la cláusula `DELETE`:

```sql
DELETE FROM public.athletes
WHERE id = 6;
```

> Esta query borrará un elemento de la base de datos en la tabla `athletes` con `id` de valor `6`. Es recomendable borrar de forma general usando la `id` ya que es un campo específico y único, permitiendo un borrado más rápido y directo.

- Ten cuidado usando `DELETE` sin especificar la cláusula `WHERE` o borrarás toda la tabla completa 😱

```sql
DELETE FROM public.athletes;
```

> Esta query borarrá toda la información de la tabla `athletes`.
