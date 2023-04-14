let count = 0;
let totalNum = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let totalEl = document.getElementById("total-el");

function increment() {
	count += 1;
	countEl.textContent = count;
}

function save() {
	let countStr = count + " - ";
	saveEl.textContent += countStr;
	countEl.textContent = 0;
	count = 0;
	let countNum = parseInt(countStr);
	totalNum += countNum;
	totalEl.textContent = "Total: " + totalNum;
}

function reset() {
	window.location.reload();
}
