// It's not necessary to refer the window object to use these functions
alert('Alert message!');
const confirmAnswer = confirm('Do you really want to delete this post?'); // Return true or false
const promptAnswer = prompt('Enter your name:'); // Return a string

const number1 = Number(prompt('Enter a number:'));
const number2 = Number(prompt('Enter another number:'));

console.log(confirmAnswer);
console.log(promptAnswer);

alert(`The result of ${number1} + ${number2} is ${number1 + number2}!`);
