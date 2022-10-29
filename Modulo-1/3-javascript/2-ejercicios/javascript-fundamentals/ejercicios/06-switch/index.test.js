import index from './index';

describe('Ejercicios sobre condicionales switch', () => {
  it('1 - Para customValue "avión", ex1 debe valer "plane"', () => {
    expect(index.main('avión').ex1).toBe('plane');
  });
  it('1 - Para customValue "moto", ex1 debe valer "motorbike"', () => {
    expect(index.main('moto').ex1).toBe('motorbike');
  });
  it('1 - Para customValue aleatorio, ex1 debe valer "none"', () => {
    expect(index.main('___').ex1).toBe('none');
    expect(index.main('??').ex1).toBe;
    expect(index.main('baile').ex1).toBe('none');
    expect(index.main('programación').ex1).toBe('none');
  });

  it('2 - Para customValue 10 y customCoin "USD", ex2 debe valer 10', () => {
    expect(index.main(10, 'USD').ex2).toBe(10);
  });
  it('2 - Para customValue 8 y customCoin "EUR", ex2 debe valer 8.4', () => {
    expect(index.main(8, 'EUR').ex2).toBe(8.4);
  });
  it('2 - Para customValue 5 y customCoin "GBP", ex2 debe valer 5.5', () => {
    expect(index.main(5, 'GBP').ex2).toBe(5.5);
  });
  it('2 - Para customValue 3 y customCoin "CAD", ex2 debe valer 2.94', () => {
    expect(index.main(3, 'CAD').ex2).toBe(2.94);
  });
  it('2 - Para customValue 15 y customCoin "JPY", ex2 debe valer 15', () => {
    expect(index.main(15, 'JPY').ex2).toBe(15);
  });
});
