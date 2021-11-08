export default class Dado{
	constructor(){
	this.cara = 6;
	}
	lanzar(){
	let result = Math.trunc(Math.random()*6+1);
	return result;
	}
}
