# 07 - Video Migraciones

Cuando en una base de datos SQL necesitamos cambiar la estructura de las tablas (columnas, tipos, claves foráneas...), crear nuevas tablas y relaciones, hacemos lo que se conoce como una **migración**.

> Hay que tener en cuenta que las migraciones deben estar bien organizadas, con archivos fechados para tener siempre constancia del orden en el que se han ejecutado (como si fuesen un histórico), y debemos ser capaces de hacer "rollback", es decir, dar un paso atrás al estado anterior de la base de datos en caso de que la migración fallase.

- Un ejemplo de migración sería alterar una tabla para que tenga una nueva columna. En el video hacemos el siguiente ejemplo sobre la tabla `olympic_athletes`:

```sql
ALTER TABLE public.olympic_athletes
ADD COLUMN discipline VARCHAR(255);
```

> Esta query está añadiendo una columna `discipline` a la tabla `olympic_athletes` que sea un conjunto de caracteres en formato texto con un límite de longitud de 255 caracteres.

Hay que tener cuidado cuando hacemos la migración ya que si añadimos columnas `NOT NULL` que no sean nullables, fallará ya que a los elementos que ya existen en la base datos tendrán `null` en ese nuevo campo. Habría que hacer la migración en dos fases o llenar las columnas de los elementos existentes con algún valor por defecto.

- Para borrar una columna podemos usar:

```sql
ALTER TABLE public.olympic_athletes
DROP COLUMN discipline;
```

> Esta query está borrando la columna `discipline` que acabamos de crear para la tabla `olympic_athletes`.

## Tecnologías para facilitar migraciones

Como las migraciones son algo complicadas y difíciles de organizar correctamente, usamos normalmente herramientas específicas para gestionarlas en proyectos puestos en producción.

Una de las librerías de todas las que hay para hacer migraciones de `PostgreSQL` con Node, muy utilizada y relativamente fácil de gestionar, es [node-pg-migrate](https://github.com/salsita/node-pg-migrate).

También se usan **ORM** (Object-Relational Mapping), herramientas para abstraer las queries que escribimos en SQL y no escribir estas queries en bruto. Un ejemplo de ORM es [Objection](https://vincit.github.io/objection.js/) o [Sequelize](https://sequelize.org/).
