"use client"
import axios from "axios"
import { useEffect, useState } from "react"

export function DepositHistory() {
    const [transactions , setTransactions] = useState(null)
    useEffect(() => {
        async function loader(){
            const allHistory = await axios.get("http://localhost:3000/transaction/deposit-history")
            setTransactions(allHistory.data.depositHistory)
        }
        loader()
    } , [])
    
    return (
    <div className="space-y-3 w-full">
        <div className="text-3xl font-bold">Transaction History :</div>

        {transactions && transactions.length === 0 && (
            <p className="text-gray-500 text-sm">No transactions found.</p>
        )}

        {transactions && transactions.slice(transactions.length-4 , transactions.length).map((item: any) => (
            <button
                key={item.id}
                onClick={() => alert(`Transaction ID: ${item.id}\nStatus: ${item.status}\nProvider: ${item.provider}\nAmount: ₹${item.amount}`)}
                className="w-full flex justify-between items-center bg-white border border-gray-200 rounded-xl shadow-sm px-5 py-4 hover:bg-gray-300 transition-colors duration-200 cursor-pointer"
            >
                <div className="text-left">
                    <p className="text-sm text-gray-500">Status</p>
                    <p className="text-base font-semibold text-gray-800">{item.status}</p>
                </div>
                <div className="text-left">
                    <p className="text-sm text-gray-500">Provider</p>
                    <p className="text-base font-semibold text-gray-800">{item.provider}</p>
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