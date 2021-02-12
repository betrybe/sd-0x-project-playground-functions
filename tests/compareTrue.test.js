const { compareTrue } = require('../src/challenges');

describe('1 - Crie uma função usando o operador &&', () => {
  it('passando um valor false e um true, espera-se resultado false', () => {
    expect(compareTrue(false, true)).toBe(false);
    expect(compareTrue(true, false)).toBe(false);
  });
  it('passando dois valores false, espera-se resultado false', () => {
    expect(compareTrue(false, false)).toBe(false);
  });
  it('passando dois valores true, espera-se resultado true', () => {
    expect(compareTrue(true, true)).toBe(true);
  });
});
