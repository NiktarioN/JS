'use strict';

// ПЕРВОЕ ЗАДАНИЕ 
let str = 'урок-3-был слишком легким';

str = str[0].toUpperCase() + str.slice(1);
// Самый правильный вариант, т.к может работать с отриц. значениями

// str = str[0].toUpperCase() + str.substring(1);

// str = str[0].toUpperCase() + str.substr(1);

str = str.replace(/-/g, " ");

console.log(str);

str = str.replace('им', 'о').split(' ')[4];

document.write(str + "<br>");

// ВТОРОЕ ЗАДАНИЕ
let arr = [20, 33, 1, "Человек", 2, 3],
	sum = 0;

for (let i = 0; i < arr.length; i++) {
	if ((typeof (arr[i])) === 'number') {
		sum += Math.pow(arr[i], 3);
	} else {
		continue;
	}
}

let result = Math.sqrt(sum).toFixed(3);

console.log(result);

// ТРЕТЬЕ ЗАДАНИЕ
function homework(work) {
	if ((typeof (work) == 'string')) {
		work = work.trim();
		if (work.length > 50) {
			work = work.slice(0, 50) + '...';
		}
		console.log(work);
	} else
		alert('Пожалуйста, введите строчное значение');
}

homework("          Туман за окном, почти непроглядная белая пелена - идёт снег! Он покрыл землю, крыши и ветви деревьев, он пришёл на смену неприятному холоду и льду предшествующих дней, он зовёт гулять - погрузиться в этот влажный, полный белых пушинок воздух и идти, идти, идти - дыша свежестью             и превращаясь в сугроб, ловя момент - ибо сия прелесть недолговечна, и уже очень скоро будет либо мороз, либо тихая погода с серым и низким зимним небом, либо - месиво из снега, воды и грязи.                ");