function Piedra(){
    this.contra= function(elemento) {
        return elemento.comoLeVaAPiedraContraVos();
    }
    this.comoLeVaATijeraContraVos=function(){
        return "Derrota"
    }
    this.comoLeVaAPiedraContraVos=function(){
        return "Empate"
    }
    this.comoLeVaAPapelContraVos=function(){
        return "Victoria"
    }
}

module.exports=Piedra;