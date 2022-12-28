# 01 - Video Creación Tablas

- Para trabajar con nuestra base de datos PostgreSQL usaremos [PGAdmin](https://www.pgadmin.org/). Descarga e instala la versión para tu sistema operativo.

- Si queremos lanzar una base de datos en Docker utilizando la imagen de **PostgreSQL** que descargamos en la preparación de nuestro equipo, usaremos este comando:

```bash
docker run --name <NOMBRE_DE_MI_CONTENEDOR> -p 5432:5432 -e POSTGRES_USER=<MI_USER> -e POSTGRES_PASSWORD=<MI_PASSWORD> -d postgres
```

> Sustituye cada elemento que encuentres envuelto en tags <NOMBRE_DE_MI_CONTENEDOR> por un nombre adecuado según has visto en el video. Recuerda no usar los tags después de cambiarlo (<NOMBRE_DE_MI_CONTENEDOR> => postgres_learning).

- Crearemos una base de datos desde **pgAdmin** directamente, le daremos nombre (por ejemplo `learning`) y navegaremos hasta los `Schemas` y entraremos en `public`. Aquí tendremos una pestaña llamada `Tables` donde tendremos las tablas de nuestra base de datos.

Las tablas se pueden crear a mano desde la interfaz, pero vamos a escribir código SQL para crearlas y aprender! 💻

- Aquí un ejemplo del SQL para crear una tabla según lo visto en el video con algún campo adicional:

```sql
CREATE TABLE IF NOT EXISTS athletes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  surname VARCHAR(255) NOT NULL,
  age INT NOT NULL,
  created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

Con esto, crearemos una tabla `athletes` si la tabla no existe, con las columnas `id, name, surname, age, created_on` cada una con su propio tipo, restricciones...

- Para seleccionar todos los elementos de la tabla, podemos lanzar un script de SQL en la `Query Tool` de **pgAdmin** de la siguiente forma:

```sql
SELECT * FROM public.athletes
ORDER BY id ASC;
```
