export default class Base{
	constructor(nombre, latitud, longitud, tiempo, salida){
		this._nombre = nombre;
		this._latitud = latitud;
		this._longitud = longitud;
		this._tiempo = tiempo;
		this._salida = salida;
	}
	get nombre(){
		return this._nombre;
	}
	get latitud(){
		return this._latitud;
	}
	get longitud(){
		return this._longitud;
	}
	get tiempo(){
		return this._tiempo;
	}
	set tiempo(){
		this._tiempo;
	}
	get salida(){
		return this._salida;
	}
}
