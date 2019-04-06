'use strict';

let money = +prompt("Ваш бюджет на месяц?", "30"),
	time = prompt("Введите дату в формате YYYY-MM-DD", "2018-10-08");

let appData = {
	moneyData: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
};

// ЦИКЛ ЧЕРЕЗ FOR

for (let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", "Конфеты"),
		b = +prompt("Во сколько обойдется?", "1.5");

	if ((typeof (a)) === 'string' && (typeof (a) != null) && (typeof (b) != null) &&
		a != ' ' && b != ' ' && a.length < 50) {
		console.log("done");
		appData.expenses[a] = b;
	} else {
		alert("Пожалуйста, не оставляйте строки пустыми");
		--i;
	}
}

// ЦИКЛ ЧЕРЕЗ WHILE

// let i = 0;

// while (i < 2) {
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", "Конфеты"),
// 		b = +prompt("Во сколько обойдется?", "1.5");

// 	if ((typeof (a)) === 'string' && (typeof (a) != null) && (typeof (b) != null) &&
// 		a != ' ' && b != ' ' && a.length < 50) {
// 		console.log("done");
// 		appData.expenses[a] = b;
// 	} else {
// 		alert("Пожалуйста, не оставляйте строки пустыми");
// 		--i;
// 	}
// 	i++;
// }

// ЦИКЛ ЧЕРЕЗ DO

// let i = 0;

// do {
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", "Конфеты"),
// 		b = +prompt("Во сколько обойдется?", "1.5");

// 	if ((typeof (a)) === 'string' && (typeof (a) != null) && (typeof (b) != null) &&
// 		a != ' ' && b != ' ' && a.length < 50) {
// 		console.log("done");
// 		appData.expenses[a] = b;
// 	} else {
// 		alert("Пожалуйста, не оставляйте строки пустыми");
// 		--i;
// 	}
// 	i++;
// } while (i < 2);

appData.moneyPerDay = appData.moneyData / 30;

console.log(appData);

alert("Ваш бюджет на день: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
	console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
	console.log("Высокий уровень достатка");
} else {
	console.log("Произошла ошибка");
}