// Immediately Invoked Function Expression (IIFE)
((age, weight, height) => {
  const lastName = 'Kauan';

  function createFullName(firstName) {
    return `${firstName} ${lastName}`;
  }

  function sayFullName() {
    console.log(createFullName('Victor'));
  }

  sayFullName();
  console.log(age, weight, height);
})(23, 60, 1.7);
