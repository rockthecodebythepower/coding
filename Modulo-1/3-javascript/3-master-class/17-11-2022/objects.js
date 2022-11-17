// Propiedad o clave => type
// Valor => master
var rockthecode = {
  type: 'master',
};

rockthecode.theme = 'development';

console.log(rockthecode.type);
console.log(rockthecode.theme);

// Crea la función addProperty ✅
// para que reciba un objeto, una propiedad y valor nuevos, y un boolean ✅

// Si el boolean es falsy, que retorne directamente
// el mismo objeto (misma referencia) ✅
function addProperty(obj, key, value, bool) {
  if (!bool) {
    return obj;
  } else {
    var copyObj = Object.assign({}, obj);
    copyObj[key] = value;

    return copyObj;
  }
}

addProperty({ name: 'Rubén' }, 'student', true, true);

// Si el boolean es true, que cree una copia de dicho objeto ✅
// añada la nueva propiedad + valor ✅
// lo retorne.
