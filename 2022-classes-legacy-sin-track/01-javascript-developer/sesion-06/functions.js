// Declaración de función
function pokemonAttack() {
  console.log("Pikachu Imapct Trueno")
}

pokemonAttack()

// Params - es más eficiente
function pokemonAttackParams(name = "Pidgey", attack = "Tornado") {
  console.log(`${name} ${attack}`)
}

pokemonAttackParams("Charmander", "Ascuas")
pokemonAttackParams("Ascuas")
pokemonAttackParams()

// Esto no es eficiente
function pokemonAttackParamsDefaultFunction(name, attack = defaultFunctionAttack()) {
  console.log(`${name} ${attack}`)
}

// Returns que es el valor de retorno en ejecución
function defaultFunctionAttack() {
  return "Tornado"
}

pokemonAttackParamsDefaultFunction("Bulbasaur")

pokemonAttackParamsDefaultFunction("Bulbasaur", "latigo cepa")

function suma(numA, numB) {
  return numA + numB
}

let result = suma(5, 8)
console.log(result)


function showMovie(age) {
  if (!checkAge(age)) {
    return
  } else {
    return checkAge(age)
  }
}

function checkAge(age) {
  if (age > 18) {
    return "No es para todos"
  } else {
    return "puedes verla"
  }
}

let canWatchMovie = showMovie(55)
console.log(canWatchMovie)


//---------------Alternativa a params indetermiandos// 

function showName(name) {
  // if (name === undefined) name = 'Alberto'
  name = name || "Alberto"
  console.log(name)
}
showName()
showName("Cristian")

//--------------//
function orderNumbers(listNumbers) {
  return listNumbers.sort()
}

console.log(orderNumbers([0.00001, 0.0001, 0.1, 1, 01]))
console.log(orderNumbers([02, 01, 001, 03, 04, 00005]))
console.log(orderNumbers([001, 002, 003, 004, 005, 006, 007, 020, 300]))

//------------------- Naming de fucniones//
//showMessage -> mostrar un mensaje
// getAge -> retornar una edad
// calcSum -> calcular una suma y retornar resultado
// createForm -> crear un formulario
// checkPermission -> revisart los permisos
