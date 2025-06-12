import { z } from "zod";
import { IUser } from "@models/user"

export class VerifyData {
   
    verify_user(user: IUser){
        const schema = z.object({
            name: z.string().max(50),
            email: z.string().email().max(25),
            password: z.string().min(6)
        })

        return schema.parse(user)
    }

   verify_id(id: string) {
        const schema = z.object({
             id: z.string() 
        })
        
        return schema.parse({ id })
    }
}