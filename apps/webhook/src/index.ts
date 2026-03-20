import { prisma } from "@repo/db";
import express from "express" 

const app = express() ;

app.post("/bankHitCredit" , async (req , res) => {
    const paymentDetail = {
        token : req.body.token ,
        amount : req.body.amount ,
        id : req.body.id 
    }

    // input validation 

    try {
        const result = await prisma.account.update({
            where : {ownerId : parseInt(paymentDetail.id)} , 
            data : {balance : {increment : paymentDetail.amount}}
        })

        await prisma.onRampTransaction.update({
            where : {token : paymentDetail.token} ,
            data : {status : "Succeed" ,}
        })
        return res.status(200).json()
    } 
    catch (error) {
        await prisma.onRampTransaction.update({
            where : {token : paymentDetail.token} ,
            data : {status : "Failed"}
        })
        return res.status(500).json()
    }
})

app.listen(3003 , () => {
    console.log("Machine is running")
})