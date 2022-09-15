import { Request, Response } from "express";
import { selectUserByName } from "../data/query";
import { users } from "../types";

export const getUserByName = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let name = req.query.name as string;
    let errorCode = 500;

    if (!name) {
      errorCode = 404;
      throw new Error("Nenhum nome foi informado");
    }
    const user: users[] = await selectUserByName(name);

    if (!user.length) {
      errorCode = 404;
      throw new Error("Nenhum usuário encontrado");
    }

    res.status(200).send(user);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
