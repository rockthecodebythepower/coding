// 1. Crea la función printCar de forma que acepte un objeto "car"
// como argumento e invoque un console.log con su propiedad "model"
const printCar = (car) => {
  console.log(car.model);
};

// 2. Crea la función printCountry de forma que acepte dos argumentos, primero
// un objeto llamado "country" y después un string "key", e invoque un console.log
// con la propiedad "key" del objeto "country"
const printCountry = (country, key) => {
  console.log(country[key]);
};

// 3. Crea la función "deleteProperties" de forma que acepte dos argumentos, primero
// un objeto llamado "person" y después un string "property". Dentro de la función,
// elimina dicha propiedad del objeto "person" e invoca un console.log del objeto
const deleteProperties = (obj, property) => {
  delete obj[property];
  console.log(obj);
};

// ///////////////////////////////////////////////////////////////
// ⬇️ NO TOCAR ESTA PARTE O ROMPERÁS LOS TESTS ⬇️
export default {
  printCar,
  printCountry,
  deleteProperties,
};
// ///////////////////////////////////////////////////////////////
