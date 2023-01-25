var cadena = {
  name: "Alberto",
  sayMyName: function () {
    console.log("Hola " + this.name)
  }
}

console.log(cadena.sayMyName())

console.log(cadena.name)