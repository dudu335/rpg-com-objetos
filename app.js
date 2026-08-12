class personagem{
    constructor(nome, vida, ataque){
        this.nome = nome,
        this.vida = vida,
        this.ataque = ataque
    }

    causaDano(personagem){
        personagem.recebeDano(this.ataque)
        
    }
    
    recebeDano(quantidade){
       this.vida = this.vida - quantidade 
        
       if(this.vida <=0){
        this.vida = "eliminado"
    }
}
}
const druida = new personagem("Kode", 80, 25)

const guerreiro = new personagem("Thorin", 60, 20)

const mago = new personagem("Gandalfe", 60, 25)

const arqueiro = new personagem("Legolas", 80, 25)

console.log(guerreiro)
