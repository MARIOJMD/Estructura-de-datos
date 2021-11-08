export default class Coordenada{
    constructor(x, y ){
        this._x = x;
        this._y = y;
        
    }
    get x(){
        return this._x;
    }
    set x(pos){
		if(pos <= 100 && pos >= -100){
			this._x = pos;
			return this._x;
			}else{
				return this._x;
				}
		}
    get y(){
        return this._y;
    }
    set y(pos){
		if(pos <= 100 && pos >= -100){
			this._y = pos;
			return this._y;
			}else{
				return this._y;
				}
		}
    toString(){
		let string = "(" + this._x + ", " + this._y + ")";
		return  string;
		}
		//distancia 
		distancia(coordenada2){
			let distancia = Math.sqrt(
				Math.pow((coordenada2.x - coordenada1.x), 2) + Math.pow((coordenada2.y - coordenada1.y), 2)
					);
					return distancia;
		}
}
