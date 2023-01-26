// Devuelve un array con todos los nombres en mayúsculas
const getNamesInUpperCase = (elements) => {
  // const upperElements = [];

  // for (let i = 0; i < elements.length; i++) {
  //   const element = elements[i];
  //   const upperElement = element.toUpperCase();
  //   upperElements.push(upperElement);
  // }

  // return upperElements;

  const upperElements = elements.map((element) => {
    const upperElement = element.toUpperCase();
    return upperElement;
  });

  return upperElements;
};

const teams = ['Argentina', 'España', 'Alemania', 'Japón'];
const result = getNamesInUpperCase(teams);
console.log(result);
