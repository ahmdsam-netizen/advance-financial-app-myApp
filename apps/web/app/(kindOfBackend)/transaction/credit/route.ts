import { prisma } from "@repo/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { NEXT_AUTH } from "@repo/auth";


export async function PUT(req : NextRequest){

    const { amount , provider } = await req.json() 

    // input validation

    if(parseInt(amount) <= 0) return NextResponse.json({message : "Amount is less than expected"} , {status : 411})

    const session = await getServerSession(NEXT_AUTH)

    if(!session?.user?.id) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }
    const intId = parseInt(session.user.id) 

    try{
        await prisma.$transaction(async (tx) => {
            const myAccount = await tx.account.findFirst({
                where : {ownerId : intId}
            })

            if (!myAccount) throw new Error("Account not found")

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

            await tx.onRampTransaction.create({
                data : {
                    amount : amount ,
                    status : "Processing" ,
                    token : (Math.random() * 1000).toString() ,
                    provider : provider ,
                    creditId : intId
                }
            })
        })
        return NextResponse.json({
            "message" : "Fine"
        } , {status : 200}) 
    }
    catch(error){
        return NextResponse.json({message : "Something went wrong"} , {status : 500})
    }
}