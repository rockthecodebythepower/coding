# Proyecto 7: API rest

## Enunciado de proyecto

Este será tu primer proyecto de Node, Express y MongoDB en Rock{theCode}, ¡prepárate para crear tu primer servidor!

Para preparar este proyecto, sigue los siguientes pasos:

- Crea una carpeta para el proyecto.
- Navega a la carpeta y lanza `npm init -y`.
- Instala las dos dependencias principales con `npm i express mongoose`.
- Asegúrate de tener Mongo preparado ya sea instalado o con Docker.
- Prepara tu server para escuchar en el puerto 4001 tal y como hemos explicado en clase y has visto en los videos del contenido.
- Crea un archivo .gitignore en la raíz de tu proycto y añade dentro el texto `node_modules` para no subir la carpeta de módulos instalados a Github.
- Lanza ahora `git init` e inicializa tu repositorio. Crea un repositorio en Github y haz commit/push del contenido.

En este proyecto tendrás que crear un servidor de **Express** que trabaje con **MongoDB** a través de mongoose. Conectarás tu proyecto cuando el servidor se inicialice.

Tendrás que definir un modelo de datos, del tipo que prefieras, ya que va a ser tu primera API y queremos que la crees de lo que más te guste (coches, ropa, videojuegos, libros…). Simplemente necesitas cumplir una serie de requisitos de aceptación que usaremos para evaluarlo.

### Criterio de aceptación

Estos criterios son generales y estarán referidos al servidor y base de datos. Cumplirlos es obligatorio para considerar el proyecto completado y que podamos así certificarte como Backend Developer una vez acabez todos los proyectos.

- [ ]  El servidor arranca en el puerto 4001 cuando lanzo el comando `npm run start`.
- [ ]  El servidor se conecta con una base de datos MongoDB en mi equipo local que corre en el puerto 27017.
- [ ]  En el README del proyecto están definidos los endpoints que tengo a mi disposición.
    - [ ]  Hay un endpoint GET que me permite traer todos los documentos de un tipo de colección.
    - [ ]  Hay un endpoint GET que me permite traer un solo elemento por su id de una colección.
    - [ ]  Hay un endpoint POST que me permite crear un nuevo elemento en la colección correspondiente.
    - [ ]  Hay un endpoint PUT que me permite crear editar un elemento por su id en una colección.
    - [ ]  Hay un endpoint DELETE que me permite borrar un elemento por su id en una colección.
- [ ]  El modelo de datos de MongoDB es un objeto con **al menos cuatro claves distintas**, aquí un ejemplo de algo esperable:

```jsx
const document = {
  _id: 'id_del_documento',
  name: 'Pepe',
  surname: 'Rocker',
  job: 'Full Stack',
  studies: 'Rock{theCode}'
}
```

- [ ]  El **servidor no se rompe si pido una URL no existente**, es decir, dispone de un middleware para capturar errores 404 o rutas no encontradas.
- [ ]  Los **códigos de red son correctos** cuando hago peticiones (200 y 201 para objetos creados).