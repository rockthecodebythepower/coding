// 1. Dada la variable "animal" con el valor "alpaca", aplica a la variable la función `.toUpperCase` y asigna su valor a la variable
// "upperAnimal" para que esta contenga el valor "ALPACA".
var animal = 'alpaca';
var upperAnimal = animal.toUpperCase();

// 2. Dada una variable "motto" que te dejamos a continuación, aplica la función `.slice` a esta variable y asígnale el resultado
// a la variable "shortMotto", de forma que la frase final valga "Aprendemos programación".
var motto = 'Aprendemos programación en ThePower';
var shortMotto = motto.slice(0,23);

// 3. Dada la variable "motto" que hemos usado anteriormente, volveremos a aplicarle la función ".slice" para asignar el resultado a la
// variable "miniMotto", de forma que esta vez nos quedemos con el valor "ThePower".
var miniMotto = motto.slice(27,motto.length);

// 4. Dada la variable "miniMotto" que hemos creado anteriormente, aplícale la función `.toLowerCase` y asigna su valor a "lowerMotto" para
// que esta contenga el valor "thepower".
var lowerMotto = miniMotto.toLowerCase();

// ///////////////////////////////////////////////////////////////
// ⬇️ NO TOCAR ESTA PARTE O ROMPERÁS LOS TESTS ⬇️
export default {
  animal,
  upperAnimal,
  motto,
  shortMotto,
  miniMotto,
  lowerMotto
};
// ///////////////////////////////////////////////////////////////
