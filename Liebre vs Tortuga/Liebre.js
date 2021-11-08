import Animal from "./Animal.js";
export default class Liebre extends Animal {
    constructor() {
        super();
        this._posicion = 0;
    }
    dormir() {
        return this._posicion;
    }
    saltoGrande() {
        this._posicion += 9;
        return this._posicion;
    }
    resbalonGrande() {
        this._posicion -= 12;
        if (this._posicion < 0) {
            this._posicion = 0;
            return this._posicion;
        } else {
            return this._posicion;
        }
    }
    saltoPequeño() {
        this._posicion++;
        return this._posicion;
    }
    resbalonPequeño() {
        this._posicion -= 2;
        //return this._posicion;
        if (this._posicion < 0) {
            this._posicion = 0;
        } else {
            return this._posicion;
        }
    }

}
