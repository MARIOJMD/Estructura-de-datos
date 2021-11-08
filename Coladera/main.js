var btn = document.querySelector("#btn");
btn.addEventListener("click", imprimir);

var resultado = document.querySelector("#resultado");

function imprimir(){
	var arreglo = new Array(1000);
	arreglo.fill(1);
	console.log(arreglo);
	
	for(var i= 2; i < arreglo.length; i++){
		if(arreglo[i]==1){
			for(var j=i +1; j<arreglo.length; j++){
				if(j%1==0){
					arreglo[j]=0;
					}
				}
			}
		
		
		}


	
	}
