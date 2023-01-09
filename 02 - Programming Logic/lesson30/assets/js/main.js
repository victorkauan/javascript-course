function myScope() {
  const currentDateElement = document.querySelector('.container h1');
  const currentDate = new Date();

  const options = {
    dateStyle: 'full',
    timeStyle: 'short',
    hour12: false,
  };

  const currentDateText = currentDate.toLocaleString('en-US', options);

  currentDateElement.innerHTML = currentDateText;

  // function getWeekdayName(weekday) {
  //   switch (weekday) {
  //     case 0:
  //       return 'Sunday';
  //     case 1:
  //       return 'Monday';
  //     case 2:
  //       return 'Tuesday';
  //     case 3:
  //       return 'Wednesday';
  //     case 4:
  //       return 'Thursday';
  //     case 5:
  //       return 'Friday';
  //     case 6:
  //       return 'Saturday';
  //     default:
  //       return '[ERROR] Invalid value for day of the week.';
  //   }
  // }

  // function getWeekdayName(weekday) {
  //   const weekdayNames = [
  //     'Sunday',
  //     'Monday',
  //     'Tuesday',
  //     'Wednesday',
  //     'Thursday',
  //     'Friday',
  //     'Saturday',
  //     '[ERROR] Invalid value for day of the week.',
  //   ];

  //   return weekday >= 0 && weekday <= 6
  //     ? weekdayNames[weekday]
  //     : weekdayNames[weekdayNames.length];
  // }

  // function getMonthName(month) {
  //   switch (month) {
  //     case 0:
  //       return 'January';
  //     case 1:
  //       return 'February';
  //     case 2:
  //       return 'March';
  //     case 3:
  //       return 'April';
  //     case 4:
  //       return 'May';
  //     case 5:
  //       return 'June';
  //     case 6:
  //       return 'July';
  //     case 7:
  //       return 'August';
  //     case 8:
  //       return 'September';
  //     case 9:
  //       return 'October';
  //     case 10:
  //       return 'November';
  //     case 11:
  //       return 'December';
  //     default:
  //       return '[ERROR] Invalid value for month.';
  //   }
  // }

  // function getMonthName(month) {
  //   const monthNames = [
  //     'January',
  //     'February',
  //     'March',
  //     'April',
  //     'May',
  //     'June',
  //     'July',
  //     'August',
  //     'September',
  //     'October',
  //     'November',
  //     'December',
  //     '[ERROR] Invalid value for month.',
  //   ];

  //   return month >= 0 && month <= 11
  //     ? monthNames[month]
  //     : monthNames[monthNames.length];
  // }

  // function formatZeroLeft(number) {
  //   return number < 10 ? `0${number}` : number.toString();
  // }

  // function createDateText(date) {
  //   const weekday = date.getDay();
  //   const day = date.getDate();
  //   const month = date.getMonth();
  //   const year = date.getFullYear();
  //   const hours = formatZeroLeft(date.getHours());
  //   const minutes = formatZeroLeft(date.getMinutes());

  //   const weekdayName = getWeekdayName(weekday);
  //   const monthName = getMonthName(month);

  //   return `${weekdayName}, ${monthName} ${day}, ${year} at ${hours}:${minutes}`;
  // }

  // const currentDateText = createDateText(currentDate);

  // currentDateElement.innerHTML = currentDateText;
}

myScope();
