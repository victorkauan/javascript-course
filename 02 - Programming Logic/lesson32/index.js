let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

console.log(a, b, c);

const letters = [b, c, a];
[a, b, c] = letters;

console.log(a, b, c);

const numbers0 = [1, 2, 3];
[a, b, c] = numbers0;

console.log(a, b, c);

console.log();

// Indexes:          0   1   2   3   4   5   6   7   8
const numbers1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const [
  firstNumber,
  secondNumber,
  thirdNumber,
  ,
  // fourthNumber,
  fifthNumber,
  ,
  // sixthNumber,
  seventhNumber,
  // eighthNumber,
  // ninthNumber,
  ...rest // Rest or spread operator
] = numbers1;

// const firstNumber = numbers1[0];
// const secondNumber = numbers1[1];
// const thirdNumber = numbers1[2];
// const fourthNumber = numbers1[3];
// const fifthNumber = numbers1[4];
// const sixthNumber = numbers1[5];
// const seventhNumber = numbers1[6];
// const eighthNumber = numbers1[7];
// const ninthNumber = numbers1[8];

console.log(numbers1[0], numbers1[1]);
console.log(firstNumber, secondNumber);
console.log(fifthNumber, seventhNumber);
console.log(rest);

console.log();

const numbers2 = [
  /*       0  1  2 */
  /* 0 */ [1, 2, 3],
  /* 1 */ [4, 5, 6],
  /* 2 */ [7, 8, 9],
];

const [, [, , numberSix0]] = numbers2;

const [arrayOne, arrayTwo, arrayThree] = numbers2;
const [, , numberSix1] = arrayTwo;

console.log(numberSix0);
console.log(numberSix1);
console.log(arrayTwo[2]);
console.log(numbers2[1][2]);

console.log();

console.log(arrayTwo);
console.log(numbers2);
