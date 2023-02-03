function returnFunction(lastName) {
  const firstName = 'Victor';
  return () => (lastName ? `${firstName} ${lastName}` : firstName);
}

const returnedFunction0 = returnFunction();
const returnedFunction1 = returnFunction('Kauan');
const returnedFunction2 = returnFunction('Doe');

console.log(returnedFunction0);
console.dir(returnedFunction0);

console.log();

console.log(returnedFunction1);
console.dir(returnedFunction1);

console.log();

console.log(returnedFunction2);
console.dir(returnedFunction2);

console.log();

console.log(returnedFunction0());
console.log(returnedFunction1());
console.log(returnedFunction2());
