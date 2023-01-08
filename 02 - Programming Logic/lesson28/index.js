const threeHours = 60 * 60 * 3 * 1000; // 3 (three) hours in milliseconds
const oneDay = 60 * 60 * 24 * 1000; // 1 (one) day in milliseconds

const unixTimestamp = new Date(0);

console.log(unixTimestamp.toString());

console.log();

const threeHoursDateLater = new Date(threeHours);
const oneDayDateLater = new Date(oneDay);
const oneDayAndThreeHoursDateLater = new Date(oneDay + threeHours);

console.log(threeHoursDateLater.toString());
console.log(oneDayDateLater.toString());
console.log(oneDayAndThreeHoursDateLater.toString());

console.log();

const threeHoursDateEarlier = new Date(-threeHours);
const oneDayDateEarlier = new Date(-oneDay);
const oneDayAndThreeHoursDateEarlier = new Date(-oneDay - threeHours);

console.log(threeHoursDateEarlier.toString());
console.log(oneDayDateEarlier.toString());
console.log(oneDayAndThreeHoursDateEarlier.toString());

console.log();

const numberDate0 = new Date(2016, 3, 1, 10, 53, 19, 500);
const numberDate1 = new Date(2021, 7, 10, 0, 0, 19, 875);
const numberDate2 = new Date(2021, 7, 10, 0, 0, 19, 1000);
const numberDate3 = new Date(2000, 1, 1, 11, 45, 0);
const numberDate4 = new Date(2000, 1, 1, 11, 60, 0);
const numberDate5 = new Date(1850, 3, 5, 12, 30);
const numberDate6 = new Date(1850, 3, 5, 12);
const numberDate7 = new Date(1850, 3, 5);
const numberDate8 = new Date(1850, 3);

console.log(numberDate0.toString());
console.log(numberDate1.toString());
console.log(numberDate2.toString());
console.log(numberDate3.toString());
console.log(numberDate4.toString());
console.log(numberDate5.toString());
console.log(numberDate6.toString());
console.log(numberDate7.toString());
console.log(numberDate8.toString());

console.log();

const stringDate0 = new Date('2019-04-20 20:20:59.100');
const stringDate1 = new Date('2019-04-20T20:20:59.100Z');

console.log(stringDate0.toString());
console.log(stringDate1.toString());

console.log();

const date = new Date();

console.log(date.toString());
console.log('Day:', date.getDate());
console.log('Month:', date.getMonth()); // 0 = January, 1 = February... 11 = December
console.log('Year:', date.getFullYear());
console.log('Hours:', date.getHours());
console.log('Minutes:', date.getMinutes());
console.log('Seconds:', date.getSeconds());
console.log('Milliseconds:', date.getMilliseconds());
console.log('Day of the week:', date.getDay()); // 0 = Sunday, 1 = Monday... 6 = Saturday

console.log();

const currentDateInMilliseconds = Date.now();
const currentDate = new Date(currentDateInMilliseconds);

console.log(currentDateInMilliseconds);
console.log(currentDate.toString());

console.log();

function formatZeroLeft(number) {
  return number < 10 ? `0${number}` : number.toString();
}

function formatDate(date) {
  const day = formatZeroLeft(date.getDate());
  const month = formatZeroLeft(date.getMonth() + 1);
  const year = formatZeroLeft(date.getFullYear());
  const hours = formatZeroLeft(date.getHours());
  const minutes = formatZeroLeft(date.getMinutes());
  const seconds = formatZeroLeft(date.getSeconds());

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

const newDate = new Date();

const formattedDate = formatDate(newDate);
console.log(formattedDate);
