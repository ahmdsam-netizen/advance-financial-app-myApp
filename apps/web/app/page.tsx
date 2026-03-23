import { JSX } from "react"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

// Remember you have placed .env file at the wrong place that cause how much of your time 

export default function Home():JSX.Element   {
  // const session = useSession() 

  console.log("why here session is undefined -- session must be defined ?")
  // console.log(session)

  // i'm already using middleware then there is no need to check this path 
  redirect("/home-page")
}
