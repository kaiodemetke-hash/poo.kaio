console.log("Criando Classes")


class Produto{
    id;
    nome;
    ativo;
   
    constructor(id,nome,ativo){
        this.id = id;
        this.nome = nome;
        this.ativo = true;
    }

    info(){
        return "Produto: " + this.nome + " - " + (this.ativo?"Em estoque!":"Em falta!");
    }
}

const p1 = new Produto(1,"Carregador");
const p2 = new Produto(2,"Carregador");


console.log(p1);
p1.nome = "Carregador Iphone";
console.log(p1);
console.log(p2);
p2.ativo = false;
console.log(p2);
console.log("Nome Produto: " + p2.nome +"  status: " + p2.ativo);