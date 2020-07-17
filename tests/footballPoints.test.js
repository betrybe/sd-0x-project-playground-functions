const { footballPoints } = require('../src/challenges');

describe('Pontos no futebol', () => {
  it('caso o time tenha 14 vitórias, 5 derrotas e 8 empates, é esperado que tenha 50 pontos', () => {
    expect(footballPoints(14, 5, 8)).toBe(50);
  });
  it('caso o time tenha 1 vitória, 15 derrotas e 2 empates, é esperado que tenha 5 pontos', () => {
    expect(footballPoints(1, 15, 2)).toBe(5);
  });
  it('caso o time tenha 0 vitórias, 25 derrotas e 0 empates, é esperado que tenha 0 pontos', () => {
    expect(footballPoints(0, 25, 0)).toBe(0);
  });
});
