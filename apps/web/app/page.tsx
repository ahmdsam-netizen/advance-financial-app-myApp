"use client"
import { JSX, useEffect } from "react"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

// Remember you have placed .env file at the wrong place that cause how much of your time 

export default function Home():JSX.Element   {
  const session = useSession() 

  if(session.status != "authenticated"){
    redirect("/api/auth/signin")
  } else {
    redirect("/home-page")
  }
}
