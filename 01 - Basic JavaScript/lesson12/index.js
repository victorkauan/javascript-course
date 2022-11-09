const backslashString = '\\';
const singleQuoteString = "A 'text'";
const doubleQuoteString = 'A "text"';
const string = 'A text';
const tongueTwister = 'Lesser leather never weathered wetter weather better.';

console.log(backslashString);
console.log(singleQuoteString);
console.log(doubleQuoteString);

console.log();

console.log(string);
console.log(string[4]);
console.log(string[-1]);
console.log(string[10]);

console.log();

console.log(string.charAt(4));
console.log(string.charAt(10));

console.log();

console.log(string.concat(' from', ' a', ' JavaScript application'));
console.log(string + ' from a JavaScript application');
console.log(`${string} from a JavaScript application`);

console.log();

console.log(string.indexOf('text'));
console.log(string.indexOf('Text'));
console.log(string.indexOf('x', 3));
console.log(string.indexOf('x', 5));

console.log();

console.log(string.lastIndexOf('text'));
console.log(string.lastIndexOf('Text'));
console.log(string.lastIndexOf('x', 5));
console.log(string.lastIndexOf('x', 0));

console.log();

console.log(string.match(/[a-z]/g));
console.log(string.match(/[a-z]/));

console.log();

console.log(string.search(/x/));

console.log();

console.log(string.replace('A', 'Another'));
console.log(string.replace(/A/, 'Another'));
console.log(tongueTwister.replace(/er/, '#'));
console.log(tongueTwister.replace(/er/g, '#'));

console.log();

console.log(string.length);
console.log(tongueTwister.length);

console.log();

console.log(tongueTwister.slice(7, 13));
console.log(tongueTwister.slice(7, 14));
console.log(tongueTwister.slice(-7));
console.log(tongueTwister.slice(tongueTwister.length - 7));
console.log(tongueTwister.slice(-7, -1));
console.log(tongueTwister.slice(tongueTwister.length - 7, tongueTwister.length - 1));

console.log();

console.log(tongueTwister.substring(tongueTwister.length - 7));
console.log(tongueTwister.substring(tongueTwister.length - 7, tongueTwister.length - 1));

console.log();

console.log(tongueTwister.split(' '));
console.log(tongueTwister.split(' ', 2));
console.log(tongueTwister.split('er'));
console.log(tongueTwister.split('er', 3));

console.log();

console.log(tongueTwister.toLowerCase());
console.log(tongueTwister.toUpperCase());
