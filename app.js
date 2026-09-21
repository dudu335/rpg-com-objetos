class Personagem{
    constructor(nome, vida, ataque, defesa){
        this.nome = nome,
        this.vida = vida,
        this.vidaMaxima = vida,
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

    class Guerreiro extends Personagem {
golpePesado(personagem){
personagem.recebeDano(this.ataque * 2)
    }
}
    class Mago extends Personagem {
bolaDeFogo(personagem){
personagem.recebeDano(this.ataque + 15)
}
}
    class Arqueiro extends Personagem {
tiroPreciso(personagem){
personagem.recebeDano(this.ataque + 10)
}
}



const druida = new Personagem("Kode", 80, 25, 10)
const guerreiro = new Guerreiro("Thorin", 60, 20, 5)
const mago = new Mago("Gandalfe", 60, 25,15)
const arqueiro = new Arqueiro("Legolas", 80, 25, 12)
const tita = new Personagem("Kryonix", 100, 50, 5)
const anjo = new Personagem("Muriel", 110, 15, 20)
const anao = new Personagem("zangado", 30, 67, 10)
console.log(guerreiro, "\n",druida,"\n", mago,"\n", arqueiro,"\n", tita, "\n",anjo, "\n",anao)


const personagens = [
    druida,
    guerreiro,
    mago,
    arqueiro,
    tita,
    anjo,
    anao
]


guerreiro.golpePesado(mago)

mago.mostrarStatus()


   personagens.forEach(function(personagem){
    personagem.mostrarStatus()
})


let turno = 1
 let jogadorAtual = 0

  function proximoTurno(){
    turno = turno + 1
  jogadorAtual = jogadorAtual === 0 ? 1 : 0
}

const vidaGuerreiro = document.getElementById("vida-guerreiro")

vidaGuerreiro.innerText = guerreiro.vida
