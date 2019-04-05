'use strict';

let money,
time;

money = +prompt("Ваш бюджет на месяц в тыс.руб.?", "30");
time = prompt("Введите дату в формате YYYY-MM-DD", "2018-10-08");

let appData = {
	moneyData: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
};

for (let i = 0; i < 2; i++) {
	appData.expenses[prompt("Введите обязательную статью расходов в этом месяце", "Конфеты")] = +prompt("Во сколько обойдется?", "1.5");
};

console.log(appData);

let moneyDay = money / 30;

alert("Ваш бюджет на день: " + moneyDay);