import User from "./User.js"
import Admin from "./Admin.js"
import Docente from "./Docente.js";

const novoUser = new User ('Julia', 'j@ju.com', '2022-04-01')
console.log(novoUser.exibirInfos())


const novoAdmin = new Admin ('Daniela', 'd@d.com', '2024-01-01')
console.log(novoAdmin.exibirInfos())


const novoDocente = new Docente ("Frederica", "d@d.com", "2024-01-01");
console.log(novoDocente.exibirInfos());

//usamos aqui o static do user
const dadosFicticios = User.exibirInfosGenericas('Cassio', 'c@c.com')
console.log(dadosFicticios)


