const date = new Date('1970-03-20 00:00:00');

const weekday = date.getDay();

let ifWeekdayName;

if (weekday === 0) {
  ifWeekdayName = 'Sunday';
} else if (weekday === 1) {
  ifWeekdayName = 'Monday';
} else if (weekday === 2) {
  ifWeekdayName = 'Tuesday';
} else if (weekday === 3) {
  ifWeekdayName = 'Wednesday';
} else if (weekday === 4) {
  ifWeekdayName = 'Thursday';
} else if (weekday === 5) {
  ifWeekdayName = 'Friday';
} else if (weekday === 6) {
  ifWeekdayName = 'Saturday';
} else {
  ifWeekdayName = '[ERROR] Invalid value for day of the week.';
}

let switchWeekdayName;

switch (weekday) {
  case 0:
    switchWeekdayName = 'Sunday';
    break;
  case 1:
    switchWeekdayName = 'Monday';
    break;
  case 2:
    switchWeekdayName = 'Tuesday';
    break;
  case 3:
    switchWeekdayName = 'Wednesday';
    break;
  case 4:
    switchWeekdayName = 'Thursday';
    break;
  case 5:
    switchWeekdayName = 'Friday';
    break;
  case 6:
    switchWeekdayName = 'Saturday';
    break;
  default:
    switchWeekdayName = '[ERROR] Invalid value for day of the week.';
}

let wrongSwitchWeekdayName;

switch (weekday) {
  case 0:
    wrongSwitchWeekdayName = 'Sunday';
  case 1:
    wrongSwitchWeekdayName = 'Monday';
  case 2:
    wrongSwitchWeekdayName = 'Tuesday';
  case 3:
    wrongSwitchWeekdayName = 'Wednesday';
  case 4:
    wrongSwitchWeekdayName = 'Thursday';
  case 5:
    wrongSwitchWeekdayName = 'Friday';
  case 6:
    wrongSwitchWeekdayName = 'Saturday';
  default:
    wrongSwitchWeekdayName = '[ERROR] Invalid value for day of the week.';
}

function getWeekdayName(weekday) {
  switch (weekday) {
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    default:
      return '[ERROR] Invalid value for day of the week.';
  }
}

const switchFunctionWeekdayName = getWeekdayName(weekday);

console.log(`${weekday} = ${ifWeekdayName}`);
console.log(`${weekday} = ${switchWeekdayName}`);
console.log(`${weekday} = ${wrongSwitchWeekdayName}`);
console.log(`${weekday} = ${switchFunctionWeekdayName}`);
