export default class Articulo{
    constructor(articulo){
        this._codigo = articulo.codigo;
        this._nombre = articulo.nombre;
        this._precio = articulo.precio;
        this._cantidad = articulo.cantidad;
        this._descripcion = articulo.descripcion;
        this._siguiente = null;
        this._anterior = null;
    }
    get codigo(){
        return this._codigo;
    }
    get nombre(){
        return this._nombre;
    }
    get precio(){
        return this._precio;
    }
    get cantidad(){
        return this._cantidad;
    }
    get descripcion(){
        return this._descripcion;
    }
    get siguiente(){
      return this._siguiente;
    }
    set siguiente(val){
      this._siguiente = val;
      return this._siguiente;
    }
    get anterior(){
      return this._anterior;
    }
    set anterior(val){
      this._anterior = val;
      return this._anterior;
    }
    toString(){
		let string = this._codigo + " "  + this._nombre + ", precio: " + this._precio + ", cantidad: " + this._cantidad + ", Descripcion " + this._descripcion;
		return string;
    }
}
