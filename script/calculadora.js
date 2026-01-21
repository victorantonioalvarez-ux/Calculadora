const input = document.getElementById("input");

function addNumber(inputNumber){
	console.log(inputNumber);
	input.value += inputNumber;
}

function addOperator(inputOperator){
	console.log(inputOperator);
	input.value += inputOperator;
}