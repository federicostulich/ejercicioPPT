const Papel = require("./Papel");
const Piedra = require("./Piedra");


function Tijera(){
    this.elementoContraMi=function(elemento){
        if(elemento==="Tijera"){
            return "Empate";
        }
        if (elemento==="Papel"){
            return "Derrota";
        }
        if (elemento==="Piedra"){
            return "Victoria";
        }
    }
    this.contra= function(elemento) {
        return elemento.elementoContraMi("Tijera");
    }
   
}

module.exports=Tijera;