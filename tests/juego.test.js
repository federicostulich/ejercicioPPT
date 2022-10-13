const Puntaje = require("../src/Puntaje");
const Piedra= require('../src/Piedra')
const Papel= require('../src/Papel')

test("Puntaje 0 a 0", ()=>{
    const puntaje = new Puntaje();
    expect(puntaje.getResultado()).toBe("0 a 0"); 
})

test("Puntaje 1 a 0", ()=>{
    const puntaje = new Puntaje();
    const papel = new Papel();
    const piedra = new Piedra();
    puntaje.duelo(papel,piedra);
    expect(puntaje.getResultado()).toBe("1 a 0"); 
})

test("Puntaje 1 a 1", ()=>{
    const puntaje = new Puntaje();
    const papel = new Papel();
    const piedra = new Piedra();

    puntaje.duelo(papel,piedra);
    puntaje.duelo(piedra,papel);
    
    expect(puntaje.getResultado()).toBe("1 a 1"); 
})

test("Puntaje 0 a 0 y empate", ()=>{
    const puntaje = new Puntaje();
    const papel1 = new Papel();
    const papel2 = new Papel();
    
    puntaje.duelo(papel1,papel2);
    
    expect(puntaje.getResultado()).toBe("0 a 0"); 
})