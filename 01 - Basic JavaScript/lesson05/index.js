/*
  RULES AND TIPS FOR CREATING CONSTANTS:
  - Do not use var, use const;
  - To name constants, use camelCase;
  - Constant values cannot be changed;
  - Constants cannot have reserved names;
  - Constants must have meaningful names;
  - Constant names cannot start with a number;
  - Constant names cannot contain spaces or dashes;
  - Constants are case-sensitive (there is a distinction between uppercase and lowercase letters).
*/

const firstNumber = 5;
const secondNumber = 10;

const product = firstNumber * secondNumber;
const doubledProduct = product * 2;

let tripledProduct = product * 3;
tripledProduct = tripledProduct + 5;

console.log(product);
console.log(doubledProduct);
console.log(tripledProduct);

console.log(typeof '10');
console.log(typeof 10);

console.log('10' + 10);
console.log(typeof ('10' + 10));

console.log(10 + 10);
console.log(typeof (10 + 10));
