import Jugador from "./Jugador.js";

var ganador = document.querySelector("#ganador");

var btn = document.querySelector("#btn");
btn.addEventListener("click", click);


var jugador1 = new Jugador();
var jugador2 = new Jugador();

function click(){
	
	
	tablero();
	
	}

function carrera(){
	jugador1.mover();
	
	jugador2.mover();
	
	
}
	
function tablero(){
		while(jugador1.posicion<99 && jugador2.posicion<99){
			carrera();
			}
		
		if(jugador1.posicion < 100 && jugador2.posicion > 100){
			//console.log("gano el jugador 2");
			ganador.textContent = "Gano el jugador 2";
		}else if(jugador1.posicion > 100 && jugador2.posicion < 100){
			//console.log("gano el jugador 1");
			ganador.textContent = "Gano el jugador 1";
		}
	
	}
