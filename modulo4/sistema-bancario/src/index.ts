import express, { Express, Request, Response } from "express";
import cors from "cors";
import { accounts } from "./accounts";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("/users/create", (req: Request, res: Response) => {
  try {
   
    const { name, CPF, dateOfBirthAsString } = req.body;
    const [day, month, year] = dateOfBirthAsString.split("/");
    const dateOfBirth: Date = new Date(`${year}-${month}-${day}`);

    const ageInMilliseconds: number = Date.now() - dateOfBirth.getTime();
    const ageInYears: number = ageInMilliseconds / 1000 / 60 / 60 / 24 / 365;
    if (ageInYears < 18) {
      throw new Error("idade deve ser maior que 18 anos");
    }

    accounts.push({
      name,
      CPF,
      dateOfBirth,
      balance: 0,
      statement: [],
    });
    
    res.status(201).send("conta criada com sucesso!");
  } catch (error: any) {
    console.error(error);
    res.status(400).send(error.message);
  }
});

//fazer um get que retorne todas as contas
app.get("/users/all", (req: Request, res: Response) => {
  try {
    if (accounts.length === 0) {
      res.statusCode = 404;
      throw new Error("Nenhuma conta encontrada");
    }
    res.status(200).send(accounts);
  } catch (error: any) {
    console.error(error);
    res.send(error.message);
  }
});

app.listen(3003, () => {
  console.log("servidor rodando na porta 3000");
});
