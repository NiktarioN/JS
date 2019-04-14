'use strict';

let btnStart = document.getElementById('start'),
	budgetValue = document.getElementsByClassName('budget-value'),
	daybudgetValue = document.getElementsByClassName('daybudget-value'),
	levelValue = document.getElementsByClassName('level-value'),
	expensesValue = document.getElementsByClassName('expenses-value'),
	optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value'),
	incomeValue = document.getElementsByClassName('income-value'),
	monthsavingsValue = document.getElementsByClassName('monthsavings-value'),
	yearsavingsValue = document.getElementsByClassName('yearsavings-value'),
	expensesItem = document.getElementsByClassName('expenses-item'),
	btnExpenses = document.getElementsByTagName('button')[0],
	btnOptionalExpenses = document.getElementsByTagName('button')[1],
	btnBudgetCount = document.getElementsByTagName('button')[2],
	itemOptionalExpenses = document.querySelectorAll('.optionalexpenses-item'),
	chooseIncome = document.querySelector('.choose-income'),
	savings = document.querySelector('#savings'),
	sum = document.querySelector('.choose-sum'),
	percent = document.querySelector('.choose-percent'),
	dayValue = document.querySelector('.day-value'),
	monthValue = document.querySelector('.month-value'),
	yearValue = document.querySelector('.year-value');

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
				i--;
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
	chooseOptExpenses: function () {
		for (let i = 0; i < 3; i++) {
			let optional = prompt("Статья необязательных расходов?", "Хлеб");
			if ((typeof (optional)) === 'string' && (typeof (optional) != null) && optional != '' && optional.trim() && optional.length < 50) {
				appData.optionalExpenses[i] = optional;
			} else {
				alert("Пожалуйста, не оставляйте строки пустыми");
				i--;
			}
		}
	},
	chooseIncome: function () {
		for (let i = 0; i < 1; i++) {
			let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "я, люблю, изучать, js");
			if ((typeof (items)) === 'string' && (typeof (items) !== null) && items != '' && items.trim()) {
				appData.income = items.split(', ');
				appData.income.push(prompt("Может быть нужно что-то еще?", "просто прогать"));
				appData.income.sort();
			} else {
				alert("Введенные данные неправильные. Пожалуйста, введите их заново");
				i--;
			}
		}
		document.body.innerHTML += 'Способы дополнительного заработка:' + '<br>';
		appData.income.forEach(function (item, i) {
			document.body.innerHTML += i + 1 + ': ' + item + '<br>';
		});
	}
};

console.log('Наша программа включает в себя данные: ');
for (let key in appData) {
	console.log(key + ' : ' + appData[key]);
}