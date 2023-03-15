//Importamos los controladores, que no dejan de ser los servicios creados
const apiServices = require('../controller/index');

//Implementamos el servidor con el argumento app que en un futura será el propio server
const routes = (app) => {
  app.use('/api/v1', apiServices);
};

module.exports = routes;
