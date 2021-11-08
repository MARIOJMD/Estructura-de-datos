export default class Dado{
	constructor(){
		}
		lanzar(){
			let random = Math.trunc(Math.random()*6+1);
			return random;
		}
	}
