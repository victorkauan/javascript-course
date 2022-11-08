// String
const name0 = 'Victor';
const name1 = "Victor";
const name2 = `Victor`;

// Number
const number0 = 20;
const number1 = 15.23;

let studentFirstName; // Undefined (Does not point to any memory location)
const studentLastName = null; // Null (Does not point to any memory location)

//Boolean (true or false, logical value)
const boolean = true;

console.log(typeof name0, name0);
console.log(typeof number0, number0);
console.log(typeof number1, number1);
console.log(typeof studentFirstName, studentFirstName);
console.log(typeof studentLastName, studentLastName);
console.log(typeof boolean, boolean);

// [EXTRA] Value per reference
const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);

// Primitive data types
console.log(a, b);

let c = 1;
const d = c;

console.log(c, d);

c = 2;

console.log(c, d);
