// 1. Asigna a la variable "promise" una promesa que se resuelva con el string "me he resuelto!"
const promise = new Promise((resolve, reject) => {
  console.log (`${resolve("me he resuelto")}`);
  reject("tio en Alcala ni tio ni ná");
});
//promise.then((value) => { console.log(value) });
promise.catch((error) => { console.log(error) });

// 2. Asigna a la variable "promiseError" una promesa que se rechace con el string "me han rechazado!"
const promiseError = new Promise((reject) => {
  console.log (`${reject("me han rechazado")}`);
});

// 3. Dada la función "resolvePasta", completa la función "getPasta" para que invoque a
// la función "resolvePasta" con el argumento "pasta" y luego la resuelva (.then) invocando
// a console.log con la respuesta
const resolvePasta = (pasta) => new Promise((resolve) => resolve(pasta));

const getPasta = (pasta) => {
  // Completa el código ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇
  resolvePasta(pasta)
  .then((toConsole) => console.log(toConsole));
};
  // Completa el código ⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆


// --EXTRA-- Dada la función "getAnimals", completa la promesa .then dentro de la función
// addAnimals para que añada al final del array el animal "tiger". Luego resuelve dicha
// promesa concatenando otro .then e invocando su resultado con un console.log

const getAnimals = () => new Promise((resolve) => resolve(["lion", "panda"]));

const addAnimals = () => {
  return getAnimals().then(
    (animals) =>
      new Promise((resolve) => {
        // Completa el código ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇
        // Completa el código ⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆
      })
  );
  // Completa el código ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇

  // Completa el código ⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆
};

// --GOD MODE-- Dada la función "extraPromise", completa la variable con "promise" con
// una promesa que resuelva "estoy resuelto" o se rechace con "he sido rechazado" dependiendo
// del boolean "isResolved". Después retorna la resolución de "promise" con .then y .catch concatenados para
// que invoque a console.log con su correspondiente respuesta
const extraPromise = (isResolved) => {
  var promise = new Promise((resolve, reject) => {
    // Completa el código ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇
    // Completa el código ⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆
  });
  // Completa el código ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇

  // Completa el código ⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆
};

// ///////////////////////////////////////////////////////////////
// ⬇️ NO TOCAR ESTA PARTE O ROMPERÁS LOS TESTS ⬇️
export default {
  promise,
  promiseError,
  getPasta,
  addAnimals,
  extraPromise,
};
// ///////////////////////////////////////////////////////////////
