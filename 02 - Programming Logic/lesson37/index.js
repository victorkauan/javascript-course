// Indexes:       0123456...
const userName = 'Victor Kauan';

for (let i = 0; i < userName.length; i += 1) {
  console.log(`Index: ${i} - Character: ${userName[i]}`);
}

console.log();

for (let i in userName) {
  console.log(`Index: ${i} - Character: ${userName[i]}`);
}

console.log();

for (let character of userName) {
  console.log(`Character: ${character}`);
}

console.log();

const names = ['Victor', 'Luiz', 'João', 'Felipe', 'Diego'];

for (let i = 0; i < names.length; i += 1) {
  console.log(`Index: ${i} - Name: ${names[i]}`);
}

console.log();

for (let i in names) {
  console.log(`Index: ${i} - Name: ${names[i]}`);
}

console.log();

for (let name of names) {
  console.log(`Name: ${name}`);
}

console.log();

names.forEach((element, index, array) => {
  console.log(`Index: ${index} - Name: ${element}`);
  console.log(`Array:`, array);
});

const person = {
  firstName: 'Victor',
  lastName: 'Kauan',
  age: 38,
};

// [ERROR]
// for (let value of person) {
//   // Code
// }
