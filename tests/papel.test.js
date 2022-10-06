const Tijera= require('../src/Tijera')
const Piedra= require('../src/Piedra')
const Papel= require('../src/Papel')



test("Papel contra Papel", ()=>{
    const papel1 = new Papel(); 
    const papel2 = new Papel();
    expect(papel1.contra(papel2)).toBe("Empate");

})
test("Papel contra Tijera", ()=>{
    const papel1 = new Papel();
    const tijera1= new Tijera();
    expect(papel1.contra(tijera1)).toBe("Derrota");
})
test("Papel contra piedra", ()=>{
    const papel1 = new Papel();
    const piedra1= new Piedra();
    expect(papel1.contra(piedra1)).toBe("Victoria");
})