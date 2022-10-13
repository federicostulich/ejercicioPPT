const Puntaje = require("../src/Puntaje");

test("Puntaje 0 a 0", ()=>{
    const puntaje = new Puntaje();
    expect(puntaje.resultado()).toBe("0 a 0"); 
})