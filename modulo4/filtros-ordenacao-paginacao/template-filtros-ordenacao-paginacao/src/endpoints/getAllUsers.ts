import { Request, Response } from "express"
import selectAllUsers from "../data/query"
import { users } from "../types"

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
   try {
      const users:users[] = await selectAllUsers()
      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found")
      }
      res.status(200).send(users)
   } catch (error:any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}
 
