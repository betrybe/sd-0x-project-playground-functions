const { highestCount } = require('../src/challenges');

describe('Repetição do maior número', () => {
  it('caso o parâmetro seja [9, 1, 2, 3, 9, 5, 7], a função deverá retornar 2', () => {
    expect(highestCount([9, 1, 2, 3, 9, 5, 7])).toBe(2);
  });
  it('caso o parâmetro seja [0, 4, 4, 4, 9, 2, 1], a função deverá retornar 1', () => {
    expect(highestCount([0, 4, 4, 4, 9, 2, 1])).toBe(1);
  });
  it('caso o parâmetro seja [0, 0, 0], a função deverá retornar 3', () => {
    expect(highestCount([0, 0, 0])).toBe(3);
  });
});
