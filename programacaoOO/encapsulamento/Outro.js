import User from "./User.js"
import Admin from "./Admin.js";
import Docente from "./Docente.js";

//importamos user admin e docente

const novoUser = new User ('Julia', 'j@ju.com', '2022-04-01')

console.log(novoUser.exibirInfos())
novoUser.nome = 'Ana Maria' //usando setter
console.log(novoUser.nome) //acessando via getter
console.log(novoUser.exibirInfos());

/*novoUser.nome = 'Mariana'
console.log(novoUser.nome) */

