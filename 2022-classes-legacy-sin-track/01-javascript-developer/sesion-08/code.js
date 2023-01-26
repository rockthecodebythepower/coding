// Object Destructuring - Props -> ({name}) = React
let marvelCharacter = {
  name: {
    heroName: 'Doctor Strange',
    realName: 'Stephen Vicent Strange'
  },
  team: ['Avengers', 'Iluminati']
}

// Ex1
let { name, team } = marvelCharacter;

console.log(name);
console.log(team);

// Ex2
let { heroName, realName } = name;

console.log(heroName);
console.log(realName);

//--------//

const sum = ({ value }) => {
  console.log(value)
  // value + 2
};

sum({ value: 5 })

//--------------//

let xmen = ['Ciclops', 'Beast', 'Angel', 'Marvel-girl']
let newXmen = ['Wolverine', 'NightCrawler', 'Storm']

// spread para concatenar
let myMutants = [...xmen, ...newXmen]
console.log(myMutants)

// spread para copiar un array
let xmenCopy = [...xmen]
console.log(xmenCopy)

// combinar spread + methods
let [lastMutant] = [...xmen].reverse()
console.log(lastMutant)

// no modificamos la informacion original
console.log(xmen);
console.log(newXmen);

// spread operator en params function

const sumOperator = (a, b, c) => a + b + c

const numberToOperate = [5, 6, 7, 10]

console.log(sumOperator(...numberToOperate.reverse()))

// Spread Operator in Strings
const myTeam = "RAYO"
const charactersTeamDash = [...myTeam].join('-')
console.log(charactersTeamDash)

// Spread Operator in Object
const obj1 = { firstName: 'Alberto', age: 34 }
const obj2 = { firstName: 'Pedro', lastName: 'Rivera', gender: 'M' }

const newObj = { ...obj1, ...obj2 }
console.log(newObj)

const newObj2 = { ...obj2, ...obj1, planet: 'Earth' }
console.log(newObj2)

// Destructurin with spread operators
const school = {
  firstName: 'Code',
  lastName: 'Rock',
  age: 1
}

// Dejar el valor de la age - dejar el rest atributos
const { age, lastName, ...restOfSchool } = school
console.log(age)
console.log(restOfSchool)

//-------------------

// map -> mapear elementos iterables para modificarlos y retornar el elemento de la lista modificado

let officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 76, name: 'Commander Jerjerrod' }
]

let officersIds = []

officers.forEach((officer) => {
  officersIds.push(officer.id * 2)
})

const officersIdsMap = officers.map(officer => officer.id * 2)

console.log(officersIds)
console.log(officersIdsMap)

const transformName = (name) => name + 'A'

const officersNameA = officers.map((officer, index) => {
  if (officer.name === 'Commander Jerjerrod') return officer
  return {
    id: officer.id,
    name: `${index + 1} ${officer.name}`,
    nameTransformed: transformName(officer.name)
  }
})

console.log(officersNameA)

// Filter -> filtrar elementos - retorna los elementos filtrados en base a una condicion
let pilots = [
  { id: 2, name: 'Wedge Antilles', faction: 'Rebels', score: 50 },
  { id: 8, name: 'Ciena Ree', faction: 'Empire' },
  { id: 40, name: 'Iden Versio', faction: 'Empire' },
  { id: 66, name: 'Thane Kyrell', faction: 'Rebels' }
]

let rebels = pilots.filter((pilot) => pilot.faction === 'Rebels')
let empires = pilots.filter((pilot) => pilot.faction === 'Empire' || pilot.score === 50)

console.log(rebels, empires)

// Find -> busca el elemento que quieres y lo retorna
const arrayFind = [5, 2, 8, 130, 44]
const findArrayElement = arrayFind.find(element => element > 10)
console.log(findArrayElement);


// Reduce
let pilotsReduce = [
  { id: 2, name: 'Wedge Antilles', faction: 'Rebels', years: 15 },
  { id: 8, name: 'Ciena Ree', faction: 'Empire', years: 17 },
  { id: 40, name: 'Iden Versio', faction: 'Empire', years: 22 },
  { id: 66, name: 'Thane Kyrell', faction: 'Rebels', years: 31 }
]

let totalYearsPilots = pilotsReduce.reduce((acc, pilot) => acc + pilot.years, 0)

console.log(totalYearsPilots)

let mostExpPilot = pilotsReduce.reduce((oldest, pilot) => {
  return (oldest.years || 0) > pilots.years ? oldest : pilot
}, {})

console.log(mostExpPilot)

// Ejemplo final

let personnel = [
  { id: 1, name: 'Luke Skywalker', pilotingScore: 98, shootingScore: 56, isForceUser: true },
  { id: 2, name: 'Luke patata', pilotingScore: 73, shootingScore: 60, isForceUser: false },
  { id: 3, name: 'Luke tomate', pilotingScore: 20, shootingScore: 5, isForceUser: false },
  { id: 4, name: 'Luke pimiento', pilotingScore: 43, shootingScore: 4, isForceUser: false },
  { id: 5, name: 'Luke brocoli', pilotingScore: 2, shootingScore: 80, isForceUser: true },
  { id: 6, name: 'Luke zanahoria', pilotingScore: 56, shootingScore: 77, isForceUser: true }
]

let jediPersonnel = personnel.filter((person) => person.isForceUser)

let jediScores = jediPersonnel.map((jedi) => jedi.pilotingScore + jedi.shootingScore)

let totalJediScore = jediScores.reduce((acc, score) => acc + score, 0)

console.log(jediPersonnel)

console.log(jediScores)

console.log(totalJediScore)

const totalComplicatedSore = personnel.filter(person => person.isForceUser)
  .map(jedi => jedi.pilotingScore + jedi.shootingScore)
  .reduce((acc, score) => acc + score, 0)

console.log(totalComplicatedSore)