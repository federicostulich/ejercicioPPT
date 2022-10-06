function Papel(){
    this.contra= function(elemento) {
        return elemento.elementoContraMi("Papel");
    }
    this.elementoContraMi=function(elemento){
        if(elemento==="Tijera"){
            return "Victoria";
        }
        if(elemento==="Papel"){
            return "Empate";
        }
        if (elemento==="Piedra"){
            return "Derrota";
        }
    }
    
}

module.exports=Papel;