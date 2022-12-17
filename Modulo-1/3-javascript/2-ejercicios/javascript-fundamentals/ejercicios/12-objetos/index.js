// 1. Crea la función printCar de forma que acepte un objeto "car"
// como argumento e invoque un console.log con su propiedad "model"
function printCar(car){
  return console.log(`${car.model}`);
}

// 2. Crea la función printCountry de forma que acepte dos argumentos, primero
// un objeto llamado "country" y después un string "key", e invoque un console.log
// con la propiedad "key" del objeto "country"
function printCountry(country, key){
  return console.log(`${country[key]}`);
}

// 3. Crea la función "deleteProperties" de forma que acepte dos argumentos, primero
// un objeto llamado "person" y después un string "property". Dentro de la función,
// elimina dicha propiedad del objeto "person" e invoca un console.log del objeto
function deleteProperties(person, property){
  delete person[property];
  console.log(person);
}


// ///////////////////////////////////////////////////////////////
// ⬇️ NO TOCAR ESTA PARTE O ROMPERÁS LOS TESTS ⬇️
export default {
  printCar,
  printCountry,
  deleteProperties,
};
// ///////////////////////////////////////////////////////////////
