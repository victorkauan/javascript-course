/*
  Logical operators
  - AND: &&
  - OR: ||
  - NOT: !
*/

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log();

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log();

console.log(!true);
console.log(!false);

console.log();

const andExpression = true && true && true && true;

console.log(andExpression);
console.log(true && true && true);
console.log(true && true && false && true);

console.log();

const orExpression = false || false || false || true;

console.log(orExpression);
console.log(true || false || true);
console.log(false || false || false || false);

console.log();

const notExpression = !!false;

console.log(notExpression);
console.log(!!!true);
console.log(!!!!false);
console.log(!!!!!!!true);

console.log();

const username = 'victorkauan';
const password = '12345678';

const authenticated = username === 'victorkauan' && password === '12345678';

console.log(authenticated);
