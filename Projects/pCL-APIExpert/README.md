# Proyecto Cum Laude: API Expert

## Enunciado de proyecto

Ya has terminado tu camino base para convertirte en Full Stack Developer, pero quieres avanzar más y llegar al siguiente nivel, ¿cierto? Pues con estos dos proyectos que harás a continuación consideraremos que has llegado al nivel Cum Laude en Rock{theCode}, conviertiéndote en un perfil Junior con un muy nivel espectacular 🚀

En estos proyectos no vamos a guiarte tanto como en los anteriores, tendrás que trabajar con el contenido que hay para los módulos restantes y hacer un trabajo de investigación por tu parte para llegar al siguiente nivel.

---

En el proyecto **Api Expert** te vas a convertir en un verdadero expert@ creando APIs y utilizando un stack tecnológico más avanzado. Para este proyecto debes usar:

- Express
- TypeScript
- PostgreSQL
- Supertest

La finalidad de este proyecto es que “repliques” el comportamiento completo de una API tal y como hiciste en el Proyecto 9 de Módulo 3: Backend donde tenías dos modelos de datos relacionados y un modelo usuario que permitía autenticarse.

En este caso habrá una diferencia principal y es que el modelo de datos del usuario debe estar también relacionado con los otros dos modelos, por medio de, al menos, una columna `favorite_a` y otra columna `favorite_b` donde puedas añadir un elemento favorito de cada tipo (debes poder editar ese favorito y eliminarlo de favoritos si el usuario lo desea).

Para esta API, usarás TypeScript con Express y PostgreSQL desde el principio, por lo que tendrás que hacer un buen modelo de datos y explicar en el README del proyecto como lo has estructurado.

Este proyecto estará desplegado en [Fly.io](http://Fly.io) (si prefieres otra alternativa que no hayamos explicado, adelante) y nos proporcionarás la URL del servidor directamente así como el link al repositorio de Github.

### Criterio de aceptación

Los requerimientos a cumplir son los siguientes:

- [ ]  El proyecto está desplegado en [Fly.io](http://Fly.io) y cuenta con una base de datos PostgreSQL.
- [ ]  En el README del proyecto están definidas las tablas para cada modelo de datos correctamente.
- [ ]  Hay al menos tres tablas de modelos distintos, donde una de ellas es para usuarios `users` y puede almacenar un favorito de cada uno de los otros dos modelos.
- [ ]  El proyecto se ha programado con TypeScript, se debe poder comprobar en el repositorio directamente.
- [ ]  Permite hacer todo lo que el **Proyecto 9** permite, con la diferencia de que adicionalmente tiene estos endpoints:
    - [ ]  Un endpoint `/element-a/favorite` de tipo PUT que permite recibir un body que haga que el elemento de la tabla A se añada como favorito en una de las columnas de `users`. Es de tipo PUT porque ese campo será `null` de inicio y lo editaremos con el endpoint.
    - [ ]  Un endpoint `/element-b/favorite` de tipo PUT que permite recibir un body que haga que el elemento de la tabla B se añada como favorito en una de las columnas de `users`. Es de tipo PUT porque ese campo será `null` de inicio y lo editaremos con el endpoint.
    - [ ]  Ambos endpoints deben poder recibir algún campo en el body (a definir por la persona que programe el proyecto) que permita quitar los favoritos para ambas columnas.
- [ ]  Todos los endpoints del proyecto se han testeado con Supertest.
- [ ]  Cuenta con una Github Action para comprobar que los tests pasan y la build funciona antes de desplegar el proyecto.