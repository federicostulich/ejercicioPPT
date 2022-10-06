function Papel(){
    this.contra= function(elemento) {
        return elemento.comoLeVaAPapelContraVos();
    }
    this.comoLeVaATijeraContraVos=function(){
        return "Victoria"
    }
    this.comoLeVaAPiedraContraVos=function(){
        return "Derrota"
    }
    this.comoLeVaAPapelContraVos=function(){
        return "Empate"
    }
    
}

module.exports=Papel;