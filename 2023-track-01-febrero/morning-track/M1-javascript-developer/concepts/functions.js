// 1.Declaación de funciones

function nameFunction(params) {
  // codigo a ejecutar
  console.log('Ejemplo 1')
}

nameFunction()

const myFunction = (params) => {
  // codigo a ejecutar
  console.log('Ejemplo 1 - arrow')
}

myFunction()

// 2. trabajando con params -> Funcion

// params
const pokemonAttack = (name, attack = 'Impact Trueno') => {
  // params -> args
  console.log(`${name} realiza el siguiente ataque ${attack}`)
}

pokemonAttack('Charmander', 'Ascuas')

pokemonAttack('Bulbasaur', 'latigo cepa')

// valores predeterminados
pokemonAttack('Pikachu')

// cuando hay más de 3 params -> pasamos un objeto
const studentDescription = (student) => {
  console.log(`Soy ${student.name} y tengo ${student.age}, 
    vivo en ${student.country} y me gustan los ${student.like}`
  )
}

studentDescription({
  like: 'javascript',
  name: 'Elias',
  age: 20,
  country: 'Spain',
})

// Retorno de funciones

const suma = (numA, numB) => {
  return numA + numB
}

const result = suma(5, 10)
console.log(result)

//------ Funcion que llama a otra funcion

const initial = () => {
  console.log('Soy la 1 - recupero data con fetch')
  mapped('data mapped')
}

const mapped = (param) => {
  if (param === 'data mapped') console.log('Soy la 2 - mapeo')
  transformed('data structured')
}

const transformed = (param) => {
  if (param === 'data structured') console.log('Soy la 3 - transformo')
  print('datos transformados')
}

const print = (param) => {
  console.log('Soy la 4 ' + param)
}

initial()