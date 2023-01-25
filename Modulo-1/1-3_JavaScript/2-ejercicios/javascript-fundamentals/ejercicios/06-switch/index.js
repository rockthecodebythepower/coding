function main(customValue, customCoin) {
  var ex1 = '';
  var ex2 = 0;
  // Antes de comenzar, considera que tendrás disponible las variables customValue y customCoin,
  // que obtendrán los valores que te indiquemos en el enunciado de cada ejercicio:

  // 1. Supón que tenemos un diccionario de traducciones al que le pasamos el valor customValue.
  // customValue tendrá un valor y tendremos que asignar a ex1 el valor de su traducción.
  // Completa el switch para cubrir los siguientes casos:
  // 'coche' => 'car' | 'avión' => 'plane' | 'moto' => 'motorbike' | otro valor cualquiera => 'none'
  switch (customValue) {
    case 'coche':
      ex1 = 'car';
      break;
    default:
      ex1 = '';
  }

  // 2. Supón que tenemos una máquina de cambio de divisas. Dado un valor number cualquiera para
  // customValue, debes asignarlo a ex2 multiplicado por el índice de cada divisa.
  // Considera que la variable customCoin está disponible y puede tener los valores:
  // 'USD' | 'EUR' | 'GBP' | 'CAD'
  // Los indices para cada divisa son:
  // 'USD' => 1 | 'EUR' => 1.05 | 'GBP' => 1.10 | 'CAD' => 0.98
  // Si customCoin no tiene el valor de estas divisas, asigna a ex2 el valor actual de customValue
  switch (customCoin) {
    case 'USD':
      ex2 = customValue * 1;
      break;
    default:
      ex2 = '';
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
