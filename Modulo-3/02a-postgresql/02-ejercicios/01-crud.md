# Ejercicio 01 - CRUD en PostgreSQL

Para completar este ejercicio debes haber visto al menos el contenido en video hasta que comenzamos a trabajar con las claves foráneas (no incluido). Hasta el momento has aprendido a:

- Crear tablas y estructurar columnas.
- Crear, leer, editar y borrar elementos (CRUD).

Sabiendo el significado de estos conceptos y habiendo visto como los usamos, vamos a proponerte el siguiente ejercicio.

## Enunciado

Antes de comenzar, ten en cuenta que tienes diferentes opciones para preparar tu base de datos, elige la que más cómoda te resulte. Esto aplicará a todos los ejercicios que sigan a este mismo:

- Puedes crear una nueva base de datos y trabajar en su esquema `public`.
- Puedes crear un nuevo esquema en la base de datos con el nombre del ejercicio `crud` y trabajar dentro.
- Puedes aprovechar el esquema `public` de tu actual base de datos y crear las tablas que te hagan falta.

---

Para crear tu primer CRUD, el objetivo que tedrás será el de crear una tabla en tu base datos a la que llamaremos `pokemon`. En esta tabla representaremos una entidad con la información adecuada para tener los datos de un Pokémon.

Los campos de la tabla `pokemon` serán:

- Columna `id` que se comporte como serial y sea su clave primaria.
- Columna `name` que se comporte como un varchar con un máximo de 255 caracteres, que no sea nullable y que sea único (no pueda repetirse entre elementos).
- Columna `type_1` que será el primer tipo del pokemon, será no nullable y con valor por defecto `normal`.
- Columna `type_2` que será el segundo tipo del pokemon, será nullable ya que es opcional.
- Columna `height` que será la altura del pokemon en cuestión, será un número en decimales (no entero) y no nullable.
- Columna `weight` que será el peso del pokemon en cuestión, será un número en decimales (no entero) y no nullable.
- Columna `stats` que será el total de poder del pokemon, será un número entero y no nullable.
- Columna `evolves` que será un boolean no nullable, con valor por defecto `false` en caso de no pasarlo al crear una nueva entidad. Representa si un pokemon puede evolucionar.

> Una vez tengas la sentencia de SQL para crear esta tabla, lánzala en la `Query Tool` dentro de `pgAdmin` y comprueba que se crea correctamente. Ahora vamos a añadir elementos a nuestra tabla.

Ahora debes crear varias sentencias SQL para insertar elementos en la tabla `pokemon`. Añade los siguientes elementos (si en la tabla que te damos a continuación un campo está vacío, es que no debes usarlo en la query de ese pokemon):

| id  | name      | type_1 | type_2 | height | weight | stats | evolves |
| --- | --------- | ------ | ------ | ------ | ------ | ----- | ------- |
|     | bulbasaur | planta |        | 0.7    | 6.9    | 318   | true    |
|     | ivysaur   | planta | veneno | 1.0    | 13.0   | 405   | true    |
|     | venusaur  | planta | veneno | 2.0    | 100.0  | 525   | false   |

> Con estos datos deberías poder crear tres queries, una para cada pokemon, que permita insertarlos en la base de datos. Si añadiste bien la condición de que `name` sea único, no deberías poder añadir un nuevo `bulbasaur` hasta que borres el que ya exista.

Ahora vamos a crear dos sentencias para leer la información de la tabla `pokemon`.

- Escribe una sentencia SQL que permita leer los elementos de la tabla pokemon que tengan como `type_1` o `type_2` el valor `veneno`, y que sean capaces de evolucionar, es decir, cuyo campo `evolves` sea `true`. Esto debería devolver únicamente una entrada, la del pokemon llamado `ivysaur`.
- Escribe una sentencia SQL que permita leer todos los elementos que tengan un nombre que termine con la palabra `saur` y tengan un valor `stats` menor de 400 o mayor de `500`. Esto debería devolver dos entradas, una para `bulbasaur` y otra para `venusaur`.

> Con estas queries habrás aprendido a filtrar elementos con múltiples condiciones unidas! Vamos a por la edición de elementos!

Ahora te toca demostrar que has aprendido a editar elementos. Antes de nada, crea una sentencia SQL para insertar en la tabla un elemento que tenga los siguientes valores:

| id  | name    | type_1    | type_2 | height | weight | stats | evolves |
| --- | ------- | --------- | ------ | ------ | ------ | ----- | ------- |
|     | pikachu | electrico | fuego  | 0.4    | 6.0    | 600   | false   |

Ahora resulta que nos hemos equivocado y el pokemon que acabamos de añadir tenía algunos errores de definición! Vas a crear una query de edición que busque un pokemon cuyo nombre sea `pikachu` y cambie los valores:

- El campo `type_2` debe cambiar su valor a `null`.
- El campo `stats` debe cambiar su valor `320`.
- El campo `evolves` debe cambiar su valor a `true`.

> Crea ahora una query de lectura de la base de datos en la que busques un pokemon cuyo nombre sea `pikachu` y comprueba que se han aplicado los cambios.

Para terminar, vas a crear una query que borre todos los elementos de la tabla `pokemon` que no evolucionen. Recuerda, especifica bien de que tabla y bajo que condición quieres borrar los elementos! La condición será que el campo `evolves` tenga como valor `false` y por tanto debería afectar al pokemon `venusaur`.

> Si has escrito la query de borrado correctamente, y utilizas después la segunda query de lectura que creaste (la que devolvía a `bulbasaur` y `venusaur`), ahora solo deberías obtener una entrada `bulbasaur` en los resultados de lectura.

## Bonus

Una vez hayas completado el ejercicio, te dejamos un bonus para que investigues el uso de las `CONSTRAINT` al crear tablas.

Modifica la query de creación de la tabla `pokemon` de forma que haya una condición que especifique que `type_1` y `type_2` para un mismo elemento no pueden ser iguales.

Puedes leer más sobre estas condiciones aquí https://www.postgresql.org/docs/current/ddl-constraints.html.
