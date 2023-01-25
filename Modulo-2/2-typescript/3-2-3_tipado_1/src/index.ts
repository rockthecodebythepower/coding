// 3.2.3 Typescript - Tipado 1
//

let userName = 'yeti1'; // lo toma como string
let userNameString : string = "YETI2"; // forzado a string

let userNameStringOrNumber : string | number = "Yeti3";

console.log(`El username es: ${userName}`)
console.log(`El userNameString es: ${userNameString}`)
console.log(`El userNameStringOrNumber es: ${userNameStringOrNumber}`)

// username = 3; // no lo admite pues string está inferido
// userNameString = 3; // no lo admite porque no es string

userNameStringOrNumber = 3;

console.log(`El username es: ${userName}`)
console.log(`El userNameString es: ${userNameString}`)
console.log(`El userNameStringOrNumber ahora es nº: ${userNameStringOrNumber}`)


let myString: string = 'hello';
let myNumber: number = 10;
let myBoolean: boolean = true;

let myUndefined: undefined;
let myNull : null;

let myUndefinedOrNull: undefined | null;
myUndefinedOrNull = null;
myUndefinedOrNull = undefined;

// función que devuelve un nombre unido por _ en forma de espacios
// la funcion recibe un string y devuelve un string
const splitName = (nameRaw: string): string => {
    return nameRaw.split('_').join(' ');
    // separo por los _ y luego uno por los espacios
};

const myNameWithSpaces = splitName('Alberto_Sanchez');

console.log('Alberto_Sanchez con espacios es:',myNameWithSpaces)
