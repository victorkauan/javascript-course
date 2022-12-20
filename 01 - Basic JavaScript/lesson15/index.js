// Indexes:          012345
const studentName = 'Victor';

console.log(studentName);
console.log(studentName[0]);
console.log(studentName[5]);

console.log();

// Indexes:       0         1         2
const students = ['Victor', 'Felipe', 'João'];

console.log(students);
console.log(students[0]);
console.log(students[2]);
console.log(students[10]);
console.log(students.length);

console.log();

students[0] = 'Kauan';

students[3] = 'Victor';
students[students.length] = 'Roberto';
students.push('Ana');
students.unshift('Paula');

console.log(students);
console.log(students.length);

console.log();

const firstStudent = students.shift();
const lastStudent = students.pop();

console.log(firstStudent);
console.log(lastStudent);
console.log(students);

console.log();

delete students[0];

console.log(students[0]);
console.log(students);

console.log();

console.log(students.slice(0, 3));
console.log(students.slice(0, -2));

console.log();

console.log(typeof students);
console.log(students instanceof Array);
console.log(typeof studentName);
console.log(studentName instanceof Array);
