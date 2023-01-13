// Function declaration
sayHi(); // Hoisting

function sayHi() {
  console.log('Hi!');
}

sayHi();

console.log();

// First-class function (First-class object)
// iAmData0(); // [ERROR]

// Function expression
const iAmData0 = function () {
  console.log('I am data!');
};

// Function expression
const iAmData1 = function iAmData1() {
  console.log('I am data!');
};

iAmData0();
iAmData1();

console.log();

// Run functions in other functions
function runFunction(anyFunction) {
  anyFunction();
}

runFunction(sayHi);
runFunction(iAmData0);
runFunction(iAmData1);

console.log();

// Arrow function
// arrowFunction(); // [ERROR]

// Function expression
const arrowFunction = () => {
  console.log('I am an arrow function!');
};

arrowFunction();

console.log();

// person.speak0(); // [ERROR]
// person.speak1(); // [ERROR]
// person.speak2(); // [ERROR]
// person.speak3(); // [ERROR]

// Function in object
const person = {
  firstName: 'Victor',
  lastName: 'Kauan',
  age: 20,
  speak0() {
    console.log('Speaking...');
  },
  speak1: function () {
    console.log('Speaking...');
  },
  speak2: function speak2() {
    console.log('Speaking...');
  },
  speak3: () => {
    console.log('Speaking...');
  },
};

person.speak0();
person.speak1();
person.speak2();
person.speak3();
