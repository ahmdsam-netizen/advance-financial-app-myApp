"use client"
import { useTransferStore, useAmount } from "@repo/store"
import axios from "axios"
import { useState } from "react"

export function SentMoney() {

  const [user , setUser] = useState("")
  const [amount , setAmount] = useState(0) 
  const [response , setResponse] = useState(null)
  const updateUser = useAmount(state => state.setUser)
  const useButton = useTransferStore((s) => s.triggerRefetch)

  return (
    <div className="max-w-md  p-6 bg-white rounded-xl shadow-md flex flex-col gap-4">
      
      {/* Title */}
      <div className="text-lg font-semibold text-gray-700">
        Transfer Money
      </div>

      {/* Receiver Email */}
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">
          Receiver Email
        </label>
        <input
          type="email"
          placeholder="xyz@gmail.com"
          onChange={(e) => setUser(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Amount */}
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">
          Amount
        </label>
        <div className="relative">
          <span className="absolute left-3 top-2.5 text-gray-500">₹</span>
          <input
            type="number"
            required
            placeholder="0.00"
            onChange={(e) => setAmount(parseInt(e.target.value))}
            className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
      

      {/* Button */}
      <button
        onClick={async () => {
          try {
            /// Sending two request one to transfer money other one to update user details
            let result = await axios.post("http://localhost:3000/transaction/transfer", {
              to: user,
              amount: amount
            });
            setResponse(result.data.message);
            result = await axios.get("http://localhost:3000/user/myData")
            updateUser(result.data.details)
            useButton()
          } 
          catch (err: any) {
            setResponse(err.response?.data?.message || "Something went wrong");
          }
        }}
        className="mt-2 px-4 py-2 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 active:scale-95 transition"
      >
        Send Money
      </button>

      {response && 
        <div>{response}</div>
      }

    </div>
  )
}