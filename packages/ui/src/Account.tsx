"use client"
export function Account() {
  const user = {
    id: "USR_847392",
    email: "samcoder@example.com",
  }

  const transactions = [
    { id: "1", type: "deposit", amount: 5000, date: "12 Mar 2026" },
    { id: "2", type: "withdraw", amount: 1200, date: "10 Mar 2026" },
    { id: "3", type: "transfer", amount: 800, date: "08 Mar 2026" },
  ]

  return (
    <div className="p-6 max-w-4xl mx-auto flex flex-col gap-6">
      
      {/* Title */}
      <div className="text-3xl font-bold text-gray-800">
        Account
      </div>

      {/* Account Info */}
      <div className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-3">
        <div>
          <div className="text-sm text-gray-500">User ID</div>
          <div className="font-medium text-gray-800">{user.id}</div>
        </div>

        <div>
          <div className="text-sm text-gray-500">Email</div>
          <div className="font-medium text-gray-800">{user.email}</div>
        </div>

        {/* Demo Button */}
        <button
          onClick={() => alert("Demo: Password update")}
          className="mt-3 w-fit px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Update Password
        </button>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="text-lg font-semibold text-gray-700 mb-4">
          Recent Transactions
        </div>

        <div className="flex flex-col gap-3">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="flex justify-between items-center p-3 border rounded-lg"
            >
              <div>
                <div className="font-medium capitalize">
                  {tx.type}
                </div>
                <div className="text-xs text-gray-500">
                  {tx.date}
                </div>
              </div>

              <div
                className={`font-semibold ${
                  tx.type === "deposit"
                    ? "text-green-600"
                    : tx.type === "withdraw"
                    ? "text-red-600"
                    : "text-blue-600"
                }`}
              >
                ₹ {tx.amount}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}