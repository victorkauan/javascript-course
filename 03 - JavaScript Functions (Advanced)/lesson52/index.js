const firstName = 'Victor';
const lastName = 'Kauan';

function sayFullName() {
  const firstName = 'John';
  console.log(`${firstName} ${lastName}`);
}

function callSayFullName() {
  const lastName = 'Doe';
  sayFullName();
}

callSayFullName();
