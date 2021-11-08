//import Lista from "./lista.js";
import Articulo from "./Articulo.js";
var articulo = new Articulo();

var btn = document.querySelector("#btn");
btn.addEventListener("click", click);
//var info = document.querySelector("#info");


var articulos = [{codigo: 1}, {codigo: 3}, {codigo: 7}];
console.log(articulos);

var busqueda = document.querySelector("#busqueda");

/*function mostrar(){
		reporte(articulos);
}*/

function click(){
	//let form = document.querySelector("#form");
	var codigo = document.querySelector("#codigo").value;
	var nombre = document.querySelector("#nombre").value;
	var precio = document.querySelector("#precio").value;
	var cantidad = document.querySelector("#cantidad").value;
	var descripcion = document.querySelector("#descripcion").value;
	var busqueda = document.querySelector("#busqueda").value;

	articulo._codigo = codigo;
	articulo._nombre = nombre;
	articulo._cantidad = cantidad;
	articulo._precio = precio;
	articulo._descripcion = descripcion;

	vector();

}

function ordenamiento(codigo){

	let pos = -1;

	if(articulos.length > 1){
		for(var i = 0; i < articulos.length-1 && pos === -1; i++){
			if(codigo < articulos[i].codigo){
				pos = i;
			} 

		}
		let temp = articulos.length;
		for(let j = temp; j > pos; j--){
			articulos[j] = articulos[j-1];
		}
	}
	return pos;
	//console.log(articulos);
}

function vector(){


	if(articulos.length < 20){
		let objArticulo = {
			codigo: articulo.codigo,
			nombre: articulo.nombre,
			cantidad: articulo.cantidad,
			precio: articulo.precio,
			descripcion: articulo.descripcion
		}
		  articulos[ordenamiento(objArticulo.codigo)] = objArticulo;
	    //localStorage.setItem("articulos", JSON.stringify(articulos));

			//ordenamiento(codigo);
				imprimir();
	}
}

function imprimir(){
	let info = document.querySelector("#info");
	let row = info.insertRow(-1);
	let cellString = row.insertCell(0);
	row.insertCell(1);

	cellString.textContent = articulo.toString();
	addEliminar(row, articulo);
}

function addEliminar(row, articulo){
		let btnEliminar = document.createElement("input");
		btnEliminar.type = "button";
		btnEliminar.value = "Eliminar";
		btnEliminar.addEventListener("click", () =>{
				eliminarArticulo(row, articulo);
		})
		row.cells[1].innerHTML ="";
		row.cells[1].appendChild(btnEliminar);
}

function eliminarArticulo(row, articulo){
		let pos = findArticulo(articulo.codigo);
		articulos.splice(pos, 1);
		//localStorage.setItem("articulos", JSON.stringify(articulos));
		row.remove();

}

function findArticulo(){
		var result = -1;
		articulos.forEach((articulo, index) =>{
			if(articulo.codigo === codigo){
				result = index;
				return;
			}
		});
		return result;
}
