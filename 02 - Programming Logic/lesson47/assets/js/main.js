function timerScope() {
  const timerClock = document.querySelector('.timer-clock');

  const startButton = document.querySelector('.start');
  const pauseButton = document.querySelector('.pause');
  const resetButton = document.querySelector('.reset');

  let clockSeconds = 0;
  let clockInterval;
  let clockIsTicking = false;

  function getTimeFromSeconds(seconds) {
    const date = new Date(seconds * 1000);

    return date.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC',
    });
  }

  function startClock() {
    if (clockIsTicking) {
      return;
    }

    clockInterval = setInterval(() => {
      timerClock.innerText = getTimeFromSeconds(clockSeconds);

      clockSeconds += 1;
    }, 1000); // 1 (one) second

    timerClock.classList.remove('paused');
    clockIsTicking = true;
  }

  function pauseClock() {
    clearInterval(clockInterval);

    timerClock.classList.add('paused');
    clockIsTicking = false;
  }

  function resetClock() {
    clockSeconds = 0;
    clearInterval(clockInterval);

    timerClock.classList.remove('paused');
    timerClock.innerText = getTimeFromSeconds(clockSeconds);
    clockIsTicking = false;
  }

  startButton.addEventListener('click', startClock);
  pauseButton.addEventListener('click', pauseClock);
  resetButton.addEventListener('click', resetClock);

  // document.addEventListener('click', (event) => {
  //   const element = event.target;

  //   if (element.classList.contains('start')) {
  //     return startClock();
  //   }

  //   if (element.classList.contains('pause')) {
  //     return pauseClock();
  //   }

  //   if (element.classList.contains('reset')) {
  //     return resetClock();
  //   }
  // });
}

timerScope();
