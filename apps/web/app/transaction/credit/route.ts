import { prisma } from "@repo/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { NEXT_AUTH } from "@repo/auth";


export async function PUT(req : NextRequest){

    const { amount , provider } = await req.json() 

    // input validation

    const session = await getServerSession(NEXT_AUTH)

    if(!session?.user?.id) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }
    const intId = parseInt(session.user.id) 

    try{
        const result = await prisma.$transaction(async (tx) => {
            const myAccount = await prisma.account.findFirst({
                where : {ownerId : intId}
            })
            if (!myAccount) {
                throw new Error("Account not found")  // throwing inside tx rolls it back
            }

            // const bankResponse = await fetch("http://localhost:3003/credit" , {
            //     method : "POST" , 
            //     headers : {
            //         "Content-Type" : "application/json" 
            //     } ,
            //     body : JSON.stringify({
            //         amount : amount , 
            //         userId : myAcount.ownerId
            //     })
            // }) ;
            // const got = await bankResponse.json() 

            const result = await tx.onRampTransaction.create({
                data : {
                    amount : amount ,
                    status : "Processing" ,
                    token : (Math.random() * 1000).toString() ,
                    provider : provider ,
                    creditId : intId
                }
            })
            console.log(result)
        })
        return NextResponse.json({
            "message" : "Fine"
        } , {status : 200}) 
    }
    catch(error){
        console.log(error)
        return NextResponse.json({} , {status : 500})
    }
}