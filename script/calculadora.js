// Referencia al input
const input = document.getElementById("input");

// Variables de guardado

let numeroGuardado = 0;
let operacionPendiente="";

// Añade numeros

function addNumber(inputNumber){
	if(input.value === "0"){
		input.value = inputNumber;
	}else{
		input.value += inputNumber;
	}
}

// Añade operador
function addOperator(inputOperator){
	numeroGuardado = Number(input.value);
	operacionPendiente = inputOperator;
	input.value = "";
}

// Calculo

function calculate(){
	let numeroActual = Number(input.value)
	let resultado = 0;

	if (operacionPendiente === "+") {
		resultado = numeroGuardado + numeroActual;
	}else if (operacionPendiente === "-"){
		resultado = numeroGuardado - numeroActual;
	}else if (operacionPendiente === "*"){
		resultado = numeroGuardado * numeroActual;
	}else if (operacionPendiente === "/"){
		if (numeroActual === 0){
			input.value = "ERROR";
			return
		}
		resultado = numeroGuardado / numeroActual;
	}else {
		return;
	}

	input.value =resultado
} 

// Funciones de borrado

function clearAll(){
    input.value = "0";
    numeroGuardado = 0;
    operacionPendiente = "";
}

function deleteLast(){
	if (input.value.length === 1){
		input.value = "0";
	}else{
		input.value = input.value.slice(0, -1);
	}
}