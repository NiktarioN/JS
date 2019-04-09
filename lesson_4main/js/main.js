'use strict';

let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", "50000");
	while (isNaN(money) || money == '' || money == null) {
		money = +prompt("Ваш бюджет на месяц?", "50000");
	}
	time = prompt("Введите дату в формате YYYY-MM-DD", "2018-10-08");
}
start();

let appData = {
	moneyData: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
	chooseExpenses: function () {
		for (let i = 0; i < 2; i++) {
			let a = prompt("Введите обязательную статью расходов в этом месяце", "Конфеты"),
				b = +prompt("Во сколько обойдется?", "1.5");

			if ((typeof (a)) === 'string' && (typeof (a) != null) && (typeof (b) != null) &&
				a != ' ' && b != ' ' && a.length < 50) {
				appData.expenses[a] = b;
			} else {
				alert("Пожалуйста, не оставляйте строки пустыми");
				--i;
			}
		}
	},
	detectDayBudget: function () {
		appData.moneyPerDay = (appData.moneyData / 30).toFixed();
		alert("Ваш бюджет на день: " + appData.moneyPerDay);
	},
	detectLevel: function () {
		if (appData.moneyPerDay < 100) {
			console.log("Минимальный уровень достатка");
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log("Средний уровень достатка");
		} else if (appData.moneyPerDay > 2000) {
			console.log("Высокий уровень достатка");
		} else {
			console.log("Произошла ошибка");
		}
	},
	checkSavings: function () {
		if (appData.savings == true) {
			let save = +prompt('Какова сумма накоплений?', '100000'),
				percent = +prompt('Под какой процент?', '9');

			appData.mothIncome = save / 100 / 12 * percent;
			alert("Доход в месяц с вашего депозита: " + appData.mothIncome);
		}
	},
	chooseOptExpenses: function() {
		for (let i = 0; i < 3; i++) {
			let optional = prompt("Статья необязательных расходов?", "Хлеб");
			if ((typeof (optional)) === 'string' && (typeof (optional) != null) && optional != ' ' && optional.length < 50) {
				appData.optionalExpenses[i] = optional;
			} else {
				alert("Пожалуйста, не оставляйте строки пустыми");
				--i;
			}
		}
	},
	chooseIncome: function () {
		let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
		appData.income = items.split(', ');
		appData.income.push(prompt("Может быть нужно что-то еще?"));
		appData.income.sort();
		appData.income.forEach(function(item, i){
			alert("Способы доп. заработка: " + item);
		});
	}
};