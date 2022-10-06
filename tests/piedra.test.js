const Tijera= require('../src/Tijera')
const Piedra= require('../src/Piedra')
const Papel= require('../src/Papel')

test("Piedra contra piedra", ()=>{
    const piedra2 = new Piedra();
    const piedra1= new Piedra();
    expect(piedra2.contra(piedra1)).toBe("Empate");
})

test("Piedra contra papel", ()=>{
    const piedra = new Piedra();
    const papel= new Papel();
    expect(piedra.contra(papel)).toBe("Derrota");
})

test("Piedra contra tijera", ()=>{
    const piedra = new Piedra();
    const tijera= new Tijera();
    expect(piedra.contra(tijera)).toBe("Victoria");
})