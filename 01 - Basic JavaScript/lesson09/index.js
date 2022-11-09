// OPERATORS
// - Arithmetic:
/*
  + (Add and concatenate)
  - (Subtract)
  * (Multiply)
  / (Divide)
  ** (Potentiate)
  % (Rest of division)
*/

const number1 = 10;
const number2 = 3;

console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);
console.log(number1 ** number2);
console.log(number1 % number2);

/*
  Precedence levels:
  1. ()
  2. **
  3. * / %
  4. + -
*/

const number3 = 5;

console.log(number1 + number2 * number3);
console.log((number1 + number2) * number3);
console.log(number1 / number2 * number3);

// - Increment (++) and decrement (--):
let counter = 0;
console.log(counter++);
console.log(counter);
console.log(++counter);
console.log(counter);

console.log(counter--);
console.log(counter);
console.log(--counter);
console.log(--counter);
console.log(counter);

counter++;
console.log(counter);

// - Assignment:
counter += 2; // counter = counter + 10;
console.log(counter);
counter *= 3; // counter = counter * 3;
console.log(counter);
counter **= 2; // counter = counter ** 2;
console.log(counter);
counter -= 5; // counter = counter - 5;
console.log(counter);
counter /= 2; // counter = counter / 2;
console.log(counter);

const number4 = 'Victor';
console.log(number1 * number4); // NaN = Not a Number
const number5 = '10';
console.log(number1 * number5);
const number6 = 'V10';
console.log(number1 * number6); // NaN = Not a Number

const number7 = parseInt('20');
console.log(number1 + number7);
console.log(typeof number7);

const number8 = parseFloat('10.25');
console.log(number1 + number8);
console.log(typeof number8);

const number9 = Number('15.125');
const number10 = Number('8');
console.log(number9 + number10);
console.log(typeof number9);
console.log(typeof number10);
