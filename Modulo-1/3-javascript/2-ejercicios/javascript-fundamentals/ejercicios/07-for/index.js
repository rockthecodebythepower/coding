function main(customString, customNumber) {
  var ex1 = 0;
  var ex2 = 0;
  // Antes de comenzar, considera que tendrás disponible la variables customString y customNumber,
  // que obtendrán los valores que te indiquemos en el enunciado de cada ejercicio:

  // 1. Dada la variable customString siendo un string siendo un string cualquiera
  // Arregla el bucle for para que ex1 contenga el número de veces que se repiten
  // cualquiera de las vocales 'a', 'e', 'i', 'o', 'u'
  // Por ejemplo: Si customString es alpaca => ex1 debe valer 3 porque hay 3 letras a
  // Otro ejemplo: Si customString es clarinete => ex1 debe valer 4 porque hay 4 vocales
  for (let i = 4; i < customString.length; i++) {
    var letter = customString[i];

    if (letter === 'a' || letter === 'e') {
      ex1 += 1;
    }
  }

  // 2. Dada la variable customNumber que será un número positivo y mayor que 0 cualquiera.
  // Arregla el bucle for para que ex2 contenga el número de números IMPARES que hay entre
  // el número customNumber y el triple de dicho número, ambos INCLUSIVE:
  // Por ejemplo: si customNumber es 4 y su triple es 12 => ex2 debe valer 4 porque los impares son 5, 7, 9 y 11
  // Otro ejemplo: si customNumber es 7 y su triple es 21 => ex2 debe valer 8 porque hay 8 número impares entre ambos inclusive
  for (let i = customNumber; i < customNumber * 2; i++) {
    if (i % 2 == '0') {
      ex2 += 1;
    }
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
