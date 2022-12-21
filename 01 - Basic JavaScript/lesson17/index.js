const firstName01 = 'Maria';
const lastName01 = 'Roberta';
const age01 = 32;

const person01 = {
  firstName: 'Maria',
  lastName: 'Roberta',
  age: 32,
};

console.log(firstName01);
console.log(lastName01);
console.log(person01.firstName);
console.log(person01.lastName);

console.log();

function createPerson(firstName, lastName, age) {
  return {
    firstName, // firstName: firstName
    lastName, // lastName: lastName
    age, // age: age
  };
}

const person02 = createPerson('Ana', 'Paula', 10);
const person03 = createPerson('Felipe', 'Luiz', 84);
const person04 = createPerson('João', 'Otávio', 25);

console.log(person02.firstName, person02.lastName);
console.log(person03.firstName, person03.lastName);
console.log(person04.firstName, person04.lastName);

console.log();

const person05 = {
  firstName: 'Victor',
  lastName: 'Kauan',
  age: 18,
  introduceYourself() {
    console.log(
      `Hi, my name is ${this.firstName} ${this.lastName} and I'm ${this.age} years old!`
    );
  },
  increaseAge() {
    this.age += 1;
  },
};

console.log(person05.firstName, person05.lastName);
person05.introduceYourself();
person05.increaseAge();
person05.introduceYourself();
