const { catAndMouse } = require('../src/challenges');

describe('Caça ao rato', () => {
  it('caso o gato cat2 esteja a 2 unidades de distância do rato, e cat1 esteja a 3 unidades, sua função deverá retornar cat2.', () => {
    expect(catAndMouse(0, 3, 2)).toBe("cat2");
  });
  it('caso o gato cat1 esteja a 6 unidades de distância do rato, e cat2 esteja a 12 unidades, sua função deverá retornar cat1.', () => {
    expect(catAndMouse(10, 4, 22)).toBe("cat1");
  });
  it("Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string 'os gatos trombam e o rato foge'", () => {
    expect(catAndMouse(1, 0, 2)).toBe('os gatos trombam e o rato foge');
  });
});
