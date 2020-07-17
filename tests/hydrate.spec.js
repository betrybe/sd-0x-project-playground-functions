const challenges = require('../src/challenges');

describe('Bem vindo ao Bar da Trybe!', () => {
  it('Ao receber uma string  retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(challenges.hydrate('1 cerveja')).toBe('1 copo de água');
    expect(challenges.hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(challenges.hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(challenges.hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(challenges.hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
