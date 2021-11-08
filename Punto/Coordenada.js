export default class Coordenada{
    constructor(){
        this._x = 0;
        this._y = 0;
        
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
}
