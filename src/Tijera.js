const Papel = require("./Papel");
const Piedra = require("./Piedra");


function Tijera(){

    this.comoLeVaATijeraContraVos=function(){
        return "Empate"
    }
    this.comoLeVaAPiedraContraVos=function(){
        return "Victoria"
    }
    this.comoLeVaAPapelContraVos=function(){
        return "Derrota"
    }
    this.contra= function(elemento) {
        return elemento.comoLeVaATijeraContraVos();
    }
    
   
}

module.exports=Tijera;