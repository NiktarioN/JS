'use strict';

let num = 33721;

let numMultiplication = num.toString().split('').reduce(function(a,b){
	return +a * +b;
});

console.log(numMultiplication);

let pow = numMultiplication ** 3;

alert("Первые две цифры полученного числа после возведения в степень: " + pow.toString().substring(0, 2));

console.log(pow);
