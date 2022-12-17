// 1. Crea la función "getNewArray" que reciba un  array de frutas, y
// un string con otra fruta nueva, y luego retorne otro array igual (pero con
// otra referencia) pero habiéndole añadido en la primera posición la fruta nueva.
function getNewArray(fruits, newfruit){
    const myFruits = fruits.slice();
    myFruits.unshift(newfruit);
    return myFruits;    
}

// 2. Crea la función "modifyOriginalArray" que reciba un array de números o strings,
// le elimine la primera y la última posición y lo retorne (misma referencia)
function modifyOriginalArray(array){
    var modifyArray = array;
    modifyArray.shift();
    modifyArray.pop();
    return modifyArray;
}

// --EXTRA-- Dado el array "colors", crea la función "getColors" que reciba un número
// como parámetro, cree una copia, y añada el color "black" en la última posición de
// dicha copia si el número es par, o añada el color "white" en la primera posición
// si es impar, y luego retorne dicho array
const colors = ["blue", "red", "gray"];

function getColors(num){
    const newColors = colors.slice();
    if (num % 2 === 0){
        newColors.push("black");
    }else newColors.unshift("white");
    return newColors;
}

// ///////////////////////////////////////////////////////////////
// ⬇️ NO TOCAR ESTA PARTE O ROMPERÁS LOS TESTS ⬇️
export default { getNewArray, modifyOriginalArray, colors, getColors };
// ///////////////////////////////////////////////////////////////
