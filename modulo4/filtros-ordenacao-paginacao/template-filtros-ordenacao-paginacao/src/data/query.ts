import { connection } from "./connection";

export const selectAllUsers = async (): Promise<any> => {
  const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `);
  return result[0];
};

export const selectUserByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
   SELECT id, name, email, type
   FROM aula48_exercicio 
   WHERE name = "${name}"
   ;
`);
  return result[0];
};

export const selectUserByType = async (type: string): Promise<any> => {
  const result = await connection.raw(`
   SELECT id, name, email, type
   FROM aula48_exercicio 
   WHERE type = "${type}";
   ;
`);
  return result[0];
};
