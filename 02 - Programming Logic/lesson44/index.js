try {
  console.log(invalidVariable);
} catch (error) {
  console.log('invalidVariable does not exist, it is not defined.');

  console.log();

  console.log(error);
}

console.log();

function sum0(firstNumber, secondNumber) {
  if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
    throw 'The first and second values must be numbers.';
  }

  return firstNumber + secondNumber;
}

try {
  console.log(sum0(1, -1));
  console.log(sum0('1', -1));
} catch (error) {
  console.log(error);
}

console.log();

function sum1(firstNumber, secondNumber) {
  if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
    throw new Error('The first and second values must be numbers.');
  }

  return firstNumber + secondNumber;
}

try {
  console.log(sum1(1, 0));
  console.log(sum1('1', 0));
} catch (error) {
  console.log(error);
}

console.log();

function sum2(firstNumber, secondNumber) {
  if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
    throw new TypeError('The first and second values must be numbers.');
  }

  return firstNumber + secondNumber;
}

try {
  console.log(sum2(-8, 10));
  console.log(sum2('-8', 10));
} catch (error) {
  console.log(error);
}
