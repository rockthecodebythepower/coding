import index from "./index";

describe("Ejercicios de Objetos", () => {
  const log = jest.spyOn(global.console, "log");

  it("espero encontrar una función 'printCar' que invoque un console.log con la propiedad 'model' del objeto que le entra como argumento", () => {
    expect(index.printCar).not.toBeUndefined();
    index.printCar({ model: "ibiza" });
    expect(log).toHaveBeenCalledWith("ibiza");
    index.printCar({ model: "panda" });
    expect(log).toHaveBeenCalledWith("panda");
  });

  it("espero encontrar una función 'printCountry' que invoque un console.log con la propiedad dinámica del objeto que recibe como argumento", () => {
    expect(index.printCountry).not.toBeUndefined();
    index.printCountry({ city: "Madrid" }, "city");
    expect(log).toHaveBeenCalledWith("Madrid");
    index.printCountry({ food: "paella" }, "food");
    expect(log).toHaveBeenCalledWith("paella");
  });

  it("espero encontrar una función 'deleteProperties' que elimine una propiedad del objeto e invoque un console.log de dicho objeto", () => {
    expect(index.deleteProperties).not.toBeUndefined();
    index.deleteProperties({ name: "Jose", surname: "Lopez" }, "name");
    expect(log).toHaveBeenCalledWith({ surname: "Lopez" });
    index.deleteProperties({ postcode: "34212", city: "Madrid" }, "postcode");
    expect(log).toHaveBeenCalledWith({ city: "Madrid" });
  });
});
