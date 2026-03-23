import { NEXT_AUTH } from "@repo/auth"
import { prisma } from "@repo/db"
import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req : NextRequest){

    const { newPassword } = await req.json()

    // input validation 

    const session = await getServerSession(NEXT_AUTH)

    await prisma.user.update({
        where : { email : session.user.id} , 
        data : { password : newPassword }
    })

    return NextResponse.json(
        { message : "Password has been updated successfully"} ,
        { status : 200 }
    )
}