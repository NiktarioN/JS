'use strict';

// Восстаговление порядка меню и добавление пятого пункта [1]
let menu = document.querySelector('.menu'),
menuItem = document.querySelectorAll('.menu-item');

menu.insertBefore(menuItem[2], menuItem[1]);

let menuNewPost = document.createElement('li');
menuNewPost.classList.add('menu-item');
menuNewPost.textContent = "Пятый пункт";
menu.appendChild(menuNewPost);

// Замена картинки заднего фона [2]
document.body.style.background = 'url(img/apple_true.jpg) center center';

// Замена заголовка [3]
let columnTitle = document.querySelector('#title');

columnTitle.textContent = "Мы продаем только подлинную технику Apple";

// Удаление рекламы [4]
let column = document.querySelectorAll('.column'),
	adv = document.querySelector('.adv');

column[1].removeChild(adv);

// Вопрос пользователю [5]
let question = prompt('Как вы относитесь к технике Apple?', ''),
	answer = document.querySelector('#prompt');

answer.textContent = question;