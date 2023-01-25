import index from './index';

describe('Ejercicios de Objetos-Funciones', () => {
  const log = jest.spyOn(global.console, 'log');
  it('espero encontrar una función "printPersons" que devuelva un array nuevo con la fruta nueva añadida en la primera posición', () => {
    expect(index.printPersons).not.toBeUndefined();
    const persons = [
      { name: 'Jon', surname: 'Snow' },
      { name: 'Daenerys', surname: 'Targaryen' },
    ];
    index.printPersons(persons, 'name');
    expect(log).toHaveBeenCalledWith('Jon');
    expect(log).toHaveBeenCalledWith('Daenerys');
    index.printPersons(persons, 'surname');
    expect(log).toHaveBeenCalledWith('Snow');
    expect(log).toHaveBeenCalledWith('Targaryen');
  });

  it('espero encontrar una función "addProperty" que devuelva un objeto copiado con la nueva propiedad y valor si el boolean es true, o devuelva el mismo objeto si es false', () => {
    expect(index.addProperty).not.toBeUndefined();
    const john = { name: 'John', surname: 'Snow' };
    const newJohn = index.addProperty(john, 'colorHair', 'black', true);
    expect(newJohn).toStrictEqual({ ...john, colorHair: 'black' });
    const originalJohn = index.addProperty(john, 'colorHair', 'black', false);
    expect(originalJohn).toStrictEqual(john);
  });

  it('espero encontrar una función "getPeopleWeight" que devuelva un objeto con clave el nombre de las personas y valor el peso de las mismas y que solo muestre las que su peso sea par y superior a 60kg', () => {
    expect(index.getPeopleWeight).not.toBeUndefined();
    const peopleArr = ['Juan', 73, 'Maria', 64, 'Martin', 74, 'Sofia', 55];
    const expectedObj = { Martin: 74, Maria: 64 };
    const peopleObj = index.getPeopleWeight(peopleArr);
    expect(peopleObj).toEqual(expectedObj);
  });
});
