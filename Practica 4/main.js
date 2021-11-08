var btn = document.querySelector("#btn");
btn.addEventListener('click', recoger);
var resultado = document.querySelector("#resultado");

function recoger(){
    var x = document.querySelector("#x").value; //Recoge valor para x
    var n = document.querySelector("#numero").value; //recoge valor para iteraciones

    iteracion(n, x);
    //resultado.textContent = fact(n);
}

function iteracion(n, x){
    let suma = 0; 
    let n = 0;

    for(let i = 0; i<=n; i++){
        suma +=potencia(x, i)/fact(i);
        return suma;
        //Math.pow(x, i);
       }
    return suma;
}
function fac(n){
    let f = 1;
    for(var i = 1; i<n; i++){
        f*=i;
        return f;
    }
    

    

}