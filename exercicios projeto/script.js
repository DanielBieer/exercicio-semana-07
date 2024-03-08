//exercicio 1
class Produto{
// exercicio 2
   constructor(nome, preco, quantidade){ 
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
   }
    
//exercicio 3
    Vender(quantidadeVendida){
    if(quantidadeVendida > this.quantidade){
        console.log("Estoque insuficiente")
    } else {
    this.quantidade -= quantidadeVendida
    }
    }
//exercicio 4
    Repor(quantidadeReposta){
        this.quantidade += quantidadeReposta;
        console.log(this.quantidade);
    }
//exercicio 5
    MostrarEstoque(){
        console.log(`O produto ${this.nome} possui ${this.quantidade} unidades disponíveis`)
    }
//exercicio 6
    AtualizarPreco(novoPreco){
        this.preco = novoPreco;
    }
} 
//exercicio 7
class Pessoa{
    constructor(nome, idade, profissao){
    this.nome = nomethis;
    this.idade = idade;
    this.profissao = profissao;
    }
}


//exercicio 8
class Cliente extends Pessoa{
    constructor(telefone, email, clienteDesde = "ANO-MES-DIA", nome, idade, profissao){
    this.telefone = telefone;
    this.email = email;
    this.clienteDesde = clienteDesde;
    }
}