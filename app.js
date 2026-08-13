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

const titã = new personagem("Kryonix", 100, 50)

const anjo = new personagem("Muriel", 110, 15)

const anão = new personagem("zangado", 30, 67)

console.log(guerreiro, "\n",druida,"\n", mago,"\n", arqueiro,"\n", titã, "\n",anjo, "\n",anão)


druida.causaDano(guerreiro);
console.log("\nKode atacou Thorin");
console.log("Vida do Thorin:", guerreiro.vida);

guerreiro.causaDano(druida);
console.log("\nThorin atacou Kode");
console.log("Vida do Kode: ", druida.vida );

druida.causaDano(guerreiro);
console.log("\nKode atacou Thorin");
console.log("Vida do Thorin:", guerreiro.vida);

guerreiro.causaDano(druida);
console.log("\nThorin atacou Kode");
console.log("Vida do Kode:", druida.vida);

titã.causaDano(anjo);
console.log("\nKryonix atacou muriel");
console.log("vida do Muriel", anjo.anjo)
