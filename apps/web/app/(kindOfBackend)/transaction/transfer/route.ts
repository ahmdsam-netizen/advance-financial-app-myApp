import { NEXT_AUTH } from "@repo/auth";
import { prisma } from "@repo/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req : NextRequest){

    const {to , amount} = await req.json()

    // input validation 

    const session = await getServerSession(NEXT_AUTH)

    if(!session){
        return NextResponse.json(
            { 
                success : false ,
                message : "User not authenticated"
            } ,
            { status : 402 }
        )
    }

    await prisma.$transaction(async (tx) => {
        const senderAccount = await tx.account.findFirst({
            where: { ownerId: parseInt(session.user.id) }
        });
        if (!senderAccount || senderAccount.balance < amount) {
            throw new Error("Insufficient balance");
        }
        const receiverUser = await tx.user.findFirst({
            where: { email: to }
        });

        if (!receiverUser) {
            throw new Error("Receiver not found");
        }

        const receiverAccount = await tx.account.findFirst({
            where: { ownerId: receiverUser.id }
        });

        if (!receiverAccount || receiverAccount.id === senderAccount.id) {
            throw new Error("Invalid receiver");
        }

        await tx.account.update({
            where: { ownerId: senderAccount.ownerId },
            data: { balance: { decrement: amount } }
        });

        await tx.account.update({
            where: { ownerId: receiverAccount.ownerId },
            data: { balance: { increment: amount } }
        });

        await tx.transferTransaction.create({
            data: {
                amount,
                fromId: senderAccount.ownerId,
                toId: receiverUser.id,
            }
        });
    });

    return NextResponse.json({
        message : "Hello i am back"
    })
}