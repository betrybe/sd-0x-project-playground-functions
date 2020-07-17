const { concatName } = require('../src/challenges');

describe('Concatenação de strings', () => {
  it("caso o parâmetro seja ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], espera-se como retorno 'Paolillo', 'Lucas'.", () => {
    expect(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])).toBe('Paolillo, Lucas');
  });
  it("caso o parâmetro seja ['foguete', 'não', 'tem', 'ré'], espera-se como retorno 'ré', 'foguete'.", () => {
    expect(concatName(['foguete', 'não', 'tem', 'ré'])).toBe('ré, foguete');
  });
  it("caso o parâmetro seja ['captain', 'my', 'captain'], espera-se como retorno 'captain', 'captain'.", () => {
    expect(concatName(['captain', 'my', 'captain'])).toBe('captain, captain');
  });
});
