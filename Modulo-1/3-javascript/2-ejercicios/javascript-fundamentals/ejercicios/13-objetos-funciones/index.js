// 1. Dada la función "printPersons" que recibe un array de objetos llamado "persons",
// y un string "property", completa la función para que recorra dicho array con un
// bucle e invoque un console.log con la propiedad "property" de cada objeto
const printPersons = (persons, property) => {
  for (var i = 0; i < Object.keys(persons).length; i++) {
    console.log(persons[i][property]);
  };
};

// 2. Crea la función addProperty para que reciba un objeto, una propiedad y valor nuevos,
// y un boolean. Si el boolean es true, que cree una copia de dicho objeto, añada la
// nueva propiedad + valor y lo retorne. Si el boolean es false, que retorne directamente
// el mismo objeto (misma referencia)
const addProperty = (obj, key, value, boolean) => {
  if (boolean == true){
    const copyObj = Object.assign({}, obj);
    copyObj[key] = value;
    return copyObj;
  }else return obj;
 };

// 3. Crea la función getPeopleWeight para que reciba un array con [clave, valor,...]
// donde "clave" es el nombre de las personas y "valor" su peso en kg, y devuelva
// un objeto con solo las personas (clave) y su peso (valor) que tengan un peso
// par y por encima de 60kg.
// Example of array => peopleArr = ["Juan", 72, "Maria", 58, "Martin", 75, "Sofia", 62];
// ha que recorrer el array con indice i para los nombres y con i + 1 para el peso
// por eso los valores clave "nombres" se recorren en saltos de 2 dentro del array.
const getPeopleWeight = (array) => {
  const people = {};
  for (let i = 0; i < array.lenght; i += 2) {

    if(array[i + 1] % 2 === 0 && array[i + 1] > 60 ) {
      people['name'] = array[i];
      people['kg'] = array[i + 1];

    }

  } 
  console.log(people.name);

  return people;
};

// const getPeopleWeight = (array) => {
//   const peopleObj = {};
//   for (let i = 0; i < array.length; i += 2) {
//     //console.log(array[i], 'tiene: ',array[i + 1],' y ');
//     if (array[i + 1] % 2 === 0 && array[i + 1] > 60) {
//       const key = array[i];
//       const value = array[i + 1];

//       peopleObj[key] = value;
//     }
//   }
//   console.log(peopleObj);

//   return peopleObj;
// };

// ///////////////////////////////////////////////////////////////
// ⬇️ NO TOCAR ESTA PARTE O ROMPERÁS LOS TESTS ⬇️
export default {
  printPersons,
  addProperty,
  getPeopleWeight,
};
// ///////////////////////////////////////////////////////////////
