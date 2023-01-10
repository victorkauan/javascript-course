let i = 0;

while (i <= 10) {
  console.log(i);
  i += 1;
}

console.log();

const userName = 'Victor';

let counter0 = 0;

while (counter0 < userName.length) {
  console.log(`Index: ${counter0} - Character: ${userName[counter0]}`);
  counter0 += 1;
}

console.log();

function generateRandomNumber(minimum, maximum) {
  const randomNumber = Math.random() * (maximum - minimum) + minimum;
  return Math.floor(randomNumber);
}

const minimum = 1;
const maximum = 50;

let randomNumber0 = generateRandomNumber(minimum, maximum);

console.log(randomNumber0);

while (randomNumber0 !== 10) {
  randomNumber0 = generateRandomNumber(minimum, maximum);
  console.log(randomNumber0);
}

console.log();

let randomNumber1;

do {
  randomNumber1 = generateRandomNumber(minimum, maximum);
  console.log(randomNumber1);
} while (randomNumber1 !== 10);
