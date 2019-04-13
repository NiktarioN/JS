'use strict';

let btnStart = document.getElementById('start');

let budgetValue = document.getElementsByClassName('budget-value'),
	daybudgetValue = document.getElementsByClassName('daybudget-value'),
	levelValue = document.getElementsByClassName('level-value'),
	expensesValue = document.getElementsByClassName('expenses-value'),
	optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value'),
	incomeValue = document.getElementsByClassName('income-value'),
	monthsavingsValue = document.getElementsByClassName('monthsavings-value'),
	yearsavingsValue = document.getElementsByClassName('yearsavings-value');

let expensesItem = document.getElementsByClassName('expenses-item');

let btnExpenses = document.getElementsByTagName('button')[0],
	btnOptionalExpenses = document.getElementsByTagName('button')[1],
	btnBudgetCount = document.getElementsByTagName('button')[2];

let itemOptionalExpenses = document.querySelectorAll('.optionalexpenses-item');

let chooseIncome = document.querySelector('.choose-income'),
	savings = document.querySelector('#savings'),
	sum = document.querySelector('.choose-sum'),
	percent = document.querySelector('.choose-percent'),
	dayValue = document.querySelector('.day-value'),
	monthValue = document.querySelector('.month-value'),
	yearValue = document.querySelector('.year-value');

console.log(btnStart);
console.log(budgetValue);
console.log(daybudgetValue);
console.log(levelValue);
console.log(expensesValue);
console.log(optionalexpensesValue);
console.log(incomeValue);
console.log(monthsavingsValue);
console.log(yearsavingsValue);
console.log(expensesItem);
console.log(btnExpenses);
console.log(btnOptionalExpenses);
console.log(btnBudgetCount);
console.log(itemOptionalExpenses);
console.log(chooseIncome);
console.log(savings);
console.log(sum);
console.log(percent);
console.log(dayValue);
console.log(monthValue);
console.log(yearValue);