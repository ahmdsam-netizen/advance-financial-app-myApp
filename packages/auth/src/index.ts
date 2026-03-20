import NextAuth from "next-auth";
import {NEXT_AUTH} from "./auth"

export const handlers = NextAuth(NEXT_AUTH);

// Re-export types so apps don't need to import next-auth directly
export type { Session } from "next-auth";