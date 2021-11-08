import Base from "./Base.js";
var base = new Base();
import Ruta from "./Ruta.js";
var ruta = new Ruta();
export Default class Salida{
	constructor(ruta, base, horaInicio, horaFin, secuencia){
		this._ruta = ruta;
		this._base = base;
		this._horaInicio = horaInicio;
		this._horaFin = horaFin;
		this._secuencia = secuenca;
	}
	get ruta(){
		return this._ruta;
	}
	set ruta(){
		ruta.nombre();
	}
	get base(){
		return this._base;
	}
	set base(){
		base.nombre();
	}
	get horaInicio(){
		return this._horaIniio;
	}
	set horaInicio(){
		this._horaInicio();
	}
	get horaFin(){
		return this._horaFin;
	}
	set horaFin(){
		this._horaFin;
	}
	get secuencia(){
		return this._secuencia;
	}
	set secuencia(){
		this._secuencia;
	}
}
