function greetingWithoutReturn(name) {
  console.log(`Good morning, ${name}!`);
}

greetingWithoutReturn('Victor');

const noReturnValue = greetingWithoutReturn('Felipe');

console.log(noReturnValue);

console.log();

function greetingWithReturn(name) {
  return `Good morning, ${name}!`;
}

greetingWithReturn('Ana');

const returnValue = greetingWithReturn('Kauan');

console.log(returnValue);

console.log();

function sum(x, y) {
  const result = x + y;

  console.log('Before return.');

  return result;

  console.log('After return.');
}

console.log(sum(1, 2));
console.log(sum(100, 100));

// console.log(result); // [ERROR]

const result = sum(53, -23);

console.log(result);

console.log();

console.log(sum());
console.log(sum(10));
console.log(sum('Victor', ' Kauan'));

console.log();

function sumWithDefaultParameters(x = 10, y = 5) {
  return x + y;
}

console.log(sumWithDefaultParameters());
console.log(sumWithDefaultParameters(100));
console.log(sumWithDefaultParameters(9, -9));
console.log(sumWithDefaultParameters(null, 100));
console.log(sumWithDefaultParameters(undefined, 100));

console.log();

const calculateSquareRoot = (number) => number ** 0.5;

// const calculateSquareRoot = (number) => {
//   return number ** 0.5;
// };

// const calculateSquareRoot = function (number) {
//   return number ** 0.5;
// };

console.log(calculateSquareRoot(16));
console.log(calculateSquareRoot(64));
console.log(calculateSquareRoot(100));
