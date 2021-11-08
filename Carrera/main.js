import Carrera from "./Carrera.js"
var boton = document.querySelector('#Iniciar');
boton.addEventListener('click', IniciarCarrera);

function IniciarCarrera(){
    let carrera = new Carrera();
    carrera.iniciar();
}