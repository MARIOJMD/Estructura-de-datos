import Coordenada from "./Coordenada.js";

var resultado = document.querySelector("#resultado");
var resultado1 = document.querySelector("#resultado1");

var resDistancia = document.querySelector("#distancia");

var btn = document.querySelector("#btn");
btn.addEventListener("click", recoger);

var coordenada1 = new Coordenada();
var coordenada2 = new Coordenada();

function recoger(){
    let x1 = document.querySelector("#x1").value;
    let y1 = document.querySelector("#y1").value;
    let x2 = document.querySelector("#x2").value;
    let y2 = document.querySelector("#y2").value;
    coordenada1.x = x1;
    coordenada1.y = y1;
    coordenada2.x = x2;
    coordenada2.y = y2;

    imprimir();
    
}

function imprimir(){
	resultado.textContent = coordenada1.toString();
    resultado1.textContent = coordenada2.toString();
    resDistancia.textContent = distancia();
	}

function distancia(){
	let distancia = Math.sqrt(
	Math.pow((coordenada2.x - coordenada1.x), 2) + Math.pow((coordenada2.y - coordenada1.y), 2)
    );
    return distancia;
}
