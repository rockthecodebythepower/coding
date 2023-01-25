import index from './index';

describe('Ejercicios sobre condicionales if-else', () => {
  it('1 - La variable ex1 debe ser true si se cumple la condición del primer if', () => {
    const { ex1 } = index.main(2);
    expect(ex1).toBe(true);
  });

  it('2 - La variable ex2 debe ser true si se cumple la condición del segundo if', () => {
    const { ex2 } = index.main(15);
    expect(ex2).toBe(true);
  });

  it('3 - La variable ex3 debe valer "if" si custonNumber es positivo, y "else" si es 0', () => {
    const result1 = index.main(100);
    expect(result1.ex3).toBe('if');

    const result2 = index.main(0);
    expect(result2.ex3).toBe('else');
  });

  it('4 - La variable ex4 debe tener el valor adecuado si arreglamos la condición del cuarto if()', () => {
    expect(index.main(100).ex4).toBe(false);
    expect(index.main(-50).ex4).toBe(false);
    expect(index.main(10).ex4).toBe(true);
    expect(index.main(0).ex4).toBe(false);
    expect(index.main(5).ex4).toBe(true);
  });
});
