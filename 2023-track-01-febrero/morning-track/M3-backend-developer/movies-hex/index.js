//Vamos a obtener el puerto de config, vamos a levantar el servidor y vamos a utilizar nuestros logs magicos
const config = require('config-yml');
const server = require('./src/server/index');
const magic = require('./src/utils/magic');

//Levantamos el servidor
server.listen(config.port, () => {
  magic.LogSuccess(`Server running on http://localhost:${config.port}`);
});

//Control minimo de errores
server.on('error', (err) => {
  magic.LogDanger(err);
});
