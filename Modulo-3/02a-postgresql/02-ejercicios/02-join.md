# Ejercicio 02 - JOIN en PostgreSQL

Para completar este ejercicio debes haber visto al menos el contenido en video hasta que comenzamos con el proyecto de Node y PostgreSQL. Por lo que debes haber aprendido a:

- Crear tablas y estructurar columnas.
- Crear, leer, editar y borrar elementos (CRUD).
- Relacionar tablas mediante columnas de claves foráneas.
- Usar JOIN para unir tablas entre si al leer de la base de datos.
- Alterar una tabla de la base de datos para modificar sus campos.

## Enunciado

Para preparar el ejercicio, añadirás más entradas a la tabla `pokemon` que creaste en el ejercicio anterior, pero antes, vamos a definir una nueva tabla y haremos una pequeña migración utilizando `ALTER TABLE` para relacionar la tabla `pokemon` con la nueva tabla, de forma que podamos aprovechar los `JOIN`.

### **Parte 1**

En SQL es importante pensar y estructurar la información con la que trabajamos para crear tablas adecuadas y referencias. En el ejercicio anterior hiciste que los elementos de la tabla `pokemon` pudiesen tener dos columnas `type_1` y `type_2` con un valor `VARCHAR`. Si conoces el mundo `Pokémon` te habrás dado cuenta de que de esta forma, podríamos guardar un tipo inexistente en la tabla sin darnos cuenta. En caso de que no lo conozcas, los `Pokémon` pueden tener hasta dos tipos simultáneamente, y estos tipos son un conjunto de valores que no va a cambiar, es decir, todo `Pokémon` que esté relacionado con las plantas será de tipo `planta` y no será tipo `hoja` o tipo `hierba`.

Teniendo esto en cuenta al plantear una base de datos más completa, te vamos a pedir que crees una tabla `types`, en la que insertarás una fila por cada tipo de pokemon, para así tener valores que nunca van a cambiar y que podamos usar sus `id` como valores para relacionar nuestros elementos de la tabla `pokemon` con los `types`.

La tabla estará definida por tres campos:

- Un campo `id` serial que actúe como clave primaria.
- Un campo `name` VARCHAR de 255 caracteres y que no sea nullable y a su vez debe ser único. Representará el nombre del tipo.
- Un campo `color` VARCHAR de 255 caracteres y que no sea nullable y a su vez debe ser único. Representará el color principal del tipo.

Introduce en la tabla los siguientes valores:

| id  | name      | color  |
| --- | --------- | ------ |
|     | planta    | green  |
|     | fuego     | red    |
|     | agua      | blue   |
|     | electrico | yellow |
|     | veneno    | purple |

### **Parte 2**

Ahora que tienes los `types` creados, toca hacer la migración de la tabla `pokemon`. Vamos a hacer un cambio para que las columnas `type_1` y `type_2` sean claves foráneas que apunten a la tabla `types`.

Antes de nada, limpia el contenido de la tabla `pokemon` para evitar conflictos con el ejercicio anterior:

```sql
DELETE FROM pokemon;
```

Ahora crea una migración a través de `ALTER TABLE` con las siguientes condición:

- `type_1` y `type_2` deben ser FOREIGN KEYS que apunten a `types` al campo `id`.

Para darte una pista, ya que la sintaxis es un tanto distinta y necesita que investigues, te dejamos un ejemplo de migración que combina las claves foráneas. Es un ejemplo incompleto y tendrás que cambiar los nombres adecuadamente:

```sql
ALTER TABLE tabla_de_pokemon
ADD CONSTRAINT FK_type_1_id
FOREIGN KEY (tipo_1)
REFERENCES tabla_de_tipos (id);
```

Una vez cambies esta query y lances la migración para `type_1` y la migración para `type_2`. Vuelve a introducir varias entradas de pokemon como hiciste en el ejercicio anterior, solo que ahora los campos `type_1` y `type_2` deben ser las `id` de elementos de la tabla `types`:

| id  | name       | type_1 | type_2 | height | weight | stats | evolves |
| --- | ---------- | ------ | ------ | ------ | ------ | ----- | ------- |
|     | bulbasaur  | 1      |        | 0.7    | 6.9    | 318   | true    |
|     | venusaur   | 1      | 5      | 2.0    | 100.0  | 525   | false   |
|     | charmander | 2      |        | 0.6    | 8.5    | 318   | true    |
|     | pikachu    | 4      |        | 0.4    | 6.0    | 320   | true    |

> Los valores de `type_1` y `type_2` son orientativos y basados en nuestro ejemplo, las `id` de cada uno pueden ser diferentes en tu ejercicio, compruébalo bien antes de introducir las filas!

### **Parte 3**

Ahora que tienes valores en tu base datos y están relacionados entre si, te queda leer todo el conjunto. Te vamos a pedir las siguientes queries:

- Crea una query que utilice `LEFT JOIN` para unir todos los pokemon de tipo `planta` de la tabla `pokemon` con todos los elementos de la tabla `types` que correspondan con ese tipo. Como **bonus**, intenta que no aparezcan resultados en la query que no correspondan ningún `pokemon` con ningún `tipo`. (deberías tener como resultado dos entradas)

- Crea una query que devuelva una unión usando `INNER JOIN` de todos los elementos de la tabla `types` que tengan como campo `color` los valores `red` y `yellow` y los `pokemon` correspondientes para cada uno. (deberías tener como resultado dos entradas)

- Crea una query que devuelva una unión usando `INNER JOIN` de todos los elementos de la tabla `pokemon` que tengan valor diferente a NULL en las tablas `type_1` y `type_2` simultáneamente, de forma que los resultados contengan la información de los `types`
