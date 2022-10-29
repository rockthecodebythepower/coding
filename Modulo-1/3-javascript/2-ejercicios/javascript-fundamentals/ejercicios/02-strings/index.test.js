import index from './index';

describe('Ejercicios de Cadenas de Texto (strings)', () => {
  it('espero encontrar una variable de tipo string con el nombre "upperAnimal" y el valor "ALPACA"', () => {
    expect(index.animal).not.toBeUndefined();
    expect(index.animal).toBe('alpaca');

    expect(index.upperAnimal).not.toBeUndefined();
    expect(index.upperAnimal).toBe('ALPACA');
  });

  it('espero encontrar una variable de tipo string con el nombre "shortMotto" y el valor "Aprendemos programación"', () => {
    expect(index.motto).not.toBeUndefined();
    expect(index.motto).toBe('Aprendemos programación en ThePower');

    expect(index.shortMotto).not.toBeUndefined();
    expect(index.shortMotto).toBe('Aprendemos programación');
  });

  it('espero encontrar una variable de tipo string con el nombre "miniMotto" y el valor "ThePower"', () => {
    expect(index.miniMotto).not.toBeUndefined();
    expect(index.miniMotto).toBe('ThePower');
  });

  it('espero encontrar una variable de tipo string con el nombre "lowerMotto" y el valor "thepower"', () => {
    expect(index.lowerMotto).not.toBeUndefined();
    expect(index.lowerMotto).toBe('thepower');
  });
});
