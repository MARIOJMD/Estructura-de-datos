import Articulo from "./Articulo.js";

export default class Lista{
  constructor(){
    this._primerArticulo = null;
    this._ultimoArticulo = null;

  }

  get primerArticulo(){
    return this._primerArticulo;
  }
  set primerArticulo(val){
    this._primerArticulo = val;
    return this._primerArticulo;
  }
  get ultimoArticulo(){
    return this._ultimoArticulo;
  }
  set ultimoArticulo(val){
    this._ultimoArticulo = val;
    return this._ultimoArticulo;
  }

 agregar(articulo){
    var articul = new Articulo(articulo);

    if(this._primerArticulo == null){
      this._primerArticulo = articul;
      this._ultimoArticulo = articul;
      console.log(this._primerArticulo);
    }else{
      this._ultimoArticulo.siguiente = articul;
      this._ultimoArticulo;
      console.log(this._primerArticulo);
    }
    //console.log(this._primerArticulo);
  }

  buscarArticulo(articulo, codigo, objArticulo){
    let resBusqeda = document.querySelector("#resBusqeda");
    let art = this._primerArticulo;
    //----------------
    //let art = objArticulo;
    //----------------
    var cont = 0;
    console.log(art);
    while(art.siguiente !== null){
      if(art == codigo){
        return cont = 1;
      //  return cont;
      }else{
        //art.siguiente.siguiente;
        return cont = 0;
        //return cont;
      }
      //return cont;
    }

    if(cont == 1){
      //return art.codigo;
      //console.log(art.codigo); //aqui deberia imprimir
      //resBusqeda.textContent = "articulo encontrado";
      //---------------
      //return art.codigo;
      console.log("se enontró una coincidencia");
    }else{
      //resBusqueda.textContent = "articulo no encontrado";
      console.log("no se encontraron coincidencias");
    }
  }

}
