import Elevador from "./Elevador.js";

var elevador = new Elevador();

var puertasAbiertas = document.querySelector("#puertasAbiertas");
var puertasCerradas = document.querySelector("#puertasCerradas");

puertasAbiertas.addEventListener("click", abiertas);
puertasCerradas.addEventListener("click", cerradas);

function cerradas(){
	if(elevador.puertas===false){
		estadoPuertas.textContent = "Las puertas estan cerradas";
		}else{
			elevador.cerrarPuertas();
			}
	datos();
	}

function abiertas(){
	if(elevador.puertas === true){
		estadoPuertas.textContent = "Las puertas estan abiertas";
		}else{
			elevador.abrirPuertas();
			}
			datos();
	}

function datos(){
    var piso = document.querySelector("#piso").value;
    var capacidad = document.querySelector("#capacidad").value;
    

    elevador._piso = piso;
    elevador._capacidad = capacidad;
    //elevador._puertas = puertas;
	imprimir();
    revisarPuertas();
}

function revisarPuertas(){
	   
}

function imprimir(){
    //let estadoPuertas = document.querySelector("#estadoPuertas");
    
    let resultado = document.querySelector("#resultado");

    resultado.textContent = elevador.toString();
}
