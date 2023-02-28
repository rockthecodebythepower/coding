const ninjaTurtles = ['Leonardo', 'Michelangelo', 'Donatello', 'Raphael']

ninjaTurtles.forEach((ninja) => {
  console.log(ninja)
  if (ninja === 'Donatello') console.log('He encontrado la favorita de alberto')
})

const avengers = [
  {
    name: 'Peter Parker',
    age: 16,
    super: 'Spiderman'
  },
  {
    name: 'Stephen Strange',
    age: 36,
    super: 'Dr. Strange'
  },
  {
    name: 'Bruce Banner',
    age: 46,
    super: 'Hulk'
  },
  {
    name: 'Thor Odinsson',
    age: 1600,
    super: 'Thor'
  }
]

const students = [
  {
    name: 'Peter Peter',
    age: 16,

  },
  {
    name: 'Stephen Paco',
    age: 356,
  },
  {
    name: 'Bruce Rivera',
    age: 4006,
  },
  {
    name: 'Thor Martinez',
    age: 1600,
  }
]
// Esto e slo mismo que forEach - pero encapsulado en una funcion
const evaluateList = (list, nameList) => {
  list.forEach((item) => {
    if (item.age > 50) console.log(nameList, item.name)
  })
}

evaluateList(avengers, 'Lista Avengers')

evaluateList(students, 'Lista Students')