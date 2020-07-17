const { splitSentence } = require('../src/challenges');

describe('Dividindo a frase', () => {
  it("se a função receber a string 'go Trybe', o retorno deverá ser ['go', 'Trybe'].", () => {
    expect(splitSentence('go Trybe')).toBe(['go', 'Trybe']);
  });
  it("se a função receber a string 'vamo que vamo', o retorno deverá ser ['vamo', 'que', 'vamo'].", () => {
    expect(splitSentence('vamo que vamo')).toBe(['vamo', 'que', 'vamo']);
  });
  it("se a função receber a string 'foguete', o retorno deverá ser ['foguete'].", () => {
    expect(splitSentence('foguete')).toBe(['foguete']);
  });
});
