function sumWithReturn(a, b) {
  return a + b;
}

console.log(sumWithReturn(1, 2));
console.log(sumWithReturn(-58, 120));
console.log(sumWithReturn(-10, -39));

console.log();

function sumWithoutReturn(a, b) {
  console.log(a + b);
}

console.log(sumWithoutReturn(10, 3));
console.log(sumWithoutReturn(-3, 123));
console.log(sumWithoutReturn(-10, 300));

console.log();

function createPerson(firstName, lastName) {
  return { firstName, lastName };
}

const person0 = createPerson('Victor', 'Kauan');
const person1 = { firstName: 'Victor', lastName: 'Kauan' };

console.log(typeof person0, person0);
console.log(typeof person1, person1);

console.log();

function sayBeginning(beginning) {
  function sayRest(rest) {
    return `${beginning} ${rest}`;
  }

  return sayRest;
}

const helloWorldFunction = sayBeginning('Hello');
const helloWorld = helloWorldFunction('World!');

console.log(sayBeginning);
console.log(helloWorldFunction);
console.log(helloWorld);

console.log();

// function double(number) {
//   return number * 2;
// }

// function triple(number) {
//   return number * 3;
// }

// function quadruple(number) {
//   return number * 4;
// }

function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log(double(4));
console.log(triple(4));
console.log(quadruple(4));

console.log();

console.log(double(30));
console.log(triple(20));
console.log(quadruple(15));
