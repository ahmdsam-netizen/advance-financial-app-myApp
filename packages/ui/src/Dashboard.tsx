"use client"
import axios from "axios"
import { useEffect } from "react"
import { useAmount } from "@repo/store"

export function Dashboard(){
    const setAmount = useAmount((state) => state.setUser)
    useEffect(() => {
        async function loader(){
            const result = await axios.get("http://localhost:3000/user/myData")
            setAmount(result.data.details) 
        }
        loader() 
    } , [])
    return (
        <div>
            Hello from Dashboard
        </div>
    )
}