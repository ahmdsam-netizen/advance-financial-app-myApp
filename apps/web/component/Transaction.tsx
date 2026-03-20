"use client"
import { BalanceCard } from "@repo/ui/BalanceCard";
import { Button } from "@repo/ui/button";
import { Deposit } from "@repo/ui/Deposit";
import { DepositHistory } from "@repo/ui/DepositHistory";
import { Withdraw } from "@repo/ui/Withdraw";
import { useState } from "react";

enum TransactionType {
    Deposit = "Deposit" ,
    Withdraw = "Withdraw"
}

export function Transaction (){
    const [position , setPosition] = useState(TransactionType.Deposit)

    return (
        <div className="ml-8 mt-8">

            <div className="font-bold mb-8 text-5xl">
                Transaction
            </div>

            <div className="flex justify-start mb-2 gap-2">

                <Button children="Deposit"  onClick={() => setPosition(TransactionType.Deposit)}/>

                <Button children="Withdraw"  onClick={() => setPosition(TransactionType.Withdraw)}/>

            </div>

            <div className="grid grid-cols-2 gap-6">
                {/* LEFT SIDE — takes 2/3 of width */}
                <div className="col-span-1 ">
                    {position == TransactionType.Deposit && <Deposit />}
                    {position == TransactionType.Withdraw && <Withdraw />}
                </div>
    
                {/* RIGHT SIDE — takes 1/3 of width */}
                <div className="col-span-1 flex flex-col gap-6">
                    <BalanceCard />
                    {position == TransactionType.Deposit && <DepositHistory />}
                </div>
            </div>
            
        </div>
    )
}