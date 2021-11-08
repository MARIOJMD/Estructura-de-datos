//Recursividad
/*function factorial(x){
  if(x<=1){
    return 1;
  }else{
    return x * factorial(x-1);
  }
}
*/

//recursividad con listas enlazadas
class nodo{
  constructor(valor){
    this.dato = valor;
    this.siguiente = null;
  }
}

let n = new nodo(1);
let _inicio = null;

function agregar(nuevo){
  if(_inicio ==null){
    _inicio = nuevo;
  }else{
    _agregar(nuevo, _inicio)
  }
}

function _agregar(nuevo, ultimo){
  if(ultimo.siguiente==null){
    ultimo.siguiente=nuevo;
  }else{
    _agregar(nuevo, ultimo.siguiente)
  }
}
