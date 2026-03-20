import { NEXT_AUTH } from "@repo/auth";
import { prisma } from "@repo/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req : NextRequest){

    const session = await getServerSession(NEXT_AUTH)

    if(!session) {
        return NextResponse.json(
            { message : "User not authenicated"} ,
            { status : 401 }
        )
    }
    const intId = parseInt(session.user.id)
    try {
        const depositList = await prisma.transferTransaction.findMany({
            where : {
                OR : [
                    {fromId : intId} ,
                    {toId : intId}
                ]
            }
        })
        return NextResponse.json(
            {
                message : "Transaction history without pagination" ,
                transactionHistory : depositList  
            } ,
            { status : 200 }
        )
    } 
    catch (error) {
        console.log("eror")
        return NextResponse.json(
            { message : "Error while fetching data" } , 
            { status : 500 }
        )
    }
}