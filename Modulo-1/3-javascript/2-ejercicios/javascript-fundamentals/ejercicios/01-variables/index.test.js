import index from './index';

describe('Ejercicios de Variables', () => {
  it('espero encontrar una variable de tipo string con el nombre "animal" y el valor "alpaca"', () => {
    expect(index.animal).not.toBeUndefined();
    expect(index.animal).toBe('alpaca');
  });

  it('espero encontrar una variable de tipo number con el nombre "books" y el valor 57', () => {
    expect(index.books).not.toBeUndefined();
    expect(index.books).toBe(57);
  });

  it('espero encontrar una variable de tipo boolean con el nombre "isValid" y el valor true', () => {
    expect(index.isValid).not.toBeUndefined();
    expect(index.isValid).toBe(true);
  });

  it('espero encontrar una variable de tipo array con el nombre "allAnimals" y los valores: ["alpaca", "cebra", "rana"]', () => {
    expect(index.allAnimals).not.toBeUndefined();
    expect(index.allAnimals).toStrictEqual(['alpaca', 'cebra', 'rana']);
  });

  it('espero encontrar una variable de tipo object con el nombre "superPerson" y las clave/valor: { firstName: "Pedro", lastame: "Parques", age: 28 } ', () => {
    expect(index.superPerson).not.toBeUndefined();
    expect(index.superPerson).toStrictEqual({
      firstName: 'Pedro',
      lastName: 'Parques',
      age: 28
    });
  });
});
