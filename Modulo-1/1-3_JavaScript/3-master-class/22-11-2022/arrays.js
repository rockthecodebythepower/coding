// Declarando arrays
let listYears = [1972, 1984, 1988]
let listNames = ["Captain America", "Spiderman", "Ironman"]
let listSuperHeroes = [
  {
    id: 1,
    alias: "Tony Stark",
    heroName: "IronMan"
  },
  {
    id: 2,
    alias: "Clark Kent",
    heroName: "Superman"
  }
]
let listItems = [1, { name: "Alberto" }, "Bienvenidos", true]

let moderatIII = new Array()
moderatIII[0] = "Eating hooks"
moderatIII[1] = "Running"
moderatIII[6] = "Animal trails"

console.log(moderatIII);

// Arrays position - 0
console.log(listItems[2])

// Métodos que modifican el array original

listNames.pop() // elimina el último elemento del array
console.log(listNames)
listNames.push("Groot") // añade un elemento al final de nuestro array
console.log(listNames)
listNames.reverse() // cambia la posiciones en orden inverso
console.log(listNames)
listNames.shift() // Elimina el primer elemento de neustro array
console.log(listNames)
listNames.sort() // con strings orden alfabetico
console.log(listNames)
let listNumbersToSort = [1, 22, 2, 7, 11, 18]
listNumbersToSort.sort() // ordenación por cifras no por el valor
console.log(listNumbersToSort)

let listNumbersToSplice = [1, 2, 3, 4, 5, 8, 9, 21, 34, 65]
listNumbersToSplice.splice(2, 2) // eliminar - desde la posicion 2 || 2 elementos
console.log(listNumbersToSplice)
listNumbersToSplice.splice(6, 1, 'Hola Rockers') // elimina los elementos e introduce el nuevo
console.log(listNumbersToSplice)
listNumbersToSplice.splice(6, 1, 'Hola Rockers de nuevo', 'Metodos arrays', 'Soy Alberto')
console.log(listNumbersToSplice)

listNames.unshift("Alberto", "Cristian")
console.log(listNames)

// Métodos que no modifican el array original

let listNumbersNoModified = [1, 2, 6, 8, 9]
let otherListNumbersModified = [3, 8, 6, 5]

let fusionListNumbers = listNumbersNoModified.concat(otherListNumbersModified) // une arrays o elementos
console.log(listNumbersNoModified)
console.log(otherListNumbersModified)
console.log(fusionListNumbers)

let joinListNumbers = listNumbersNoModified.join('-') // unifica los elementos de mi array - string
console.log(joinListNumbers)

let sliceListNumber = listNumbersNoModified.slice(2)
console.log(listNumbersNoModified)
console.log(sliceListNumber)

console.log(sliceListNumber.toString())

// Localizan un valor en un array

let modseleKtor = ["Who", "Tom", "Dy", "Who"]

console.log(modseleKtor.indexOf("Who"))
console.log(modseleKtor.indexOf("pepe"))
console.log(modseleKtor.lastIndexOf("Who"))
console.log(modseleKtor.lastIndexOf("pepa"))
console.log(modseleKtor.includes("Who"))