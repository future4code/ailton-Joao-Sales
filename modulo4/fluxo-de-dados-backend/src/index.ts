import express, { Request, response, Response } from "express";
import cors from "cors";
import { product, products } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/test", (req: Request, res: Response) => {
  res.send("A api está pronta para ser utilizada.");
});

// exercicio 03, criar um novo produto, com a id sendo criada
// automaticamente pela api
app.post("/createProduct", (req: Request, res: Response) => {
  try {
    const { name, price } = req.body;
    if (!name || !price) {
      res.statusCode === 404;
      throw new Error("Você não colocou ou nome ou preço do seu produto");
    }
    const newProduct: product = {
      id: Date.now().toString(),
      name,
      price,
    };
    products.push(newProduct);
    res.send(products);
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ mensage: error.mensage });
  }
});

//exercicio 04, retornar todos os produtos
app.get("/allProducts", (req: Request, res: Response) => {
  try {
    res.send(products);
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ mensage: error.mensage });
  }
});

//exercicio 05, editar preço de um produto especifico
app.put("/editProduct/:id", (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const { price } = req.body;
    if (!id) {
      res.statusCode = 404;
      throw new Error("Você não passou Id do produto");
    }
    if (!price) {
      res.statusCode = 404;
      throw new Error("Preço não foi enviado para alteração");
    }
    if (price <= 0) {
      res.statusCode = 401;
      throw new Error(` O ${price} sendo negativo é invalido`);
    }
    if (typeof price !== "number") {
      res.statusCode = 404;
      throw new Error(`O seu preço não é um número!`);
    }
    const editPrice = products
      .filter((item) => {
        if (item.id === id) {
          return item;
        }
      })
      .map((item) => {
        item.price = price ? price : item.price;
        return item;
      });
    res.send(editPrice);
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ mensage: error.mensage });
  }
});
//exercicio 06, deletar um determinado produto
app.delete("/deleteProduct/:id", (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deleteProduct: product[] = products.filter((item) => {
      return item.id !== id;
    });
    res.send(deleteProduct);
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ mensage: error.mensage });
  }
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
