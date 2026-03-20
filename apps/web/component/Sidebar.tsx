"use client"
import { Button } from "@repo/ui/button"
import {useRouter} from "next/navigation"

export function Sidebar({className , name , path} : any){
    const router = useRouter()
    return (
        <div className={`${className}`}>
            <Button 
                children={name} 
                onClick={() => router.push(path)}/>
        </div> 
    )
}