// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  let result;
  if (value1 === true && value2 === true) {
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
let phrase = 'vamo que vamo';
function splitSentence(divFrase) {
  // seu código aqui
  let newVector = [''];
  let cont = 0;
  for (key in divFrase) {
    if (divFrase[key] !== ' ') {
      newVector[cont] = newVector[cont] + divFrase[key];
    } else {
      cont += 1;
      newVector[cont] = '';
      // newVector[cont] = newVector[cont] + divFrase[key];
    }
  }
  return newVector;
}
console.log(splitSentence(phrase));

// Desafio 4
let names = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
function concatName(name) {
  // seu código aqui
  let invertName = '';
  for (key in name){
    invertName = name[key] + ', ' + name[0];
  }
  return invertName;
}
console.log(concatName(names));


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
  for (let teste in numbersArray) {
    if (numbersArray[teste] > acum) {
      acum = numbersArray[teste];
    }
  }
  // for(let indexValue = 0; indexValue < numbersArray.length; indexValue += 1){
  for (let quant in numbersArray) {
    if (numbersArray[quant] === acum) {
      add += 1;
    }
  }
  return add;
}
console.log(highestCount(checkArray));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let catWinner;
  let difPosCat1 = cat1 - mouse;
  if (difPosCat1 < 0) {
    difPosCat1 = difPosCat1 * (-1);
  }
  let difPosCat2 = cat2 - mouse;
  if (difPosCat2 < 0) {
    difPosCat2 = difPosCat2 * (-1);
  }
  if (difPosCat1 < difPosCat2) {
    catWinner = 'cat1';
  } else if (difPosCat1 > difPosCat2) {
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
  let dado;
  for (let numbers in arrayDeNumeros) {
    let divTree = arrayDeNumeros[numbers] % 3;
    let divFive = arrayDeNumeros[numbers] % 5;
    if (divTree === 0 && divFive === 0) {
      dado = 'fizzBuzz';
    } else if (divTree === 0) {
      dado = 'fizz';
    } else if (divFive === 0) {
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
let stringValue = 'hi there';
function encode(stringParam) {
  // seu código aqui
  let res;
  let text = '';
  for (let index in stringParam) {
    switch (stringParam[index]) {
    case 'a':
      res = 1;
      break;
    case 'e':
      res = 2;
      break;
    case 'i':
      res = 3;
      break;
    case 'o':
      res = 4;
      break;
    case 'u':
      res = 5;
      break;
    default:
      res = stringParam[index];
    }
    text += res;
  }
  return text;
}
console.log(encode(stringValue));

let newStringValue = 'h3 th2r2';
function decode(strParam) {
  // seu código aqui
  let resultado;
  let textDec = '';
  for (let index in strParam) {
    switch (strParam[index]) {
    case '1':
      resultado = 'a';
      break;
    case '2':
      resultado = 'e';
      break;
    case '3':
      resultado = 'i';
      break;
    case '4':
      resultado = 'o';
      break;
    case '5':
      resultado = 'u';
      break;
    default:
      resultado = strParam[index];
    }
    textDec += resultado;
  }
  return textDec;
}
console.log(decode(newStringValue));

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