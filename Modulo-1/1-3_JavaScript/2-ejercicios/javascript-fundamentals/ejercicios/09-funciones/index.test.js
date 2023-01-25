import index from './index';

describe('Ejercicios de Funciones', () => {
  it('espero encontrar una función "getLongString" que devuelva un string de longitud >= 6 caracteres', () => {
    expect(index.getLongString).not.toBeUndefined();

    const result = index.getLongString();
    expect(typeof result).toBe('string');
    expect(result.length >= 6).toBe(true);
  });

  it('espero encontrar una función "getInUpperCase" que devuelva su argumento en mayúsculas', () => {
    expect(index.getInUpperCase).not.toBeUndefined();

    const result = index.getInUpperCase('hola desde ThePower');
    expect(result).toBe('HOLA DESDE THEPOWER');
  });

  it('espero encontrar una función "sum" que devuelva sus argumentos sumados entre si', () => {
    expect(index.sum).not.toBeUndefined();

    expect(index.sum(2, 4)).toBe(6);
    expect(index.sum(5, 5)).toBe(10);
    expect(index.sum(10, 2)).toBe(12);
  });

  it('espero encontrar una función "sliceUntil" que devuelva un texto pasado como argumento cortado desde su inicio hasta un límite pasado como argumento', () => {
    expect(index.sliceUntil).not.toBeUndefined();

    expect(index.sliceUntil('hola que tal', 8)).toBe('hola que');
    expect(index.sliceUntil('hola que tal')).toBe('hola que tal');
  });
});
