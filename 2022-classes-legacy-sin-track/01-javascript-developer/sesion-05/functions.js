// Función
function sayHello() {
  console.log('Hola!');
}

// Función anónima
// var sayHello = function () {
//   console.log('Hola!');
// };

// // Función anónima flecha
// var sayHello = () => {
//   console.log('Hola!');
// }

// //////////////////
// sayHello(); // => console.log('Hola!');

// sayHello(); // => console.log('Hola!');

// ARGUMENTOS
var callPerson = (personName) => {
  console.log(`Hola ${personName}!`);
};

callPerson('Rubén'); // => console.log(`Hola Rubén!`)
callPerson('Beatriz'); // => console.log(`Hola Beatriz!`)
callPerson(3);

// ARGUMENTOS ERRONEOS
var myDogName = 'My dog name is Curro';
var dogSlice = myDogName.slice(false, []);
console.log('El dog slice es:', dogSlice);

var sum = (num1, num2) => {
  return num1 + num2;
};

var isFalse = false;
var hello = 'hola';

var wrongSum = sum(isFalse, hello); // return false + 'hola';
console.log('WrongSum =>', wrongSum);

var total = sum(3, 4); // return 3 + 4;
total = sum(6, 4); // => return 6 + 4;

if (total >= 10) {
  console.log('He aprobado!');
} else {
  console.log('He suspendido!');
}
