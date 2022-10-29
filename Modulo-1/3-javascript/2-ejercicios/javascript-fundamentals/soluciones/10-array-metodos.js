// 1. Asigna un array de lo que quieras a la variable "marks", después
// asigna la longitud de "marks" a la variable "length"
var marks = [1, "hola", 43];
var length = marks.length;

// 2. Dada la variable "colores", asigna a la variable "azul" la posición del array
// colores necesaria para que su valor sea "azul"
var colores = ["naranja", "rojo", "azul"];
var azul = colores[2];

// 3. Dada la variable "posiciones", añade en la primera posición
// el string "primero"
var posiciones = ["segundo", "tercero"];
posiciones.unshift("primero");

// 4. Dada la variable "secuencia", elimínale la primera posición
var secuencia = [14, 1, 2, 3, 4, 5];
secuencia.shift();

// 5. Dada la variable "puntosCardinales", complétala añadiendo en la última
// posición el string "oeste"
var puntosCardinales = ["norte", "sur", "este"];
puntosCardinales.push("oeste");

// 6. Dada la variable "frutas", elimínale la última posición
var frutas = ["manzana", "naranja", "uva", "berenjena"];
frutas.pop();

// 7. Dada la variable "animales", asigna a la variable "animalesTerrestres" una
// copia de los animales que sean terrestres con la funcion "slice"
var animales = ["delfin", "tiburon", "elefante", "perro", "aguila", "cuervo"];
var animalesTerrestres = animales.slice(2, 4);

// --EXTRA-- Dada la variable "peliculas", asigna a la variable "peliculasCopiaSinReferencia" una copia nueva
// de "peliculas" con diferente referencia y asigna a la variable "peliculasCopiaConReferencia" una copia
// con la misma referencia
var peliculas = ["el padrino", "star wars", "avatar"];
var peliculasCopiaSinReferencia = peliculas.slice();
var peliculasCopiaConReferencia = peliculas;

// ///////////////////////////////////////////////////////////////
// ⬇️ NO TOCAR ESTA PARTE O ROMPERÁS LOS TESTS ⬇️
export {
  marks,
  length,
  azul,
  posiciones,
  secuencia,
  puntosCardinales,
  frutas,
  animalesTerrestres,
  peliculas,
  peliculasCopiaSinReferencia,
  peliculasCopiaConReferencia,
};
// ///////////////////////////////////////////////////////////////
