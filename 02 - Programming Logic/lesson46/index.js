function getCurrentTime() {
  const date = new Date();

  return date.toLocaleTimeString('en-US', {
    hour12: false,
  });
}

function showTime() {
  console.log();

  console.log(`Timer 00 - ${getCurrentTime()}`);
}

setInterval(showTime, 1 * 1000); // 1 (one) second

setInterval(() => {
  console.log(`Timer 01 - ${getCurrentTime()}`);
}, 1 * 1000); // 1 (one) second

const timer = setInterval(function () {
  console.log(`Timer 02 - ${getCurrentTime()}`);
}, 1 * 1000); // 1 (one) second

setTimeout(() => {
  console.log();

  console.log('Timer 02 stopped.');
  clearInterval(timer);
}, 5 * 1000); // 5 (five) seconds

setTimeout(() => {
  console.log();

  console.log('10 seconds passed.');
}, 10 * 1000); // 10 (ten) seconds
