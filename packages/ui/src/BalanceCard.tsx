"use client"
import { useAmount, useTransferStore } from "@repo/store"
import { useEffect } from "react";
import axios from "axios";

export function BalanceCard() {
  const refetchTrigger = useTransferStore((s) => s.refetchTrigger);
  const user = useAmount((s) => s.user);           // ✅ hook at top level
  const setUser = useAmount((s) => s.setUser);     // ✅ hook at top level

  useEffect(() => {
    axios.get("http://localhost:3000/user/myData").then((res) => {
      setUser(res.data.details);
    });
  }, [refetchTrigger]);

  return (
    <div className="max-w-sm p-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl shadow-lg">
      <div className="text-sm opacity-80">
        Current Balance
      </div>
      <div className="text-3xl font-bold mt-2">
        ₹ {user?.balance}
      </div>
      <div className="mt-4 text-sm opacity-80">
        Last updated: {user?.updatedAt
          ? new Date(user.updatedAt).toLocaleString()
          : "—"}
      </div>
    </div>
  );
}