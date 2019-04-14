'use strict';

let btnStart = document.getElementById('start'),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
	monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
	yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
	expensesItem = document.getElementsByClassName('expenses-item'),
	btnExpenses = document.getElementsByTagName('button')[0],
	btnOptionalExpenses = document.getElementsByTagName('button')[1],
	btnBudgetCount = document.getElementsByTagName('button')[2],
	itemOptionalExpenses = document.querySelectorAll('.optionalexpenses-item'),
	chooseIncome = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
	percentValue = document.querySelector('.choose-percent'),
	dayValue = document.querySelector('.day-value'),
	monthValue = document.querySelector('.month-value'),
	yearValue = document.querySelector('.year-value'),
	money,
	time;

// Дата и бюджет на месяц
btnStart.addEventListener('click', function () {
	time = prompt("Введите дату в формате YYYY-MM-DD", "2018-10-08");
	money = +prompt("Ваш бюджет на месяц в руб?", "50000");
	while (isNaN(money) || money == '' || money == null || money < 0) {
		money = +prompt("Ваш бюджет на месяц в руб?", "50000");
	}
	appData.moneyData = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed();
	yearValue.value = new Date(Date.parse(time)).getFullYear();
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDate();
});

// Обязательные расходы
btnExpenses.addEventListener('click', function () {
	let sum = 0;

	for (let i = 0; i < expensesItem.length; i++) {
		let a = expensesItem[i].value,
			b = expensesItem[++i].value;

		if ((typeof (a)) === 'string' && (typeof (a) != null) && (typeof (b) != null) &&
			a != ' ' && b != ' ' && a.length < 50) {
			appData.expenses[a] = b;
			sum += +b;
		} else {
			alert("Пожалуйста, не оставляйте строки пустыми");
			i--;
		}
	}
	expensesValue.textContent = sum;
	appData.sumExp = sum;
});

// Необязательные расходы
btnOptionalExpenses.addEventListener('click', function () {
	for (let i = 0; i < itemOptionalExpenses.length; i++) {
		let optional = itemOptionalExpenses[i].value;
		if ((typeof (optional)) === 'string' && (typeof (optional) != null) && optional != '' && optional.trim() && optional.length < 50) {
			appData.optionalExpenses[i] = optional;
			optionalExpensesValue.textContent += appData.optionalExpenses[i] + ', ';
		} else {
			alert("Пожалуйста, не оставляйте строки пустыми");
			i--;
		}
	}
});

// Расчет бюджета на день и уровень достатка
btnBudgetCount.addEventListener('click', function () {
	if (appData.moneyData != undefined) {
		appData.moneyPerDay = ((appData.moneyData - appData.sumExp) / 30).toFixed();
		dayBudgetValue.textContent = appData.moneyPerDay;

		if (appData.moneyPerDay < 100) {
			levelValue.textContent = "Минимальный уровень достатка!";
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			levelValue.textContent = "Средний уровень достатка!";
		} else if (appData.moneyPerDay > 2000) {
			levelValue.textContent = "Высокий уровень достатка!";
		} else {
			levelValue.textContent = "Произошла ошибка";
		}
	} else {
		dayBudgetValue.textContent = "Произошла ошибка";
	}
});

// Статьи возможного дохода
chooseIncome.addEventListener('input', function () {
	let items = chooseIncome.value;
	appData.income = items.split(', ');
	incomeValue.textContent = appData.income;
});

// Чекбокс с накоплениями
checkSavings.addEventListener('click', function () {
	if (appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

// Сумма накоплений
sumValue.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = +sumValue.value,
			percent = +percentValue.value;

		appData.mothIncome = sum / 100 / 12 * percent;
		appData.yearIncome = sum / 100 * percent;

		monthSavingsValue.textContent = appData.mothIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

// Прцент накоплений
percentValue.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = +sumValue.value,
			percent = +percentValue.value;

		appData.mothIncome = sum / 100 / 12 * percent;
		appData.yearIncome = sum / 100 * percent;

		monthSavingsValue.textContent = appData.mothIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

// Глобальный объект
let appData = {
	moneyData: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};