const challenges = require('../src/challenges');

describe('MonkeyTalk', () => {
  it('Ao receber uma frase a função deve transformar as palavras da frase em Ook ou em Eek e então retorna a frase com as palavras substituídas.', () => {
    expect(challenges.monkeyTalk('Hello World at Trybe')).toBe('Ook ook eek ook.');
    expect(challenges.monkeyTalk('I monkey')).toBe('Eek ook.');
    expect(challenges.monkeyTalk('go Trybe')).toBe('Ook ook.');
    expect(challenges.monkeyTalk('Xablau')).toBe('Ook.');
    expect(challenges.monkeyTalk('Foguete não tem ré')).toBe('Ook ook ook ook.');
    expect(challenges.monkeyTalk('Que a força esteja com você')).toBe('Ook eek ook eek ook ook.');
  });
});
