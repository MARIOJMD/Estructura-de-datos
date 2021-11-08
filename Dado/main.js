import Dado from "./Dado.js";
var btn = document.querySelector("#btn");
btn.addEventListener("click", lanzarDado);
var dado = new Dado();

function lanzarDado(){
	//console.log("Boton entra");
	//console.log(dado.lanzar());
	var lanzar = dado.lanzar();
	cien(dado, lanzar);
}

	
			
	
	function cien(dado, lanzar){
		var caras = [0, 0, 0, 0, 0, 0];
		
		for(let i = 0; i <100; i++){
			var res = caras[lanzar];
			caras[res-1]++
			}
			return caras;
			
		}
		
	function imprimir(caras){
		  console.log(caras);
		}
