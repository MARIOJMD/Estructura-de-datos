import Liebre from "./Liebre.js";
import Tortuga from "./Tortuga.js";


var btn = document.querySelector("#btn");
btn.addEventListener("click", iniciarCarrera);

var ganador = document.querySelector("#ganador");

var tortuga = new Tortuga();
var liebre = new Liebre();

function iniciarCarrera() {
	carrera();
}

function correrliebre() {
	if (liebre.probabilidad() < 36) {
		liebre.saltoPequeño();
		
	} else if (liebre.probabilidad() > 35 && liebre.probabilidad() < 56) {
		liebre.saltoGrande();
		
	} else if (liebre.probabilidad() < 55 && liebre.probabilidad() > 76) {
		liebre.dormir();
		
	} else if (liebre.probabilidad() > 75 && liebre.probabilidad() < 91) {
		liebre.resbalonPequeño();
		
	} else {
		liebre.resbalonGrande();
		
	}
}

function correrTortuga() {

	if (tortuga.probabilidad() < 51) {
		tortuga.pasoRapido();
		
	} else if (tortuga.probabilidad() > 50 && tortuga.probabilidad() < 81) {
		tortuga.pasoLento();
		
	} else {
		tortuga.resbalon();
		
	}
}

function carrera() {

	while(tortuga.posicion<90 && liebre.posicion<90){
		correrTortuga();
		correrliebre();
		
	}
	if (tortuga.posicion > 90 && liebre.posicion < 90) {
		return ganador.textContent = "Gano tortuga";
	} else if (liebre.posicion > 90 && tortuga.posicion < 90) {
		return ganador.textContent = "Gano liebre";
	} else if (tortuga.posicion > 90 && liebre.posicion > 90) {
		return ganador.textContent = "Empate";
	}
}