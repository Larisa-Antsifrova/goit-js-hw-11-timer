class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    // Записываем доступы к соответсвующим элементам на странице
    this.timer = document.getElementById(selector);
    this.days = this.timer.querySelector('span[data-value="days"]');
    this.hours = this.timer.querySelector('span[data-value="hours"]');
    this.mins = this.timer.querySelector('span[data-value="mins"]');
    this.secs = this.timer.querySelector('span[data-value="secs"]');
  }

  // Метод, который с интервалом обновляет таймер на странице
  start() {
    setInterval(() => {
      let time = this.targetDate - Date.now();
      const { days, hours, mins, secs } = this.calculateTime(time);

      this.days.textContent = days;
      this.hours.textContent = hours;
      this.mins.textContent = mins;
      this.secs.textContent = secs;
    }, 1000);
  }

  // Вспомогательные функции для подсчёта дней, часов, минут, секунд и форматирования
  calculateTime(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

// Создаём таймер отсчёта до Нового года
const countdownTillNewYear = new CountdownTimer({
  selector: "timer-1",
  targetDate: new Date("Dec 31, 2020"),
});

// Вызываем таймер, чтобы при загрузке страницы пользователь сразу видел отсчёт
countdownTillNewYear.start();
