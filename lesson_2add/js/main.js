'use strict';

let week = [
	"Понедельник",
	"Вторник",
	"Среда",
	"Четверг",
	"Пятница",
	"Суббота",
	"Воскресенье"
];

for (let i = 0; i < week.length; i++) {
	if (i == 5 || i == 6) {
		document.write(week[i].bold() + "<br>");
	} else if (i == 4) {
		document.write(week[i].italics() + "<br>");
	} else
		document.write(week[i] + "<br>");
}


let arr = ['367', '6666', '3456', '12345','746802', '5671', '7102'];

for (let i = 0; i < arr.length; i++) {
	if (arr[i].substring(0, 1) == '3' || arr[i].substring(0, 1) == '7') {
		console.log(arr[i]);
	}
}