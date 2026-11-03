
console.log("Carro");

console.log("Classe carro");


class Carro{
    id;
    nome;
    cor;
    disponivel;
    anoFabricacao;
    
    constructor(id,nome,cor,anoFabricacao){
        this.id = id;
        this.nome = nome;
        this.cor = cor;
        this.disponivel = true;
        this.anoFabricacao = anoFabricacao;
    }
}

const p1 = new Carro (1,"GOL", "Preto", "2018");
const p2 = new Carro (2,"Silverado", "Laranja", "2023");
const p3 = new Carro (3,"Golf", "Vermelho", "2021");

console.log(p1);
p1.nome = "Carro";
console.log(p1);
console.log(p2);
p2.disponivel = true;
console.log(p2);
console.log("Nome Carro: " + p2.nome +"  status: " + p2.disponivel);