# 02 - Video | Creación Filas

Antes de trabajar necesitamos que nuestra base de datos contenga información, por lo que vamos a aprender a introducir "filas" en nuestras tablas.

- Abrimos la `Query Tool` y lanzamos el siguiente script SQL como vemos en el video:

```sql
INSERT INTO public.athletes(name, surname, age)
VALUES ('usain', 'bolt', 40);
```

Aquí estaremos introduciendo una nueva fila en la tabla `athletes`, cuyos campos `name, surname, age` tienen los valores que pasamos en `VALUES(...)` en nuestro script.

> No mandamos un `id` porque lo creamos como **SERIAL**, que es un entero autoincremental y único como clave primaria que representa cada fila. Habrá pocos casos en los que queramos establecer la `id` por nuestra cuenta, normalmente dejaremos que `PostgreSQL` la gestione por nosotros.

> No mandamos el campo `created_on` porque hicimos que tuviese un valor por defecto al crear la tabla, por lo que se creará inmediatamente si no lo enviamos nosotros con la fecha que la base de datos considere.
