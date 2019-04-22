'use strict';

class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}
	createElem() {
		let elem = document.createElement('div');
		elem.className = 'elem';
		elem.textContent = 'Выполняю домашнее задание для урока № 10';
		elem.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign};`;
		document.body.appendChild(elem);
	}
}

let newObj = new Options('200px', '666px', 'green', '20px', 'center');
let tryHard = new Options('300px', '400px', 'blue', '25px', 'center');


newObj.createElem();
tryHard.createElem();