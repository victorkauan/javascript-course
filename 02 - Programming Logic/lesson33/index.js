const person = {
  firstName: 'Victor',
  lastName: 'Kauan',
  age: 26,
  address: {
    street: 'Street VK',
    number: 32,
    zipcode: 90732,
  },
};

console.log(person);

console.log();

const personFirstName = person.firstName;
const personLastName = person.lastName;
const personAge = person.age;

const { firstName, lastName, age } = person;

console.log(person.firstName);
console.log(person['firstName']);
console.log(personFirstName);
console.log(firstName);

console.log();

console.log(`${personFirstName} ${personLastName} is ${personAge} years old.`);
console.log(`${firstName} ${lastName} is ${age} years old.`);

console.log();

const { invalidFirstName, invalidLastName = '', invalidAge = 20 } = person;

console.log(
  `${invalidFirstName} ${invalidLastName} is ${invalidAge} years old.`
);

console.log();

const {
  firstName: firstNameProperty,
  lastName: lastNameProperty = 'Felipe',
  invalidAge: ageProperty = 16,
} = person;

console.log(
  `${firstNameProperty} ${lastNameProperty} is ${ageProperty} years old.`
);

console.log();

const {
  address,
  address: { street, number, zipcode },
} = person;

console.log(address);
console.log(`${street}, ${number} - ${zipcode}`);

console.log();

const {
  firstName: userFirstName = 'Felipe',
  lastName: userLastName,
  ...rest
} = person;

console.log(userFirstName, userLastName);
console.log(rest);
