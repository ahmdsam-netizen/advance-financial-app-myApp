import { NEXT_AUTH } from "@repo/auth";
import { prisma } from "@repo/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req : NextRequest){

    const filter = req.nextUrl.searchParams.get("filter") || ""
    
    // input validation

    const session = await getServerSession(NEXT_AUTH)

    if(!session){
        return NextResponse.json(
            { message : "User not authenicated"} ,
            { status : 402 }
        )
    }

    try {
        const users = await prisma.user.findMany({
        where: { AND: [
                { email : {not : session.user.email },},
                { OR: [
                        { id :  Number(filter) || -1 },
                        { email: { startsWith: filter, mode: "insensitive" } },
                    ],
                },
                ],
            },
            select: {
                id: true,
                email: true,
                createdAt: true
            },
        });
        return NextResponse.json(
            {
                message : "Result shows filtered-input users" ,
                usersFound : users
            } ,
            {status : 200}
        )
    } 
    catch (error) {
        return NextResponse.json(
            { message : "Error while fetching data" } ,
            { status : 200 }
        )
    }
}