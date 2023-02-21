## Pasos a seguir:

1. Entrar en Github - clonar el repositorio de movies-api
2. Ejecutamos el comando npm install
3. Observamos el fichero package.json
  3.1. En el apartado scripts, observamos que hay un script llamado start
  3.2. En el apartado dependencies, observamos que hay un paquete llamado express
4. Ejecutamos el comando npm start
5. Observamos que se ha creado un fichero llamado package-lock.json
6. Observamos el fichero index.js
  6.1. Vemos los elementos que estamos importando - librerias
  6.2. Uso de una fucnción para conectarnos a nuestra DB - voy al fichero para ver el código
  6.3. Explorar las rutas / endpoints creados bajo route-controller-model.
  6.4. Cada route - llama a una función del controller.
  6.5. Cada función controller -> comunicarse con nuestro ODM para recuperar o enviar datos a la DB.
7. Inicializa la config de Dotenv -> para usar variables de entorno.
8. Inicializamos express.
9.Config CORS.
10. Ejecutamos la conexión a la DB.
11. Cuando termine -> levantar un server para escuchar las peticiones.