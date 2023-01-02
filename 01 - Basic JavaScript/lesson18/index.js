// Data types
// - Primitive (immutable value): string, number, boolean, null, undefined, bigint and symbol

let username = 'Victor';

console.log(username);

// Indexes: 01234
username = 'Kauan';

console.log(username);

console.log();

console.log(username, username[0]);

username[0] = 'V';

console.log(username, username[0]);

console.log();

let a = 'Value A';
let b = a;

console.log(a, b);

a = 'Value AA';

console.log(a, b);

console.log();

// - Reference (mutable value): array, object and function

let arrayA = [1, 2, 3];
let arrayB = arrayA;
let arrayC = [...arrayB];
let arrayD = arrayC;

console.log(arrayA, arrayB, arrayC, arrayD);

arrayA.push(4);

console.log(arrayA, arrayB, arrayC, arrayD);

arrayB.pop();

console.log(arrayA, arrayB, arrayC, arrayD);

arrayA.push('Victor');

console.log(arrayA, arrayB, arrayC, arrayD);

arrayC.push(4);

console.log(arrayA, arrayB, arrayC, arrayD);

console.log();

const personA = {
  firstName: 'Victor',
  lastName: 'Kauan',
};

const personB = personA;
const personC = { ...personB };

console.log(personA, personB, personC);

personA.firstName = 'Felipe';

console.log(personA, personB, personC);

personC.lastName = 'Otávio';

console.log(personA, personB, personC);
