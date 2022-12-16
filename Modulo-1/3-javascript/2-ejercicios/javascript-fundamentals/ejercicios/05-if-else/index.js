function main(customNumber) {
  var ex1 = false;
  var ex2 = false;
  var ex3 = '';
  var ex4 = false;
  // Antes de comenzar, considera que tendrás disponible la variable customNumber
  // que obtendrá los valores que te indiquemos en el enunciado de cada ejercicio:

  // 1. Suponemos que customNumber vale 2. Cambia el operador > para que la condición del if(...) se condisere verdadera:
  if (customNumber < 10) {
    ex1 = true;
  }

  // 2. Suponemos que customNumber vale el number 15. Arregla la comparación para que la condición del if(...) se cumpla:
  if (customNumber / 2 == '7.5') {
    ex2 = true;
  }

  // 3. Suponiendo que customNumber vale un número positivo cualquiera. Cambia la condición para que el if(...) sea válido
  // y adicionalmente, si customNumber valiese 0, if(...) no se cumpla y se ejecute el else {}
  if (customNumber > 0) {
    ex3 = 'if';
  } else {
    ex3 = 'else';
  }

  // 4. En este caso customNumber puede ser cualquier valor. Arregla el if(...) para cumplir las siguientes condiciones:
  // - Debe cumplirse la condición siempre que customNumber sea ESTRICTAMENTE MAYOR que 0.
  // - Debe cumplirse la condición siempre que customNumber sea MENOR O IGUAL que 10.
  // - Si customNumber vale MENOS O IGUAL a 0, o es MAYOR que 10, NO deberá cumplir la condición.
  // - Puede que tengas que usar otro operador distinto a OR (||).
  if (customNumber > 0 && customNumber <= 10) {
    ex4 = true;
  }

  return {
    ex1,
    ex2,
    ex3,
    ex4,
  };
}

// ///////////////////////////////////////////////////////////////
// ⬇️ NO TOCAR ESTA PARTE O ROMPERÁS LOS TESTS ⬇️
export default { main };
// ///////////////////////////////////////////////////////////////
