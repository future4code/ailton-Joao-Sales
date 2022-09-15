import express from "express"
import cors from "cors"

export const app = express();

app.use(express.json())
app.use(cors())

//exercicio 02

// CREATE TABLE user_adress (
//     id INT PRIMARY KEY,
//     CEP VARCHAR(255) NOT NULL,
//     logradouro VARCHAR(255) NOT NULL,
//     numero VARCHAR(255) NOT NULL,
//     complemento VARCHAR(255),
//     bairro VARCHAR(255) NOT NULL,
//     cidade VARCHAR(255) NOT NULL,
//     estado VARCHAR(255) NOT NULL
// )

app.listen(process.env.PORT || 3003 ,()=>{
    console.log("Servidor esta rodando no endereço http://localhost:3003")
})