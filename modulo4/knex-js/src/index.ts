import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
});

const app: Express = express();
app.use(express.json());
app.use(cors());

// Exercicio 01

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `);
  return result[0][0];
};

getActorById("001")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

(async () => {
  console.log(await getActorById("001"));
})();

app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    console.log(await getActorById(id));
    res.end();
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("Unexpected error");
  }
});

//a) retorna o objeto inteiro

//b)

const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = "${name}"
      `);
  return result[0][0];
};
(async () => {
  console.log("pesquisa ator", await searchActor("Tony Ramos"));
})();
// c)

const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
      `);
  return result[0][0].count;
};

(async () => {
  console.log("conta por genero", await countActors("male"));
})();

////////////////////////////////////////////////////////////////////////////////////////////////

// exercicio 02

const createActor = async (
  id: string,
  name: string,
  salary: number,
  dateOfBirth: Date,
  gender: string
): Promise<void> => {
  await connection
    .insert({
      id: id,
      name: name,
      salary: salary,
      birth_date: dateOfBirth,
      gender: gender,
    })
    .into("Actor");
};

// a)

const updateActor = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
  return `alterado com sucesso`;
};

(async () => {
  console.log("update", await updateActor("007", 5000));
})();

// b)

const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor").delete().where("id", id);
};

(async () => {
  console.log("delete", await deleteActor("002"));
})();

// c)
const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
};
(async () => {
  console.log("media", await avgSalary("male"));
})();

// exercicio 03

// a)
app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor);
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// b)

app.get("/actor", async (req: Request, res: Response) => {
  try {
    res.status(200).send({
      quantity: await countActors(req.query.gender as string),
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
