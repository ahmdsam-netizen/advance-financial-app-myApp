import { NEXT_AUTH } from "@repo/auth"
import NextAuth from "next-auth"

const handlers = NextAuth(NEXT_AUTH) 

export { handlers as GET , handlers as POST }