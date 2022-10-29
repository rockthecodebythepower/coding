function main(customNumber = -1, customString = '') {
  var ex1 = 0;
  var ex2 = '';
  // Antes de comenzar, considera que tendrás disponible la variable customNumber,
  // que obtendrá los valores que te indiquemos en el enunciado de cada ejercicio:

  // 1. Dado un customNumber que sea un number cualquiera, mejora la condición del while para:
  // - Si customNumber es un número menor de 0, no debe cumplirse y no entrará al bucle.
  // - Si customNumber es MENOR de 20, debe poder recorrer el bucle tantas veces como pueda.
  // - El bucle debe poder crecer de 1 en 1, y no terminar en un solo loop.
  // Por ejemplo: si customNumber vale 10 => ex1 valdrá X
  // Otro ejemplo: si customNumber vale -2 => ex1 valdrá 0
  // Otro ejemplo: si customNumber vale 0 => ex1 valdrá X
  var i = customNumber;
  while (i < 50) {
    ex1 += 2;

    i += 1000;
  }

  // 2. Dado un customString que sea un string cualquiera, arregla el bucle while para que:
  // - Si el string tiene un número de vocales MAYOR a 3, se asigne a ex2 el valor de customString en mayúsculas
  // - Si las vocales no son mayores de 3, asigna a ex2 el mismo valor de customString
  // - Debe asignarse el valor a ex2 TRAS acabar el bucle while
  // - Debes usar un acumulador para la cantidad de vocales "a", "e", "i", "o", "u" disponibles
  // Por ejemplo: si customString vale alpaca => ex2 debe valer alpaca al no haber más de 3 vocales
  // Otro ejemplo: si customString vale instrumento => ex2 debe valer INSTRUMENTO al haber más de 3 vocales
  let j = 0;
  let vowels = 0;
  while (j < customString.length) {
    var letter = customString[i];

    if (true) {
      vowels += 1;
    }

    j++;
  }

  if (vowels > 10) {
    ex2 = customString;
  }

  return {
    ex1,
    ex2,
  };
}

// ///////////////////////////////////////////////////////////////
// ⬇️ NO TOCAR ESTA PARTE O ROMPERÁS LOS TESTS ⬇️
export default { main };
// ///////////////////////////////////////////////////////////////
