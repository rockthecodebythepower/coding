# Ejercicio 03 - Seeds en Node y PostgreSQL

Para completar este ejercicio debes haber visto todo el contenido en video del módulo de backend, sección SQL.

## Enunciado

Este enunciado tendrá pocas pistas y será conciso, vas a trabajar con `Node` y `PostgreSQL` para crear tu primera **seed**.

Esta `seed` la harás siguiendo los videos de SQL para el ejercicio final como ejemplo, y usarás `Node` en tu proyecto acompañado de la librería `pg` para conectar y hacer queries a tu base de datos en PostgreSQL.

> Como recomendación, haz un borrado de las tablas con las que has trabajado hasta ahora para empezar todo desde cero, ya que la seed, como habrás podido ver en los videos, nos permite crear todo desde el principio cada vez que lanzamos el script.

1. Crea un proyecto de `Node` que utilice `pg`, se conecta a `PostgreSQL` y cree las tablas `pokemon` y `types` del ejercicio anterior. Recuerda modificar la tabla `pokemon` para que ya incluya los cambios de la migración en la cláusula `CREATE TABLE`.
2. Convierte los datos para `types` y `pokemon` que hemos introducido en el ejercicio anterior a un `JSON` que introducirás en tu carpeta de proyecto, tal y como hacemos en los videos.
3. Añade código en tu función `main` (recuerda hacerla `async`) para crear las tablas automática y dropearlas al principio del script de forma que siempre que lo lancemos tengamos una base de datos limpia.
4. Añade el código que inserte los `types` sacados del JSON en tu base de datos.
5. Añade el código que inserte los `pokemon` sacados del JSON en tu base de datos. Recuerda haber referenciado los `id` para cada elemento y así hacer que funcione correctamente.
6. Lanza queries de lectura con los `JOIN` del ejercicio anterior y comprueba que todo funciona como esperabas 🚀

> Con estos ejercicios, el contenido en video y práctica, habrás conseguido dominar las bases de las bases de datos SQL a través de PostgreSQL, la herramienta de gestión `pgAdmin`, y la integración de bases de datos con `Node` usando el paquete `pg`. Ahora queda lanzarnos con `Node & Express` para crear nuestras propias APIs e integrarlas con las bases de datos que hemos creado 🎉
