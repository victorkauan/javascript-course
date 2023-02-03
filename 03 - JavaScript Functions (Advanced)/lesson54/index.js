function generateRandomNumber(min = 1000, max = 3000) {
  // minimum: 1 second (1000 milliseconds)
  // maximum: 3 seconds (3000 milliseconds)
  const randomNumber = Math.random() * (max - min) + min;
  return Math.floor(randomNumber);
}

function function01(callback) {
  setTimeout(() => {
    console.log('Function 01');

    if (callback) {
      callback();
    }
  }, generateRandomNumber());
}

function function02(callback) {
  setTimeout(() => {
    console.log('Function 02');

    if (callback) {
      callback();
    }
  }, generateRandomNumber());
}

function function03(callback) {
  setTimeout(() => {
    console.log('Function 03');

    if (callback) {
      callback();
    }
  }, generateRandomNumber());
}

function function03Callback() {
  console.log('Hello, world!');
}

function function02Callback() {
  function03(function03Callback);
}

function function01Callback() {
  function02(function02Callback);
}

function01(function01Callback);

// function01(() => {
//   function02(() => {
//     function03(() => {
//       console.log('Hello, world!');
//     });
//   });
// });
