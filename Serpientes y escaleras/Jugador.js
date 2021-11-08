import Dado from "./Dado.js";
//var dado = new Dado();
export default class Jugador{
    constructor(){
        this._posicion = 0;
        this._dado = new Dado();
    }
    /*lanzarDado(){
		var random = Math.trunc(Math.random()*6+1);
		return random;
		}*/
	mover(){
		this._posicion += this._dado.lanzar();
		return this._posicion;
	}
    get posicion(){
        return this._posicion;
    }
    set posicion(val){
		this._posicion = val;
		}
    escalera1(){
		return this._posicion +=4;
		}
	escalera2(){
		return this._posicion+=10;
		}
	escalera3(){
		return this._posicion+=5
		}
	escalera4(){
		return this._posicion+=11;
		}
	escalera5(){
		return this._posicion+=20;
		}
	escalera6(){
		return this._posicion+=7;
		}
	escalera7(){
		return this._posicion+=12;
		}
	escalera8(){
		return this._posicion+=25;
		}
	serpiente1(){
		return this._posicion-=5;
		}
	serpiente2(){
		return this._posicion-=8;
		}
	serpiente3(){
		return this._posicion-=10;
		}
	serpiente4(){
		return this._posicion-=20;
		}
	serpiente5(){
		return this._posicion-=25;
		}
	serpiente6(){
		return this._posicion-=9;
		}
	serpiente7(){
		return this._posicion-=3;
		}
	serpiente8(){
		return this._posicion-=14;
		}
	movimientoJugador(){

	if(posicion = 10){
		escalera1();
	}else if(posicion = 20){
		escalera2();
	}else if(posicion = 21){
		escalera3();
	}else if(posicion = 30){
		escalera4();
	}else if(posicion = 35){
		escalera5();
	}else if(posicion = 40){
		escalera6();
	}else if(posicion = 56){
		escalera7();
	}else if(posicion = 70){
		escaleras8();
	}else if(posicion = 23){
		serpiente1();
	}else if(posicion = 45){
		serpiente2();
	}else if(posicion = 50){
		serpiente3();
	}else if(posicion = 55){
		serpiente4();
	}else if(posicion = 61){
		serpiente5();
	}else if(posicion = 65){
		serpiente6();
	}else if(posicion = 80){
		serpiente7();
	}else if(posicion = 99){
		serpiente8();
	}
}

}
