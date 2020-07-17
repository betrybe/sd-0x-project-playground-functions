const challenges = require('../src/challenges');

describe('Analisando as datas', () => {
  it('Se não possível, em nenhuma ordem, formar uma data, deve-se retornar "números inválidos"', () => {
    expect(challenges.dateCheck(13, 24, 42)).toBe('números inválidos');
    expect(challenges.dateCheck(45, 64, 21)).toBe('números inválidos');
    expect(challenges.dateCheck(13, 14, 51)).toBe('números inválidos');
  });

  it('Se os valores passados formarem diversas datas, deve-se retornar a string "múltiplas datas"', () => {
    expect(challenges.dateCheck(10, 12, 99)).toBe('múltiplas datas');
    expect(challenges.dateCheck(05, 08, 20)).toBe('múltiplas datas');
    expect(challenges.dateCheck(12, 06, 10)).toBe('múltiplas datas');
  });

  it('Se os números podem formar apenas uma data, deve-se retornar uma string no formato "DD/MM/AA"', () => {
    expect(challenges.dateCheck(65, 12, 30)).toBe('30/12/65');
    expect(challenges.dateCheck(39, 24, 07)).toBe('24/07/39');
    expect(challenges.dateCheck(06, 13, 81)).toBe('13/06/81');
  });
});
