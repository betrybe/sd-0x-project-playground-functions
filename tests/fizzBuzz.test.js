const { fizzBuzz } = require('../src/challenges');

describe('8 - Crie uma função FizzBuzz', () => {
  it('caso o parâmetro seja [2, 15, 7, 9, 45], o retorno deve ser [\'bug!\', \'fizzBuzz\', \'bug!\', \'fizz\', \'fizzBuzz\']', () => {
    expect(fizzBuzz([2, 15, 7, 9, 45])).toEqual(['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']);
  });
  it('caso o parâmetro seja [7, 9], o retorno deve ser [\'bug!\', \'fizz\']', () => {
    expect(fizzBuzz([7, 9])).toEqual(['bug!', 'fizz']);
  });
  it('caso o parâmetro seja [9, 25], o retorno deve ser [\'fizz\', \'buzz\']', () => {
    expect(fizzBuzz([9, 25])).toEqual(['fizz', 'buzz']);
  });
});
