// declarar arrows
const getName = () => {
  console.log('Return name')
  return 'Daniel'
}

let name = getName()

console.log(name)

// simplificar

const getSurname = () => 'Ocaña'
let surname = getSurname()

console.log(surname)

// Params arrows

const multiTwo = (x) => {
  return x * 2
}

const multiOne = x => x * 1

const multiFive = (x, y) => (x + y) * 5

// ERROR: const multiSix = x, y => (x + y) * 6

//EJEMPLO DANI:  const transformNumbersToSeven = (x) => {
//   x = 7
// }

// const MyClass = () => ({
//   name: 'Pedro'
// })

// const myObject = new MyClass({ name: 'Daniel' })

// console.log(myObject)

const returnObject = () => ({ name: 'Daniel' })

const element = returnObject()
console.log(element)

