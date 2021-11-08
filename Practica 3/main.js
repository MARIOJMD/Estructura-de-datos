var result = document.querySelector("#result");
var btn = document.querySelector("#btn");
btn.addEventListener('click', calcular);

function calcular(){
    var numero = document.querySelector("#limite").value;
    //iteracion(numero);
    result.textContent = iteracion(numero);
    //console.log("boton entra");
}

function iteracion(numero){

    let d = 1;
    let r = 4;
    let s = 0;

    for(var i = 1; i <= numero; i++ ){ 
        
        if(i%2 === 0){
            s -=(r/d);
            d +=2;
        }else{
            s += (r/d);
            d += 2;
        }
    }
    return s;
}
