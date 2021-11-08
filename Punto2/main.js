import Coordenada from "./Coordenada.js";

var distancia = document.querySelector("#distancia");

var btn = document.querySelector("#btn");
btn.addEventListener("click", recoger);


var coordenadas = [];

function recoger(){
	
    let x = document.querySelector("#x").value;
    let y = document.querySelector("#y").value;
	var coordenada = new Coordenada(x, y);
	coordenadas.push(coordenada);
	console.log(coordenadas);
	
    //addCoordenada();
    distanciaTotal();
    
}


function distanciaTotal(){
	let sumatoria = 0;
	for(let i = 0; i < coordenadas.length-1; i++ ){
		sumatoria+=coordenadas[i].distancia(coordenadas[i+1]);
	}
	return sumatoria;
}

/*function addCoordenada(){
	coordenadas.push(coordenada);
	console.log(coordenadas);
	}*/


