let name0 = 'Victor'; // let statement has block scope
var name1 = 'Victor'; // var statement has function scope

console.log(name0, name1);

// let name0 = 'Kauan'; // [ERROR]
var name1 = 'Kauan';

console.log(name0, name1);

console.log();

{
  let name0 = 'João';
  var name1 = 'Otávio';

  console.log(name0, name1);

  {
    let name0 = 'Felipe';
    var name1 = 'Luiz';

    console.log(name0, name1);

    {
      console.log(name0, name1);
    }
  }

  console.log(name0, name1);
}

console.log();

{
  var greeting0 = 'Hello, good afternoon!';
  let greeting1 = 'Hello, good afternoon!';
}

console.log(greeting0);
// console.log(greeting1); // [ERROR]

console.log();

var lastName = 'Kauan';

function sayHi() {
  var firstName = 'Victor';

  console.log(`Hi, ${firstName} ${lastName}!`);

  function sayGoodbye() {
    var firstName = 'João';
    var goodbyeMessage = `Goodbye, ${firstName} ${lastName}!`;

    console.log(goodbyeMessage);
  }

  sayGoodbye();

  // console.log(goodbyeMessage); // [ERROR]
}

// console.log(firstName); // [ERROR]

sayHi();

console.log();

console.log(hoistingName0);
// console.log(hoistingName1); // [ERROR]
console.log(hoistingFunction());

console.log();

var hoistingName0 = 'Victor';
let hoistingName1 = 'Victor';
function hoistingFunction() {
  return 'Hello, world!';
}

console.log(hoistingName0);
console.log(hoistingName1);
console.log(hoistingFunction());
