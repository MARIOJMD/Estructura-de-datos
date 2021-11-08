class Corredor{
    constructor(numero){
        this.numero = numero;
    }
    correr = (dado) =>{
        let avanzar = 1;

        if(dado>=3 && dado<=5){
            avanzar = 2
        }
        else if(dado == 6){
            avanzar = 3;
        }
        return avanzar;
    }
}
export default Corredor;
