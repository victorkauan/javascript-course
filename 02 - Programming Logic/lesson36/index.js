// Indexes:     0       1        2
const fruits = ['Pear', 'Apple', 'Grape'];

for (let i = 0; i < fruits.length; i += 1) {
  console.log(`Index: ${i} - Fruit: ${fruits[i]}`);
}

console.log();

for (let i in fruits) {
  console.log(`Index: ${i} - Fruit: ${fruits[i]}`);
}

console.log();

const person = {
  firstName: 'Victor',
  lastName: 'Kauan',
  age: 28,
};

for (let key in person) {
  console.log(`Key: ${key} - Value: ${person[key]}`);
}
