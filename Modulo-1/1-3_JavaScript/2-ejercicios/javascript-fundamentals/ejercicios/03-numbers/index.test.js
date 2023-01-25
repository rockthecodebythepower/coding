import {
  addend1,
  addend2,
  sum,
  minuend,
  subtrahend,
  subtraction,
  factor1,
  factor2,
  multiplication,
  divisor,
  dividend,
  division,
  divisor1,
  dividend1,
  rest,
  base,
  power,
  numberAsString,
  number,
  validNumber,
  notValidNumber,
  extra,
} from "./index";

describe("Ejercicios de Números", () => {
  it("espero encontrar tres variables de tipo number y que sum valga la suma de addend1 y addend2", () => {
    expect(typeof addend1).toBe("number");
    expect(typeof addend2).toBe("number");
    expect(typeof sum).toBe("number");
    expect(sum).toBe(addend1 + addend2);
  });

  it("espero encontrar tres variables de tipo number y que subtraction valga la resta de minuend menos subtrahend", () => {
    expect(typeof minuend).toBe("number");
    expect(typeof subtrahend).toBe("number");
    expect(typeof subtraction).toBe("number");
    expect(subtraction).toBe(minuend - subtrahend);
  });

  it("espero encontrar tres variables de tipo number y que multiplication valga la multiplicación de factor1 y factor2", () => {
    expect(typeof factor1).toBe("number");
    expect(typeof factor2).toBe("number");
    expect(typeof multiplication).toBe("number");
    expect(multiplication).toBe(factor1 * factor2);
  });

  it("espero encontrar tres variables de tipo number y que division valga la división de divisor entre dividend", () => {
    expect(typeof divisor).toBe("number");
    expect(typeof dividend).toBe("number");
    expect(typeof division).toBe("number");
    expect(division).toBe(divisor / dividend);
  });

  it("espero encontrar tres variables de tipo number y que rest valga el resto de la división de divisor1 entre dividend1", () => {
    expect(typeof divisor1).toBe("number");
    expect(typeof dividend1).toBe("number");
    expect(typeof rest).toBe("number");
    expect(rest).toBe(divisor1 % dividend1);
  });

  it("espero encontrar dos variables de tipo number y que power valga 1000", () => {
    expect(typeof base).toBe("number");
    expect(typeof power).toBe("number");
    expect(power).toBe(base ** 3);
  });

  it("espero encontrar una variables de tipo string que valga '25' y una de tipo number que valga 25", () => {
    expect(typeof numberAsString).toBe("string");
    expect(typeof number).toBe("number");
    expect(number).toBe(Number(numberAsString));
  });

  it("espero encontrar dos variables de tipo boolean, que validNumber valga false y que notValidNumber valga true", () => {
    expect(typeof validNumber).toBe("boolean");
    expect(typeof notValidNumber).toBe("boolean");
    expect(validNumber).toBe(false);
    expect(notValidNumber).toBe(true);
  });

  it("espero encontrar una variables de tipo number y que valga 33", () => {
    expect(typeof extra).toBe("number");
    expect(extra).toBe(33);
  });
});
