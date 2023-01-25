import index from './index';

describe('Ejercicios de Promesas', () => {
  const log = jest.spyOn(global.console, 'log');
  it("espero encontrar una promesa que se resuelva con el string 'me he resuelto'", () => {
    return index.promise.then((data) => expect(data).toEqual('me he resuelto'));
  });

  it("espero encontrar una promesa que se rechace con el string 'me han rechazado'", () => {
    return index.promiseError.catch((data) => expect(data).toEqual('me han rechazado'));
  });

  it("espero un que se llame a console.log con el valor 'pasta' y 'pizza'", async () => {
    await index.getPasta('pasta');
    expect(log).toHaveBeenCalledWith('pasta');
    await index.getPasta('pizza');
    expect(log).toHaveBeenCalledWith('pizza');
  });

  it("espero un que se llame a console.log con el valor ['lion', 'panda', 'tiger']", async () => {
    await index.addAnimals();
    expect(log).toHaveBeenCalledWith(['lion', 'panda', 'tiger']);
  });

  it("espero que con true la promesa se resuelva con 'estoy resuelto'", async () => {
    await index.extraPromise(true);
    expect(log).toHaveBeenCalledWith('estoy resuelto');
  });

  it("espero que con false se rechace con 'he sido rechazado'", async () => {
    await index.extraPromise(false);
    expect(log).toHaveBeenCalledWith('he sido rechazado');
  });
});
