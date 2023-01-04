/*
  Greeting system rules
  - Between 00:00 and 11:59 - "Good morning!"
  - Between 12:00 and 17:59 - "Good afternoon!"
  - Between 18:00 and 23:59 - "Good evening!"
  - Any other value - "Hello!"
*/

const hour = 17;

if (hour >= 0 && hour <= 11) {
  console.log('Good morning!');
} else if (hour >= 12 && hour <= 17) {
  console.log('Good afternoon!');
} else if (hour >= 18 && hour <= 23) {
  console.log('Good evening!');
} else {
  console.log('Hello!');
}

console.log();

const haveMoney = false;

if (haveMoney) {
  console.log("I'm going to the mall.");
} else {
  console.log("I'll stay home.");
}
