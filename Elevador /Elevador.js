export default class Elevador{
    constructor(){
        this._piso = 0;
        this._capacidad = 0;
        this._puertas = false;
    }
    get piso(){
        return this._piso;
    }
    get capacidad(){
        return this._capacidad;
    }
    get puertas(){
        return this._puertas;
    }
	abrirPuertas(){
		return this._puertas = true;
		}
	cerrarPuertas(){
		return this._puertas = false;
		}
    toString(){
        let string = "El elevador se dirigió al piso " + this._piso + ", con capacidad de " + this._capacidad + " personas.";
        return string;
    }
}
