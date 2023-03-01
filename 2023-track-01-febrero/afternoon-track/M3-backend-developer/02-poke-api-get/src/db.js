const mongoose = require('mongoose');

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose.set('strict', false); // Con esta opción mongoose no utiliza esquemas para validar la informacion
mongoose.set('strictQuery', false); // Con esta opción mongoose no valida contra esquemas al hacer queries
mongoose.set('strictPopulate', false); // Con esta opción mongoose permite hacer populate sin definirlo en esquemas

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@rockthemongo.kkf4buu.mongodb.net/team-rocket?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log('Conectado a mongoDB');
  })
  .catch((err) => {
    console.error(err);
    // Con esto cerramos el server directamente en caso de error
    process.exit(1);
  });
