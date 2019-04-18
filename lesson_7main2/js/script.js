let clock = document.querySelector('.clock');

function checkZero(item) {
	if (item < 10) {
		item = "0" + item;
	} else {
		item = item;
	}
	return item;
}

function takeClock() {
	let date = new Date(),
		hours = checkZero(date.getHours()),
		minutes = checkZero(date.getMinutes()),
		sec = checkZero(date.getSeconds());

	if (hours == 0) {
		h = 12;
	}

	let time = hours + ":" + minutes + ":" + sec;

	clock.textContent = time;
	setInterval(takeClock, 1000);
}

takeClock();

