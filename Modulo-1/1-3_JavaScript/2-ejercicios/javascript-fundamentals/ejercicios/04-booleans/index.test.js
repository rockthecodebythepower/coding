import index from "./index";

describe("Ejercicios de booleans y operadores de comparación", () => {
  it(' 1 -Las siguientes tres variables deben ser "truthy"', () => {
    const truthyVars = [
      index.firstTruthyValue,
      index.secondTruthyValue,
      index.thirdTruthyValue,
    ];

    expect([...new Set(truthyVars)]).toHaveLength(3);

    truthyVars.forEach((value) => {
      expect(value).toBeTruthy();
    });
  });
  it(' 2 -Las siguientes tres variables deben ser "falsy"', () => {
    const falsyVars = [
      index.firstFalsyValue,
      index.secondFalsyValue,
      index.thirdFalsyValue,
    ];

    expect([...new Set(falsyVars)]).toHaveLength(3);

    falsyVars.forEach((value) => {
      expect(value).toBeFalsy();
    });
  });
  it(" 3 -Respuestas a las variables con operadores comparativos", () => {
    expect(index.firstAnswer).toBe(true);
    expect(index.secondAnswer).toBe(true);
    expect(index.thirdAnswer).toBe(false);
    expect(index.fourthAnswer).toBe(false);
    expect(index.fifthAnswer).toBe(true);
    expect(index.sixthAnswer).toBe(false);
    expect(index.seventhAnswer).toBe(true);
    expect(index.eigththAnswer).toBe(true);
  });
});
