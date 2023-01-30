function functionWithArguments(firstArgument, secondArgument) {
  console.log(arguments);

  console.log();

  console.log(arguments[0], firstArgument);
  console.log(arguments[1], secondArgument);
  console.log(arguments[arguments.length - 1]);
  console.log(arguments[3]);
  console.log(arguments[32]);
  console.log(arguments[-1]);
}

functionWithArguments('string', false, 283, 12.23, { value: 239 });

console.log();

function sumArguments() {
  let total = 0;

  for (let argument of arguments) {
    total += argument;
  }

  console.log(total);
}

sumArguments(0, 2.66, 123, -93.578, 514, 3, 66.3, 12, -23);

console.log();

function functionWithDefaultParameterValues(
  firstNumber,
  secondNumber = 10,
  thirdNumber = 8,
  fourthNumber
) {
  fourthNumber = fourthNumber || 3;

  console.log(firstNumber + secondNumber + thirdNumber + fourthNumber);
}

functionWithDefaultParameterValues(14, undefined, 2);

console.log();

function functionWithObjectDestructuring({ firstName, lastName, age }) {
  console.log(`My name is ${firstName} ${lastName} and I'm ${age} years old!`);
}

const person = { firstName: 'Victor', lastName: 'Kauan', age: 20 };
functionWithObjectDestructuring(person);

function functionWithArrayDestructuring([firstName, lastName, age]) {
  console.log(`My name is ${firstName} ${lastName} and I'm ${age} years old!`);
}

functionWithArrayDestructuring(['Victor', 'Kauan', 20]);

console.log();

function functionWithRestOperator(operator, accumulator, ...numbers) {
  switch (operator) {
    case '+':
      for (let number of numbers) {
        accumulator += number;
      }
      break;
    case '-':
      for (let number of numbers) {
        accumulator -= number;
      }
      break;
    case '*':
      for (let number of numbers) {
        accumulator *= number;
      }
      break;
    case '/':
      for (let number of numbers) {
        accumulator /= number;
      }
      break;
  }

  console.log(accumulator);
}

functionWithRestOperator('+', 0, 23, 1, -3, 100.32);
functionWithRestOperator('-', 20, 65, 0, -32, -1.1);
functionWithRestOperator('*', 1, 86, 10);
functionWithRestOperator('/', 100, 2, 2, 3);

console.log();

const functionExpressionWithArguments = function () {
  console.log(arguments);
};

functionExpressionWithArguments(10, false, 'Victor');

const arrowFunctionWithArguments = (...arguments) => {
  // console.log(arguments); // [ERROR]
  console.log(arguments);
};

arrowFunctionWithArguments(10, false, 'Victor');
