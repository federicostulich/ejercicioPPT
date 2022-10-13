function Puntaje(){
    this.resultado = "0 a 0";
    this.getResultado = function(){
        return this.resultado;
    }

    this.duelo = function(){
        this.resultado = "1 a 0";
    }
}

module.exports = Puntaje;