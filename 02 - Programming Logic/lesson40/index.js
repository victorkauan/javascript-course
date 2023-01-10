const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i += 1) {
  const number = numbers[i];

  if (number === 2) {
    console.log('Number 2 skipped.');
    continue;
  }

  console.log(number);

  if (number === 7) {
    console.log('Number 7 found, stopping loop...');
    break;
  }
}

console.log();

for (let i in numbers) {
  const number = numbers[i];

  if (number === 2) {
    console.log('Number 2 skipped.');
    continue;
  }

  console.log(number);

  if (number === 7) {
    console.log('Number 7 found, stopping loop...');
    break;
  }
}

console.log();

for (let number of numbers) {
  if (number === 2) {
    console.log('Number 2 skipped.');
    continue;
  }

  console.log(number);

  if (number === 7) {
    console.log('Number 7 found, stopping loop...');
    break;
  }
}

console.log();

let counter0 = 0;

while (counter0 < numbers.length) {
  const number = numbers[counter0];

  if (number === 2) {
    counter0 += 1;
    console.log('Number 2 skipped.');
    continue;
  }

  console.log(number);

  if (number === 7) {
    console.log('Number 7 found, stopping loop...');
    break;
  }

  counter0 += 1;
}

console.log();

let counter1 = 0;

do {
  const number = numbers[counter1];

  if (number === 2) {
    counter1 += 1;
    console.log('Number 2 skipped.');
    continue;
  }

  console.log(number);

  if (number === 7) {
    console.log('Number 7 found, stopping loop...');
    break;
  }

  counter1 += 1;
} while (counter1 < numbers.length);
