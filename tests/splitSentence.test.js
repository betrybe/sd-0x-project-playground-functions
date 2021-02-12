const { splitSentence } = require('../src/challenges');

describe('3 - Crie uma função que divida a frase', () => {
  it('se a função receber a string \'go Trybe\', o retorno deverá ser [\'go\', \'Trybe\'].', () => {
    expect(splitSentence('go Trybe')).toEqual(['go', 'Trybe']);
  });
  it('se a função receber a string \'vamo que vamo\', o retorno deverá ser [\'vamo\', \'que\', \'vamo\'].', () => {
    expect(splitSentence('vamo que vamo')).toEqual(['vamo', 'que', 'vamo']);
  });
  it('se a função receber a string \'foguete\', o retorno deverá ser [\'foguete\'].', () => {
    expect(splitSentence('foguete')).toEqual(['foguete']);
  });
});
