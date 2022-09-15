import { Usuario } from "../types/usuario";
import { connection } from "./connection";

export async function inserirUsuario(usuarioCadastro: Usuario) {
    try {
        await connection().insert({
            logradouro: usuarioCadastro.logradouro,
            bairro: usuarioCadastro.bairro,
            cidade: usuarioCadastro.cidade,
            estado: usuarioCadastro.estado,
            CEP:usuarioCadastro.CEP,
            numero:usuarioCadastro.numero,
            complemento:usuarioCadastro.complemento
        }).into("usuarioCEP")
    } catch (error:any) {
        console.log(error)
    }

}