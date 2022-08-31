import { Request, Response } from "express";
import { requisicaoCep } from "../services/requisicoes";
import { Usuario } from "../types/usuario";

export async function retornarEndereco(req:Request, res: Response) {
    try {
        const cep = req.params.cep
        if(!cep){
            res.statusCode = 404
            throw new Error("Cep nao foi passado.")
        }
        // buscar informacoes de endereco atraves do cep
       const consultaCep = await requisicaoCep(cep);

       if(!consultaCep){
           res.statusCode = 404
           throw new Error(`Não existe cep com o numero -> ${cep}`)
       }
       res.send(consultaCep)
    } catch (error:any) {
        res.status(res.statusCode || 500).send({ message: error.message})
    }
}

