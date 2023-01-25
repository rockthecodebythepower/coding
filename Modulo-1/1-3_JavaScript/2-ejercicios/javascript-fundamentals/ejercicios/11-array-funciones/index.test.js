import index from "./index";

describe("Ejercicios de Array - Funciones", () => {
  it('espero encontrar una función "getNewArray" que devuelva un array nuevo con la fruta nueva añadida en la primera posición', () => {
    expect(index.getNewArray).not.toBeUndefined();
    const fruitArr = ["banana", "naranja", "manzana"];
    const result = index.getNewArray(fruitArr, "mango");
    expect(result).toEqual(["mango", "banana", "naranja", "manzana"]);
    expect(fruitArr).not.toStrictEqual(result);
  });

  it("espero encontrar 'modifyOriginalArray' que devuelva el mismo array modificado y lo asigne a uno nuevo con la misma referencia", () => {
    expect(index.modifyOriginalArray).not.toBeUndefined();
    const fruitArr = ["banana", "naranja", "manzana"];
    const result = index.modifyOriginalArray(fruitArr);
    expect(result).toStrictEqual(["naranja"]);
    expect(fruitArr).toStrictEqual(result);
  });

  it("espero encontrar 'getColors' que devuelva una copia de 'colors' añadiendo el color 'black' al final del array", () => {
    expect(index.getColors).not.toBeUndefined();
    const result = index.getColors(2);
    expect(result).toStrictEqual(["blue", "red", "gray", "black"]);
    expect(index.colors).not.toStrictEqual(result);
  });

  it("espero encontrar 'getColors' que devuelva una copia de 'colors' añadiendo el color 'white' al principio del array", () => {
    expect(index.getColors).not.toBeUndefined();
    const newArr = index.getColors(3);
    expect(newArr).toStrictEqual(["white", "blue", "red", "gray"]);
    expect(index.colors).not.toStrictEqual(newArr);
  });
});
