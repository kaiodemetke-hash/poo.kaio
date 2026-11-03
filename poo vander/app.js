import{Produto} from './models/produto.js';


const p = new Produto(5,"Guitarra");
const p2 = new Produto(6,"Cordas 09");

console.log(p.nome);
console.log(p2);
console.log(p.info())
p.ativo = false;
console.log(p.info())


import {Genero,Usuario} from './models/Usuario.js'
id, nome, senha, dataNascimento, genero
const u1 = new Usuario(1,"Carlos","12513","2010-07-18T00:11:00",Genero.M);

console.log();
console.log(u1.perfil());
console.log(u1);
