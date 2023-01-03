/*
  Falsy values
  - false
  - 0
  - -0
  - 0n
  - -0n
  - '', "", ``
  - null
  - undefined
  - NaN
*/

console.log('Victor' && 0 && 'Luiz');
console.log('Ana' && 'Otávio' && NaN);
console.log('Victor' && '' && 'Ana');
console.log(true && true && 'Luiz');
console.log('Maria' && 'Victor' && 'Kauan');

console.log();

function sayHi() {
  return 'Hi';
}

let runFunction;
console.log(runFunction && sayHi());

runFunction = 'João';
console.log(runFunction && sayHi());

runFunction = false;
console.log(runFunction && sayHi());

runFunction = true;
console.log(runFunction && sayHi());

console.log();

console.log(0 || null || undefined || false || 'Victor' || true);
console.log(0 || null || undefined || false || true || 'Victor');
console.log('Kauan' || undefined || 0 || null);
console.log(0 || '' || null || undefined || false || NaN || -0 || 0n);

console.log();

let userColor = null;
let color = userColor || 'green';

console.log(color);

userColor = 'blue';
color = userColor || 'green';

console.log(color);

console.log();

console.log(0 || null || undefined || 'null' || NaN || false || '');
