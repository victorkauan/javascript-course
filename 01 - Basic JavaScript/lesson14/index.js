let number1 = 23.8692;

let number2 = Math.floor(number1);
let number3 = Math.ceil(number1);
let number4 = Math.round(number1);

console.log(number1);
console.log(number2);
console.log(number3);
console.log(number4);

console.log();

console.log(Math.max(1, -5, 129, -103, 0, 23, 1.52, 200.5));
console.log(Math.min(1, -5, 129, -103, 0, 23, 1.52, 200.5));

console.log();

const random = Math.round(Math.random() * (10 - 5) + 5);

console.log(Math.random());
console.log(random);

console.log();

console.log(Math.PI);

console.log();

console.log(Math.pow(2, 10));
console.log(2 ** 10);

console.log();

console.log(Math.sqrt(16));
console.log(16 ** (1 / 2));
console.log(Math.sqrt(100));
console.log(100 ** (1 / 2));

console.log();

console.log(100 / 0);
console.log(typeof (100 / 0));
console.log(100 / 10 ** -306);
console.log(100 / 10 ** -307);
