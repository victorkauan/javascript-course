const firstName = 'Victor';
const lastName = 'Kauan';
const age = 18;
const heightInMeters = 1.67;
const weight = 52;

let bodyMassIndex;
let yearOfBirth;

bodyMassIndex = weight / (heightInMeters * heightInMeters);
yearOfBirth = 2022 - age;

console.log(`${firstName} ${lastName} is ${age} years old, weighs ${weight} kg,`);
console.log(`is ${heightInMeters} meters tall and his BMI is ${bodyMassIndex}.`);
console.log(`${firstName} was born in ${yearOfBirth}.`);
