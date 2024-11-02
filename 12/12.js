

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.timerElement = document.querySelector(this.selector);
        this.start();
    }

    start() {
        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const time = this.targetDate - currentTime;
            this.updateTimer(time);
        }, 1000);
    }

    updateTimer(time) {
        let secs3 = Math.floor((time % (1000 * 60)) / 1000);
        let secs = Math.floor(secs3 / 10);
        let secs2 = Math.floor(secs3 % 10);
        let mins3 = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        let mins = Math.floor(mins3 / 10);
        let mins2 = Math.floor(mins3 % 10);
        let days3 = Math.floor(time / (1000 * 60 * 60 * 24));
        let days = Math.floor(days3 / 10);
        let days2 = Math.floor(days3 % 10);
        let hours3 = Math.floor(time / (1000 * 60 * 60 * 24));
        let hours = Math.floor(hours3 / 10);
        let hours2 = Math.floor(hours3 % 10);

        this.timerElement.querySelector('[data-value="days"]').textContent = days;
        this.timerElement.querySelector('[data-value="days2"]').textContent = days2;
        this.timerElement.querySelector('[data-value="hours"]').textContent = hours;
        this.timerElement.querySelector('[data-value="hours2"]').textContent = hours2;
        this.timerElement.querySelector('[data-value="mins"]').textContent = mins;
        this.timerElement.querySelector('[data-value="mins2"]').textContent = mins2;
        this.timerElement.querySelector('[data-value="secs"]').textContent = secs;
        this.timerElement.querySelector('[data-value="secs2"]').textContent = secs2;
        
    }

}
