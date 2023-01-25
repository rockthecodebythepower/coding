var isDeveloper = false

if (isDeveloper) {
  console.log('Eres un crack del código')
} else {
  console.log('Apuntate a Rock')
}

var name = "Cristian"


if (name == "Cristian") {
  console.log("Eres un genio")
} if (name == "Alberto") {
  console.log("Te defiendes")
} else {
  console.log("no te conozco")
}

// doble == valor
// tripe === valor y tipo
var element = 8
if (element == "8") {
  console.log("Valor")
}


if (element === "8") {
  console.log("Valor-tipo")
}

var one = 1;
var two = 2;

// || -> OR => se cumple una o otra

if (one === 1 || two === 5) {
  console.log('OR ||')
}

// && -> Y => Se cumplen ambas

if (one === 1 && two !== 5) {
  console.log('Y &&')
}


var esMayor = true
var tieneCarnet = true
var tieneCoche = true

var hasBebido = true

// (true) - false => false
if ((esMayor && tieneCarnet && tieneCoche) && !hasBebido) {
  console.log('Puedes conducir')
} else {
  console.log('No puedes conducir')
}

if (hasBebido === false) {
  console.log('lo que quieras')
} if (tieneCoche && tieneCarnet) {
  console.log('puedes conducir')
}



var dinero = true
var aviones = true
var miedoAvolar = true
var pastillaSleep = true

if (dinero && aviones && (!miedoAvolar || pastillaSleep)) {
  console.log('puedo ir a argentina')
}