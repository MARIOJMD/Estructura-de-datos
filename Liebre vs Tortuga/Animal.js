export default class Animal {
    constructor() {
        this._posicion = 0;
    }
    get posicion() {
        return this._posicion;
    }
    set posicion(val) {
        this._posicion = val;
    }
    probabilidad() {
        let random = Math.trunc(Math.random() * 100 + 1);
        return random;
    }
}