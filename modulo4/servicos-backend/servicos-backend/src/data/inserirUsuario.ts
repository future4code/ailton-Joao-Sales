import { Usuario } from "../types/usuario";
import { connection } from "./connection";

export async function inserirUsuario(usuarioCadastro: Usuario) {
    try {
        await connection().insert({
            logradouro: usuarioCadastro.logradouro,
            bairro: usuarioCadastro.bairro,
            cidade: usuarioCadastro.cidade,
            estado: usuarioCadastro.estado
        }).into("usuarioCEP")
    } catch (error:any) {
        console.log(error)
    }

}