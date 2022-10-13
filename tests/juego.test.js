const Puntaje = require("../src/Puntaje");

test("Puntaje 0 a 0", ()=>{
    const puntaje = new Puntaje();
    expect(puntaje.resultado()).toBe("0 a 0"); 
})

test("Puntaje 1 a 0", ()=>{
    const puntaje = new Puntaje();
    puntaje.duelo();
    expect(puntaje.resultado()).toBe("1 a 0"); 
})