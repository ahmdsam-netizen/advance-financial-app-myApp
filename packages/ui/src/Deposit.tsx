"use client"
import axios from "axios"
import { useState } from "react"

export function Deposit() {
  const [amount , setAmount] = useState(0) ;
  const [provider , setProvider] = useState("hdfc")
  return (
    <div className="grid grid-cols-6 gap-6 p-6 bg-white rounded-xl shadow-md max-w-3xl">
      
      {/* LEFT: Payment Method */}
      <div className="col-span-2 flex flex-col gap-3 border-r pr-4">
        <div className="font-semibold text-gray-700">
          Payment Method
        </div>

        <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition text-left">
          Netbanking
        </button>

        <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition text-left">
          UPI
        </button>
      </div>

      {/* RIGHT: Form */}
      <div className="col-span-4 flex flex-col gap-4">
        
        {/* Provider */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">
            Provider
          </label>
          <select 
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            name="provider"
            onChange={(e) => setProvider(e.target.value)}>
            <option value="HDFC">HDFC</option>
            <option value="Axis Bank">Axis Bank</option>
            <option value="SBI">SBI</option>
          </select>
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
              onChange={(e) => setAmount(parseInt(e.target.value))}
              placeholder="0.00"
              className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          onClick={ async () => {
            const result = await axios.put("http://localhost:3000/transaction/credit" , {
              amount : amount , 
              provider : provider 
            }) 
          }}
          className="mt-2 px-4 py-2 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 active:scale-95 transition"
        >
          Deposit Money
        </button>
      </div>
    </div>
  )
}