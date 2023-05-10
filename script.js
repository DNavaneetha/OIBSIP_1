function insert(num) {
	document.getElementById('result').value += num;
}

function clearScreen() {
	document.getElementById('result').value = '';
}

function backspace() {
	var result = document.getElementById('result').value;
	document.getElementById('result').value = result.substring(0, result.length - 1);
}

function calculate() {
	var result = document.getElementById('result').value;
	if (result) {
		document.getElementById('result').value = eval(result);
	}
}

function percentage() {
	var result = document.getElementById('result').value;
	if (result) {
		document.getElementById('result').value = eval(result / 100);
	}
}
