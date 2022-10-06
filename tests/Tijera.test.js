const Tijera= require('../src/Tijera')
const Piedra= require('../src/Piedra')
const Papel= require('../src/Papel')



test("Tijera contra tijera", ()=>{
    const tijera1 = new Tijera();
    const tijera2 = new Tijera();
    expect(tijera1.contra(tijera2)).toBe("Empate");

})

test("Tijera contra piedra", ()=>{
    const tijera1 = new Tijera();
    const piedra1 = new Piedra();
    expect(tijera1.contra(piedra1)).toBe("Derrota");

})
test("Tijera contra papel", ()=>{
    const tijera1 = new Tijera();
    const papel1 = new Papel();
    expect(tijera1.contra(papel1)).toBe("Victoria");

})