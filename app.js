class personagem{
    constructor(nome, vida, ataque, defesa){
        this.nome = nome,
        this.vida = vida,
        this.ataque = ataque,
        this.defesa = defesa
    }

    curar(quantidade){
    this.vida = this.vida + quantidade
    if(this.vida > this.vidaMaxima){
    this.vida = this.vidaMaxima
}
    }
    causaDano(personagem){
        personagem.recebeDano(this.ataque)
        
    }
    
    recebeDano(quantidade){
         let dano = quantidade - this.defesa

     if(quantidade < this.defesa)
        dano = 0
     
       this.vida = this.vida - dano
        
       if(this.vida <=0){
        this.vida = "eliminado"
    }
}
estaVivo(){
return this.vida > 0
}
mostrarStatus(){
console.log(this.nome + " | Vida: " + this.vida)
}

}
const druida = new personagem("Kode", 80, 25, 10)
const guerreiro = new personagem("Thorin", 60, 20, 5)
const mago = new personagem("Gandalfe", 60, 25,15)
const arqueiro = new personagem("Legolas", 80, 25, 12)
const titã = new personagem("Kryonix", 100, 50, 5)
const anjo = new personagem("Muriel", 110, 15, 20)
const anão = new personagem("zangado", 30, 67, 10)
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
console.log("vida do Muriel", anjo.vida)


console.log(mago.estaVivo())