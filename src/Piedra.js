function Piedra(){
    this.contra= function(elemento) {
        return elemento.elementoContraMi("Piedra");
    }
    this.elementoContraMi=function(elemento){
        if(elemento==="Tijera"){
            return "Derrota";
        }
        if (elemento=== "Papel"){
            return "Victoria";
        }
        if (elemento==="Piedra"){
            return "Empate";
        }
    }
}

module.exports=Piedra;