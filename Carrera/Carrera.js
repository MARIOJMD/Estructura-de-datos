import Dado from "./Dado.js"
import Corredor from "./Corredor.js"
class Carrera{
    constructor(){
        this.cuadros = [];

    }
    iniciar = () =>{
        let dado = new Dado();
        let corredor1 = new Corredor(1);
        let corredor2 = new Corredor(2);
        let meta =0;
        this.cuadros=[0,0];

        do{
            this.cuadros[0] += corredor1.correr(dado.Lanzar());
            this.cuadros[1] += corredor2.correr(dado.Lanzar());
            console.log(this.cuadros[0] + "  " + this.cuadros[1]);
            
            if(this.cuadros[0]>=100 && this.cuadros[1]<100){
                meta = 1;
                console.log("El corredor Numero "+ corredor1.numero + " Gano");
            }
            else if(this.cuadros[1]>=100 && this.cuadros[0]<100){
                meta = 1;
                console.log("El corredor Numero "+ corredor2.numero + " Gano");
                
            }
            else if(this.cuadros[1]>=100 && this.cuadros[0]>=100){
                meta = 1;
                console.log("Empate");
            }
        }while(meta!=1);

    }
}
export default Carrera;
