import { BalanceCard } from "@repo/ui/BalanceCard"
import { SentMoney } from "./SentCard"
import { TransferHistory } from "@repo/ui/TransferHistroy"
import { getServerSession } from "next-auth"
import { NEXT_AUTH } from "@repo/auth"
import { redirect } from "next/navigation"

export async function Transfer() {
    const session = await getServerSession(NEXT_AUTH) 
    
    if(!session?.user){
        redirect("/api/auth/signin")
    }
    
    return (
        <div className="w-full min-h-screen p-6">
            <div className="text-4xl font-bold mb-6">
                Transfer Money :
            </div>

            <div className="grid grid-cols-2 gap-6">
                {/* LEFT SIDE — takes 2/3 of width */}
                <div className="col-span-1 ">
                    <SentMoney />
                </div>

                {/* RIGHT SIDE — takes 1/3 of width */}
                <div className="col-span-1 flex flex-col gap-6">
                    <BalanceCard />
                    <TransferHistory />
                </div>
            </div>
        </div>
    )
}