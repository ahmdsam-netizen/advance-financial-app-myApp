export function Withdraw() {
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
          <input
            type="text"
            placeholder="e.g. HDFC"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
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
              placeholder="0.00"
              className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          onClick={() => {}}
          className="mt-2 px-4 py-2 bg-red-600 text-white font-medium rounded-lg shadow-md hover:bg-red-700 active:scale-95 transition"
        >
          Withdraw Money
        </button>
      </div>
    </div>
  )
}