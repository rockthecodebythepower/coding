import index from "./index";

describe("Ejercicios sobre bucles for", () => {
  it('1 - Para customString "alpaca", ex1 debe valer 3', () => {
    expect(index.main("alpaca").ex1).toBe(3);
  });
  it('1 - Para customString "clarinete", ex1 debe valer 4', () => {
    expect(index.main("clarinete").ex1).toBe(4);
  });
  it('1 - Para customString "cumpleaños", ex1 debe valer 4', () => {
    expect(index.main("cumpleaños").ex1).toBe(4);
  });
  it("1 - Para otros customString, ex1 debe obtener el valor adeacuado", () => {
    expect(index.main("").ex1).toBe(0);
    expect(index.main("aeiou").ex1).toBe(5);
    expect(index.main("aaeeiioouu").ex1).toBe(10);
    expect(index.main("___))??qwfdg").ex1).toBe(0);
  });

  it("2 - Para customNumber 4, ex2 debe valer 4", () => {
    expect(index.main("", 4).ex2).toBe(4);
  });
  it("2 - Para customNumber 8, ex2 debe valer 8", () => {
    expect(index.main("", 8).ex2).toBe(8);
  });
  it("2 - Para customNumber 10, ex2 debe valer 10", () => {
    expect(index.main("", 10).ex2).toBe(10);
  });
  it("2 - Para customNumber 19, ex2 debe valer 19", () => {
    expect(index.main("", 19).ex2).toBe(19);
  });
});
