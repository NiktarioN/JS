window.addEventListener('DOMContentLoaded', function () {
	'use strict';
	// ТАБЫ
	let tab = document.querySelectorAll('.info-header-tab'),
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');

	// Функция, скрывающая контент
	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	// Оставляем только 1 элемент
	hideTabContent(1);

	// Функция, показывающая контент
	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	// Здесь мы отслеживаем действие при клике на любой из табов
	info.addEventListener('click', function (event) {
		let target = event.target;
		console.log(target);
		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});
	// ТАЙМЕР
	let deadLine = '2019-04-24';

	// Функция добавления нуля 
	function checkZero(item) {
		if (item < 10) {
			item = "0" + item;
		} else {
			item = item;
		}
		return item;
	}

	// Функция нахождения параметров таймера
	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = checkZero(Math.floor((t / 1000) % 60)),
			minutes = checkZero(Math.floor((t / 1000 / 60) % 60)),
			hours = checkZero(Math.floor((t / (1000 * 60 * 60))));

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	// Функция установки таймера на странице
	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds'),
			timeInterval = setInterval(updateClock, 1000);

		function updateClock() {
			let t = getTimeRemaining(endtime);
			hours.textContent = t.hours;
			minutes.textContent = t.minutes;
			seconds.textContent = t.seconds;

			if (t.total <= 0) {
				clearInterval(timeInterval);
				hours.textContent = '00';
				minutes.textContent = '00';
				seconds.textContent = '00';
			}
		}
		updateClock();
	}

	setClock('timer', deadLine);

	// ПРОКРУТКА МЕНЮ
	let header = document.querySelector('header'),
		menu = document.querySelector('header nav');

	menu.addEventListener('click', function (e) {
		e.preventDefault();
		let target = e.target,
			menuId = target.getAttribute('href');
		if (target && menuId) {
			let top = document.querySelector(menuId).offsetTop - header.clientHeight;
			window.scrollTo({
				top,
				behavior: 'smooth'
			});
		}
	});


	// // МОДАЛЬНОЕ ОКНО 
	// let more = document.querySelector('.more'),
	// 	overlay = document.querySelector('.overlay'),
	// 	close = document.querySelector('.popup-close'),
	// 	descTabsBtn = document.querySelectorAll('.description-btn'),
	// 	body = document.body;

	// function showModal() {
	// 	overlay.style.display = 'block';
	// 	this.classList.add('more-splash');
	// 	document.body.style.overflow = 'hidden';
	// }

	// function hideModal(button) {
	// 	close.addEventListener('click', function () {
	// 		overlay.style.display = 'none';
	// 		button.classList.remove('more-splash');
	// 		document.body.style.overflow = '';
	// 	});
	// }

	// function hideModal(button) {
	// 		overlay.style.display = 'none';
	// 		button.classList.remove('more-splash');
	// 		document.body.style.overflow = '';
	// }

	// body.addEventListener('click', function (event) {
	// 	let target = event.target;
	// 	if (target && target.classList.contains('more')) {
	// 		showModal.call(more);
	// 	}
	// 	if (target && target.classList.contains('description-btn')) {
	// 			showModal.classList(descTabsBtn);
	// 			hideModal(descTabsBtn);
	// 	}
	// 	if (target && target.classList.contains ('popup-close')) {

	// 	}
	// });

});