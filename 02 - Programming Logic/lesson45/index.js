try {
  console.log('Open file.');

  console.log('[ERROR 00]');
  console.log(invalidVariable0);

  console.log('Close file.');
} catch (error) {
  console.log('Handle the error 00.');

  console.log('Close file.');
}

console.log();

try {
  console.log('Open file.');

  console.log('[ERROR 00]');
  console.log(invalidVariable0);
} catch (error) {
  console.log('Handle the error 00.');
} finally {
  console.log('Close file.');
}

console.log();

try {
  console.log('Open file.');

  // console.log('[ERROR 00]');
  // console.log(invalidVariable0);

  console.log('Read file.');

  try {
    console.log('[ERROR 01]');
    console.log(invalidVariable1);
  } catch (error) {
    console.log('Handle the error 01.');
  } finally {
    console.log('Internal activity performed.');
  }
} catch (error) {
  console.log('Handle the error 00.');
} finally {
  console.log('Close file.');
}

console.log();

function getTime(date) {
  if (date && !(date instanceof Date)) {
    throw new TypeError('Function expects a Date instance');
  }

  if (!date) {
    date = new Date();
  }

  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    second: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

console.log(getTime());

console.log();

const date = new Date('2022-05-01T23:49:33.400Z');
console.log(getTime(date));

console.log();

try {
  console.log(getTime(39));
} catch (error) {
  console.log(error);
}

console.log();

try {
  console.log(getTime('Invalid value'));
} catch (error) {
  console.log(error);
}
