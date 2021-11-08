export default class Ruta{
	constructor(nombre, tiempo){
	    	this._nombre = nombre;
	    	this._tiempo = tiempo;
	}
	get nombre(){
		return this._nombre;
	}
	get tiempo(){
		return this._tiempo;
	}
	set tiempo(){
		this._tiempo;
	}
}
