let number1 = 24; // Number
let number2 = 2.512387; // Number

console.log(number1.toString() + number2);

console.log();

// Do not change the variable type
console.log(typeof number1.toString());
console.log(typeof number1);

console.log();

// Change the variable type
number1 = number1.toString();
console.log(typeof number1);

number1 = Number(number1);
console.log(typeof number1);

console.log();

console.log(number1.toString(2)); // Binary representation
console.log(number1.toString(8)); // Octal representation
console.log(number1.toString(10)); // Decimal representation
console.log(number1.toString(16)); // Hexadecimal representation

console.log();

console.log(number2.toFixed(2));
console.log(number2.toFixed(4));
console.log(typeof number2.toFixed(2));
console.log(typeof number2.toFixed(4));

console.log();

console.log(Number.isInteger(number1));
console.log(Number.isInteger(number2));
console.log(Number.isInteger(1.0));

console.log();

let temporary = number1 * 'string';
console.log(Number.isNaN(temporary));

temporary = number1 * '5';
console.log(Number.isNaN(temporary));

temporary = number1 + '5';
console.log(Number.isNaN(temporary));

console.log();

// IEEE 754-2008 (Standard for Floating-Point Arithmetic)
let number3 = 0.7;
let number4 = 0.1;

console.log(number3 + number4);

number3 += number4; // 0.8
number3 += number4; // 0.9
number3 += number4; // 1.0

console.log(number3);

console.log();

number3 = number3.toFixed(2);
console.log(number3);
console.log(Number.isInteger(number3));

console.log();

number3 = Number(number3);
console.log(number3);
console.log(Number.isInteger(number3));

console.log();

number3 += number4; // 1.1
number3 += number4; // 1.2
number3 += number4; // 1.3
number3 += number4; // 1.4
number3 += number4; // 1.5

number3 = Number(number3.toFixed(2));
console.log(number3);
console.log(Number.isInteger(number3));

console.log();

let number5 = 0.7;
let number6 = 0.1;

console.log(number5 + number6);
console.log((number5 * 100 + number6 * 100) / 100);
console.log((number5 * 100 + number6 * 100 * 2) / 100);
console.log((number5 * 100 + number6 * 100 * 3) / 100);
