var btn = document.querySelector("#btn");
btn.addEventListener("click", click);

var resultado = document.querySelector("#resultado");

function click(){
	var numero = document.querySelector("#numero").value;
	comparacion(numero);
	//console.log(numero);
}

function comparacion(numero){
	for(let i = 0; i < numero; i++){
		for(let i2 = 0; i2 < numero; i2++){
			if(i !== i2 && i2 !== 0 && i === amigos(i2) && i2 === amigos(i)){
				resultado.textContent(i + ", " + i2);
				//var a = i;
				//var b = i2;
				//console.log(a + ", " + b);
			}
			//console.log(numero);
//			console.log(a + ", " + b);
		}
		//console.log(numero);
		//console.log(a + ", " + b)

	}
	//console.log(numero);
	//console.log("hola");
}

function amigos(numero){
	let cont = 0;
	for(let i = 0; i < numero; i++){
		if(numero%i === 0){
			cont++;
		}
		return cont;
	}
	//return cont;
	
}
