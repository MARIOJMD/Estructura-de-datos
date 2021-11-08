import Lista from "./Lista.js"
var lista = new Lista();
import Articulo from "./Articulo.js";
//var articulo = new Articulo();
var btn = document.querySelector("#btn");
btn.addEventListener("click", click);
var busqueda = document.querySelector("#buscar1");
busqueda.addEventListener("click", buscar);

var invertirReporte = document.querySelector("#invertirReporte");
invertirReporte.addEventListener("click", invertir);


function click(){

			var codigo = document.querySelector("#codigo").value;
			var nombre = document.querySelector("#nombre").value;
			var precio = document.querySelector("#precio").value;
			var cantidad = document.querySelector("#cantidad").value;
			var descripcion = document.querySelector("#descripcion").value;

	agregar(codigo, nombre, cantidad, precio, descripcion);

}

function buscar(codigo, articulo, objArticulo){
	let buscar = document.querySelector("#buscar").value;
	let lista = new Lista();
	lista.buscarArticulo( buscar);
	//resBusqueda.textContent = lista.buscarArticulo(codigo);
	//----------------
	//let busqueda = lista.buscarArticulo(codigo)
}

function agregar(codigo, nombre, cantidad, precio, descripcion){


		var objArticulo = {
			codigo: codigo,
			nombre: nombre,
			cantidad: cantidad,
			precio: precio,
			descripcion: descripcion
		}

		lista.agregar(objArticulo);

			imprimir(objArticulo);

}

function imprimir(articulo){


	let info = document.querySelector("#info");
	let row = info.insertRow(-1);
	let cellCodigo = row.insertCell(0);
	let cellNombre = row.insertCell(1);
	let cellPrecio = row.insertCell(2);
	let cellCantidad = row.insertCell(3);
	let cellDescripcion = row.insertCell(4);
	row.insertCell(5);

	cellCodigo.innerHTML = articulo.codigo;
	cellNombre.innerHTML = articulo.nombre;
	cellPrecio.innerHTML = articulo.precio;
	cellCantidad.innerHTML = articulo.cantidad;
	cellDescripcion.innerHTML = articulo.descripcion;
	addEliminar(row, articulo);
}

function addEliminar(row, articulo){
		let btnEliminar = document.createElement("input");
		btnEliminar.type = "button";
		btnEliminar.value = "Eliminar";
		btnEliminar.addEventListener("click", () =>{
				eliminarArticulo(row, articulo);
		})
		row.cells[5].innerHTML ="";
		row.cells[5].appendChild(btnEliminar);
}

function eliminarArticulo(row, articulo){
		row.remove();
}

function invertir(){
	let primero = lista.primerArticulo;
	while(primero.siguiente !== null){
		primero = primero.siguiente;
		console.log(primero);
	}
}
