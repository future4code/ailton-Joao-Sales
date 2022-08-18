import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { User, users } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!");
});

//exercicio 01 e 02

app.get("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const userType: string = (req.query.userType as string).toUpperCase();
    console.log(userType);
    if (userType !== "NORMAL" && userType !== "ADMIN") {
      errorCode = 404;
      throw new Error("type user not found");
    }

    const user: User[] = users.filter((item) => {
      return item.type === userType;
    });

    res.status(200).send(user);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

//exercicio 03
app.post("/users", (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const { id, name, email, type, age } = req.body;
    if (!id || !name || !email || !type || !age) {
      errorCode = 422;
      throw new Error("Please check the fields!");
    }
    const newUser: User = {
      id,
      name,
      email,
      type,
      age,
    };
    users.push(newUser);
    res.status(201).send({ message: "User created successefully" });
  } catch (error: any) {
    res.status(errorCode).send({ messagem: error.message });
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
