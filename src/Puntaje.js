function Puntaje(){
    this.resultado = "0 a 0";
    this.getResultado = function(){
        return this.resultado;
    }

    this.duelo = function(elemento1,elemento2){
        if (elemento1.contra(elemento2) === "Victoria"){
            this.resultado = "1 a 0";
        } else if (elemento1.contra(elemento2) === "Derrota"){
            this.resultado = "1 a 1";
        } 
        
    }
}

module.exports = Puntaje;