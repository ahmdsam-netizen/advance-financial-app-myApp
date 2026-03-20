"use client"
import { useAmount } from "@repo/store"

export function BalanceCard() {
  const amount = useAmount((state) => state.user)
  console.log("before")
  console.log(amount)
  console.log("after")
  return (
    <div className="max-w-sm p-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl shadow-lg">
      
      {/* Label */}
      <div className="text-sm opacity-80">
        Current Balance
      </div>

      {/* Amount */}
      <div className="text-3xl font-bold mt-2">
        ₹ {amount?.balance}
      </div>

      {/* Footer */}
      <div className="mt-4 text-sm opacity-80">
        Last updated: {amount?.updatedAt.toLocaleString()}
      </div>

    </div>
  )
}