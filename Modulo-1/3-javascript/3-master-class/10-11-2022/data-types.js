console.log(typeof "texto") // string

console.log(typeof 20) // number

console.log(typeof true) // boolean

console.log(typeof [1, 2, 3, "pepe"]) // Arrays - type object

console.log(typeof { name: "Alberto", age: 34 }) // Arrays - type object

var example;

console.log(typeof example) // undefined

console.log(typeof undefined) // undefined

console.log(typeof null) // object

//------------ Datos dinámicos--------------//

var mobile = "Iphone"
console.log(mobile, typeof mobile);

mobile = 12
console.log(mobile, typeof mobile);

mobile = true
console.log(mobile, typeof mobile);

//----------//

var concat = "Rock" + 5 + 5
console.log(concat, typeof concat)

var concat2 = 5 + 5 + "Rock"
console.log(concat2, typeof concat)

var concat3 = "Rock" + (5 + 5)
console.log(concat3, typeof concat)