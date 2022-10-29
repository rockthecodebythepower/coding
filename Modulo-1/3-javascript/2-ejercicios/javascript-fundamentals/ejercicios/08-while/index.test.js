import index from './index';

describe('Ejercicios sobre bucles while', () => {
  it('1 - Para customNumber 10, ex1 debe valer 20', () => {
    expect(index.main(10).ex1).toBe(20);
  });
  it('1 - Para customNumber -2, ex1 debe valer 0', () => {
    expect(index.main(-2).ex1).toBe(0);
  });
  it('1 - Para customNumber 0, ex1 debe valer 40', () => {
    expect(index.main(0).ex1).toBe(40);
  });

  it('2 - Para customString alpaca, ex2 debe valer "alpaca"', () => {
    expect(index.main(undefined, 'alpaca').ex2).toBe('alpaca');
  });
  it('2 - Para customString instrumento, ex2 debe valer "INSTRUMENTO"', () => {
    expect(index.main(undefined, 'instrumento').ex2).toBe('INSTRUMENTO');
  });
  it('2 - Para otros valores de customString, ex2 debe valer lo esperado', () => {
    expect(index.main(undefined, 'vocales').ex2).toBe('vocales');
    expect(index.main(undefined, 'developer').ex2).toBe('DEVELOPER');
    expect(index.main(undefined, 'javascript').ex2).toBe('javascript');
    expect(index.main(undefined, 'rockthecode').ex2).toBe('ROCKTHECODE');
  });
});
