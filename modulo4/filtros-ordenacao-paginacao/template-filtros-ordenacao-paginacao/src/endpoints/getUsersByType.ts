import { Request, Response } from "express";
import { selectUserByType } from "../data/query";
import { users } from "../types";

export const getUserByType = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let type = req.params.type as string;
    let errorCode = 500;

    if (!type) {
      errorCode = 404;
      throw new Error("Nenhum nome foi informado");
    }
    const user: users[] = await selectUserByType(type);

    if (!user.length) {
      errorCode = 404;
      throw new Error("Nenhum tipo de usuario encontrado encontrado");
    }

    res.status(200).send(user);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
