function fizzBuzz0(number) {
  if (typeof number !== 'number') {
    return number;
  }

  if (number % 3 === 0 && number % 5 === 0) {
    return 'FizzBuzz';
  }

  if (number % 3 === 0) {
    return 'Fizz';
  }

  if (number % 5 === 0) {
    return 'Buzz';
  }

  return number;
}

const fizzBuzz1 = (number) => {
  if (typeof number !== 'number') {
    return number;
  }

  if (number % 3 === 0 && number % 5 === 0) {
    return 'FizzBuzz';
  }

  if (number % 3 === 0) {
    return 'Fizz';
  }

  if (number % 5 === 0) {
    return 'Buzz';
  }

  return number;
};

console.log(`String = ${fizzBuzz0('String')}`);
console.log(`'100' = ${fizzBuzz0('100')}`);
console.log(`'-5.32' = ${fizzBuzz0('-5.32')}`);
console.log(`'2,5' = ${fizzBuzz0('2,5')}`);

console.log();

for (let i = 0; i <= 100; i += 1) {
  console.log(`${i} = ${fizzBuzz0(i)}`);
}

console.log();

console.log(`String = ${fizzBuzz1('String')}`);
console.log(`'100' = ${fizzBuzz1('100')}`);
console.log(`'-5.32' = ${fizzBuzz1('-5.32')}`);
console.log(`'2,5' = ${fizzBuzz1('2,5')}`);

console.log();

for (let i = 0; i <= 100; i += 1) {
  console.log(`${i} = ${fizzBuzz1(i)}`);
}
