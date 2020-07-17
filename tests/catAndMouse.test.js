const { catAndMouse } = require('../src/challenges');

describe('Caça ao rato', () => {
  it('caso o gato B esteja a 2 unidades de distância do rato, e A esteja a 3 unidades, sua função deverá retornar B.', () => {
    expect(catAndMouse(0, 3, 2)).toBe(2);
  });
  it('caso o gato A esteja a 6 unidades de distância do rato, e B esteja a 12 unidades, sua função deverá retornar A.', () => {
    expect(catAndMouse(10, 4, 22)).toBe(4);
  });
  it("Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string 'os gatos trombam e o rato foge'", () => {
    expect(catAndMouse(1, 0, 2)).toBe('os gatos trombam e o rato foge');
  });
});
