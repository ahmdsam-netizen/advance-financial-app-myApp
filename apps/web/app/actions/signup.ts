"use server"
import { prisma } from "@repo/db"

export async function signup(email : string , password : string){

    // Input validation 

    // bcryt of password

    try {
        await prisma.$transaction(async (tx) => {
            const customer = await tx.user.create({
                data : {
                    email ,
                    password
                }
            })
            const customerAccount = await tx.account.create({
                data : {
                    balance : Math.random() * 1000 + 1 ,
                    ownerId : customer.id 
                }
            })
        })
        return {success : true}
    } 
    catch (error : any) {
        if(error.code == "P2002") return {success : false , message : "Email already exists"}
        return {success : false , message : "Something went wrong"}
    }
}