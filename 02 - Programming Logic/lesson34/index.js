console.log('Line 0');
console.log('Line 1');
console.log('Line 2');
console.log('Line 3');
console.log('Line 4');
console.log('Line 5');

console.log();

// i = index
for (let i = 0; i <= 5; i += 1) {
  console.log(`Line ${i}`);
}

console.log();

for (let i = 100; i <= 150; i += 10) {
  console.log(`Line ${i}`);
}

console.log();

for (let i = -93; i <= 15; i += 6) {
  console.log(`Line ${i}`);
}

console.log();

for (let i = 10; i >= 0; i -= 1) {
  console.log(`Line ${i}`);
}

console.log();

for (let i = 0; i <= 10; i += 1) {
  const oddEven = i % 2 === 0 ? 'even' : 'odd';

  console.log(`${i} is ${oddEven}`);
}

console.log();

const fruits = [
  'Pear', // 0
  'Grape', // 1
  'Apple', // 2
  'Banana', // 3
  'Orange', // 4
  'Pineapple', // 5
  'Strawberry', // 6
];

for (let i = 0; i < fruits.length; i += 1) {
  console.log(`Index: ${i} - Fruit: ${fruits[i]}`);
}
