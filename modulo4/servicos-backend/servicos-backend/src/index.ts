import { app } from "./app";
import { criarEndereco } from "./endpoints/criarEndereco";
import { retornarEndereco } from "./endpoints/retornarEndereco";


app.post("/cadastro-cep/:cep",criarEndereco)

app.get('/endereco/:cep' ,retornarEndereco)


