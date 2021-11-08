## Clases autoreferenciadas
##Una clase autoreferenciada es una clase que se llama a ella misma.
##Base(Prodcto, alumno, nodo)
##ED(Inventario, grupo)
##HTML[][][] main.js

##array()
#this._inicio = null;

agregar(nuevo){
if(inicio == null){
  inicio=nuevo;
 }else{
  agregar(nuevo, inicio);
 }
}

agregar(nuevo, ultimo){
if(ultimo.siguiente == null){
  ultimo.siguiente = nuevo;
 }else{
  agregar(nuevo, ultimo.siguiente);
 }
}



Recursividad: Es una funcion que se llama a usar a si misma;

function f(x){
if(x<=1){
   return 1;
 }else{
   return x*f(x-1); 
 }
}

n! = n*(n-1)!


