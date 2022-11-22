import {
  marks,
  length,
  azul,
  posiciones,
  secuencia,
  puntosCardinales,
  frutas,
  animalesTerrestres,
  peliculas,
  peliculasCopiaSinReferencia,
  peliculasCopiaConReferencia,
} from './index';

describe('Ejercicios de Métodos de Arrays', () => {
  it('espero encontrar una variable tipo array, una tipo número y que length valga la longitud de marks', () => {
    expect(typeof marks).toBe('object');
    expect(typeof length).toBe('number');
    expect(length).toBe(marks.length);
  });

  it("espero encontrar una variable tipo string y que su valor sea 'azul'", () => {
    expect(typeof azul).toBe('string');
    expect(azul).toBe('azul');
  });

  it("espero encontrar un array de longitud 3 y que su primera posición contenga un string con el valor 'primero'", () => {
    expect(posiciones.length).toBe(3);
    expect(posiciones[0]).toBe('primero');
  });

  it('espero encontrar un array de longitud 5 y que su primera posición contenga el número 1', () => {
    expect(secuencia.length).toBe(5);
    expect(secuencia[0]).toBe(1);
  });

  it("espero encontrar un array de longitud 4 y que su última posición contenga el string 'oeste'", () => {
    expect(puntosCardinales.length).toBe(4);
    expect(puntosCardinales[puntosCardinales.length - 1]).toBe('oeste');
  });

  it("espero encontrar un array de longitud 3 y que su última posición contenga el string 'uva'", () => {
    expect(frutas.length).toBe(3);
    expect(frutas[frutas.length - 1]).toBe('uva');
  });

  it("espero encontrar un array de longitud 2 y que contenga 'elefante' y 'perro'", () => {
    expect(animalesTerrestres.length).toBe(2);
    expect(animalesTerrestres).toStrictEqual(['elefante', 'perro']);
  });

  it('espero encontrar un array de longitud 3 y uno de 4', () => {
    peliculas.push('gladiator');
    expect(peliculasCopiaSinReferencia.length).toBe(3);
    expect(peliculasCopiaConReferencia.length).toBe(4);
    expect(peliculasCopiaSinReferencia[peliculasCopiaSinReferencia.length - 1]).toBe('avatar');
    expect(peliculasCopiaConReferencia[peliculasCopiaConReferencia.length - 1]).toBe('gladiator');
  });
});
