import Articulo from "./Articulo.js";
var articulo = new Articulo();

var btn = document.querySelector("#btn");
btn.addEventListener("click", click);
//var info = document.querySelector("#info");
var btn2 = document.querySelector("#mostrar");
btn2.addEventListener("click", mostrar);

var articulos = [];
console.log(articulos);

function mostrar(){
		initTable();
}

function click(){
	//let form = document.querySelector("#form");
	var codigo = document.querySelector("#codigo").value;
	var nombre = document.querySelector("#nombre").value;
	var precio = document.querySelector("#precio").value;
	var cantidad = document.querySelector("#cantidad").value;
	var descripcion = document.querySelector("#descripcion").value;
	
	articulo._codigo = codigo;
	articulo._nombre = nombre;
	articulo._cantidad = cantidad;
	articulo._precio = precio;
	articulo._descripcion = descripcion;
	
	imprimir();
	
}

function imprimir(){
	
	let info = document.querySelector("#info");
	
	
	let row = info.insertRow(-1);
	let cellString = row.insertCell(0);
	row.insertCell(1);
	
	cellString.textContent = articulo.toString();
	addEliminar(row, articulo);
	
	let objArticulo = {
			codigo: articulo.codigo,
			nombre: articulo.nombre,
			cantidad: articulo.cantidad,
			precio: articulo.precio,
			descripcion: articulo.descripcion
	}
	articulos.push(objArticulo);
	localStorage.setItem("articulo", JSON.stringify(articulos));
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
		let pos = findArticulo(articulo.nombre);
		articulos.splice(pos, 1);
		localStorage.setItem("articulos", JSON.stringify(articulos));
		row.remove();
}

function findArticulo(){
		var result = -1;
		articulos.forEach((articulo, index) =>{
			if(articulo.nombre === nombre){
				result = index;
				return;
			}
		});
		return result;
}

function initTable(){
	let lsArticulo = JSON.parse(localStorage.getItem("articulo"));
	
	if(lsArticulo === null){
		return;
	}
	lsArticulo.forEach((articulo, index) =>{
			imprimir(new Articulo(articulo));
			//articulos.push(articulo);
		});
}
