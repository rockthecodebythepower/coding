const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("data.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
//Si le cambiamos el numero de puerto se levantará en un localhost diferente
//Por lo tanto nuestros endpoints estarán en htpp://localhost:8080/->

//Es importante tener en el script dev "node index.js", el se encargará de levantar el json serverç

//Importante tener en el gitignore node_modules
server.listen(8080, () => {
  console.log("JSON Server is running");
});