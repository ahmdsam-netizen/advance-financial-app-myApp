import { NEXT_AUTH } from "@repo/auth";
import { prisma } from "@repo/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


export async function PUT(req : NextRequest , res : NextResponse){
    
    const { amount , provider } = await req.json() 

    // input validation 

    const session = await getServerSession(NEXT_AUTH)
    
    const result = await prisma.$transaction(async (tx) => {

        const myAcount = await prisma.account.findFirst({
            where : {ownerId : session.user.id}
        })

        if(!myAcount || myAcount.balance < amount) return res.json() 
        
        await prisma.offRampTransaction.create({
            data : {
                status : "Processing" ,
                token : "something" ,
                provider : provider ,
                amount : amount , 
                withdrawId : myAcount.ownerId
            }
        })

        // tell bank to credit amount money to user account

    })
    return res.json() 
}