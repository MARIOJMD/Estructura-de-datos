import Animal from "./Animal.js";
export default class Tortuga extends Animal{
    constructor(){
        super();
        this._posicion = 0;
    }
     pasoRapido(){
        this._posicion+=3;
        return this._posicion;
    }
     resbalon(){
        this._posicion-=6;
        if(this._posicion<0){
			this._posicion = 0;
			return this._posicion;
			}
    }
     pasoLento(){
        this._posicion++;
        return this._posicion
    }
}
