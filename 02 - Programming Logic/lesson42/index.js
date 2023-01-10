function isLandscape0(width, height) {
  return width > height;

  // return width > height ? true : false;

  // if (width > height) return true;
  // return false;

  // if (width > height) {
  //   return true;
  // }
  // return false;

  // if (width > height) {
  //   return true;
  // } else {
  //   return false;
  // }
}

const isLandscape1 = (width, height) => width > height;

// const isLandscape1 = (width, height) => {
//   return width > height;
// };

console.log(isLandscape0(1920, 1080));
console.log(isLandscape0(1080, 1920));
console.log(isLandscape0(128, 64));
console.log(isLandscape0(1, 2));
console.log(isLandscape0(1024, 512));
console.log(isLandscape0(100, 100));

console.log();

console.log(isLandscape1(1920, 1080));
console.log(isLandscape1(1080, 1920));
console.log(isLandscape1(128, 64));
console.log(isLandscape1(1, 2));
console.log(isLandscape1(1024, 512));
console.log(isLandscape1(100, 100));
