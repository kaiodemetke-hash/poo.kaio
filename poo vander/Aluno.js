const estaAtivo ={
    false:"False",
    true:"True",
}

class Usuario {
    id;
    nome;
    turno;
    dataMatricula;
    estaAtivo;

    constructor(id, nome, turno, dataMatricula, estaAtivo,){
        this.id = id;
        this.nome = nome;
        this.turno = turno;
        this.dataMatricula = new Date (dataMatricula);
        this.estaAtivo = true;
        

   }
   
   perfil(){
    return "Nome: " + this.nome + "Turno: " + this.turno + "estaAtivo: " + this.estaAtivo + " - Data de Matricula: " + this.dataMatricula.toString();
   }

}

const pessoa1 = new Aluno(1,"Thiago","manhã","2018-09-05T14:35:00", estaAtivo.true);
const pessoa2 = new Aluno(2,"Gabriel","tarde","2021-02-10T09:01:00", estaAtivo.false);
console.log(pessoa1)
pessoa1.nome = "carlos";
console.log(pessoa1)
console.log(pessoa1.perfil())
console.log(pessoa2.perfil())