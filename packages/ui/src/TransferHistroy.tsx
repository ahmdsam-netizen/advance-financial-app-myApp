"use client"
import { useTransferStore } from "@repo/store"
import axios from "axios"
import { useEffect, useState } from "react"

export function TransferHistory() {
    const [transactions , setTransactions] = useState(null)
    const historyUpdate = useTransferStore(s => s.refetchTrigger)
    useEffect(() => {
        async function loader(){
            const allHistory = await axios.get("http://localhost:3000/transaction/transfer-history")
            setTransactions(allHistory.data.transactionHistory)
        }
        loader()
    } , [historyUpdate])
    
    return (
    <div className="space-y-3 w-full">
        <div className="text-3xl font-bold">Transaction History :</div>

        {transactions && transactions.length === 0 && (
            <p className="text-gray-500 text-sm">No transactions found.</p>
        )}

        {transactions && transactions.slice(transactions.length - 5 , transactions.length).map((item: any) => (
            <button
                key={item.id}
                onClick={() => alert(`Transaction ID: ${item.id}\nFrom: ${item.fromId}\nTo: ${item.toId}\nAmount: ₹${item.amount}`)}
                className="w-full flex justify-between items-center bg-white border border-gray-200 rounded-xl shadow-sm px-5 py-4 hover:bg-gray-300 transition-colors duration-200 cursor-pointer"
            >
                <div className="text-left">
                    <p className="text-sm text-gray-500">To</p>
                    <p className="text-base font-semibold text-gray-800">{item.toId}</p>
                </div>
                <div className="text-left">
                    <p className="text-sm text-gray-500">From</p>
                    <p className="text-base font-semibold text-gray-800">{item.fromId}</p>
                </div>
                <div className="text-right">
                    <p className="text-sm text-gray-500">Amount</p>
                    <p className="text-lg font-bold text-green-600">₹ {item.amount}</p>
                </div>
            </button>
        ))}
    </div>
)
}