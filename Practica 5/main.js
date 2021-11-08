var numero = document.querySelector("#numero");
var resultado = document.querySelector("#resultado");
var btn = document.querySelector("#btn");
btn.addEventListener("click", recoger);

function recoger(){
    var numero = document.querySelector("#numero").value;
    
    resultado.textContent = esPerfecto(numero);
    //console.log("boton entra");
}

function esPerfecto(numero){
   if(sumatoria(numero) === numero){
       return true;
   }else{
       return false;
   }
}

function sumatoria(numero){
    let suma = 0;

    for(let i = 0; suma <= i; i++){
        if(numero%i === 0){
            numero = i;
        }
    }
    return numero;
}
