import { NEXT_AUTH } from "@repo/auth";
import { prisma } from "@repo/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req : NextRequest){

    const session = await getServerSession(NEXT_AUTH) 

    const getProfile = await prisma.user.findFirst({
        where : {id : parseInt(session.user.id)}
    })
    const getAccount = await prisma.account.findFirst({
        where : {ownerId : getProfile?.id}
    })
    
    return NextResponse.json(
        {
            details : {
                updatedAt : getProfile?.updatedAt ,
                balance : getAccount?.balance
            } ,
        } , 
        {status : 200}
    )
}
