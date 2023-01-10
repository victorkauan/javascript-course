function getGreaterNumber0(firstNumber, secondNumber) {
  return firstNumber > secondNumber ? firstNumber : secondNumber;

  // if (firstNumber > secondNumber) {
  //   return firstNumber;
  // } else {
  //   return secondNumber;
  // }

  // if (firstNumber > secondNumber) {
  //   return firstNumber;
  // }
  // return secondNumber;

  // if (firstNumber > secondNumber) return firstNumber;
  // return secondNumber;
}

const getGreaterNumber1 = (firstNumber, secondNumber) =>
  firstNumber > secondNumber ? firstNumber : secondNumber;

// const getGreaterNumber1 = (firstNumber, secondNumber) => {
//   return firstNumber > secondNumber ? firstNumber : secondNumber;
// };

console.log(getGreaterNumber0(1, 5));
console.log(getGreaterNumber0(85, 124.23));
console.log(getGreaterNumber0(100, -12));
console.log(getGreaterNumber0(158, 157.5));
console.log(getGreaterNumber0(10.0, 10));

console.log();

console.log(getGreaterNumber1(1, 5));
console.log(getGreaterNumber1(85, 124.23));
console.log(getGreaterNumber1(100, -12));
console.log(getGreaterNumber1(158, 157.5));
console.log(getGreaterNumber1(10.0, 10));
