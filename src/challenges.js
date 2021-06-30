// Desafio 1
function compareTrue(value1,value2) {
  // seu código aqui
  if(value1 === true && value2 === true){
    result = true;
  } else {
    result = false;
  }
  return result;
}
console.log(compareTrue(true,true));

// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  let area = (base*height)/2;
  return area;
}
console.log(calcArea(51,1));


// Desafio 3
function splitSentence(string) {
  // seu código aqui

}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  let valueWins = 3 * wins;
  let totalPoints = valueWins + ties;
  return totalPoints;
}
console.log(footballPoints(0,0));

// Desafio 6
let checkArray = [1, 9, 2, 3, 9, 5, 7];
function highestCount(numbersArray) {
  // seu código aqui
  let cont = 0;
  let acum = numbersArray[0];
  let add = 0;
  // for(let index = 1; index < numbersArray.length; index += 1){
  for(teste in numbersArray){
    if(numbersArray[teste] > acum){
      acum = numbersArray[teste];
    }
  } 
  for(let indexValue = 0; indexValue < numbersArray.length; indexValue += 1){
    if(numbersArray[indexValue] === acum){
      add = add + 1;
    }
  }
  return add;
  }
console.log(highestCount(checkArray));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

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
