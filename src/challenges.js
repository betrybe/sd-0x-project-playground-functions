// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true){
    result = true;
  } else {
    result = false;
  }
  return result;
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence() {
  // seu código aqui

}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let valueWins = 3 * wins;
  let totalPoints = valueWins + ties;
  return totalPoints;
}
console.log(footballPoints(0, 0));

// Desafio 6
let checkArray = [1, 9, 2, 3, 9, 5, 7];
function highestCount(numbersArray) {
  // seu código aqui
  let acum = numbersArray[0];
  let add = 0;
  // for(let index = 1; index < numbersArray.length; index += 1){
  for (let teste in numbersArray){
    if (numbersArray[teste] > acum){
      acum = numbersArray[teste];
    }
  } 
  //for(let indexValue = 0; indexValue < numbersArray.length; indexValue += 1){
  for (let quant in numbersArray){
    if (numbersArray[quant] === acum){
      add = add + 1;
    }
  }
    return add;
  }
console.log(highestCount(checkArray));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  difPosCat1 = cat1 - mouse;
  if (difPosCat1 < 0){
    difPosCat1 = difPosCat1 * (-1);
  }
  difPosCat2 = cat2 - mouse;
  if (difPosCat2 < 0){
    difPosCat2 = difPosCat2 * (-1);
  }
  if (difPosCat1 < difPosCat2){
    catWinner = 'cat1';
  } else if (difPosCat1 > difPosCat2){
    catWinner = 'cat2';
  } else {
    catWinner = 'os gatos trombam e o rato foge';
  }
  return catWinner;
}
console.log(catAndMouse(1, 0, 2));

// Desafio 8
let vector = [9, 25];

function fizzBuzz(arrayDeNumeros) {
  // seu código aqui
  let secondVector = [];
  for (numbers in arrayDeNumeros){
    let divTree = arrayDeNumeros[numbers] % 3;
    let divFive = arrayDeNumeros[numbers] % 5;
    if (divTree === 0 && divFive === 0){
      dado = 'fizzBuzz';
    } else if (divTree === 0){
      dado = 'fizz';
    } else if (divFive === 0){
      dado = 'buzz';
    } else {
      dado = 'bug!';
    }
    secondVector[numbers] = dado;
  }
  return secondVector;
}
console.log(fizzBuzz(vector));

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
