"use client"
import { signIn, signOut, useSession } from "next-auth/react"

export function Home({className} : any){
    const session = useSession()
    return (
        <div className={`${className}`}>

            {/* Left Side */}
            <div className="text-lg font-semibold">
                MyApp
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-6">

                {/* User Info */}
                <div className="text-sm text-right">
                    <div className="font-medium">{session.data?.user?.name}</div>
                    <div className="text-gray-400">{session.data?.user?.email}</div>
                </div>

                {/* Sign In Button */}
                <button
                    className="cursor-pointer bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition"
                    onClick={() => (session.data?.user ? signOut() : signIn())}
                >
                    {session.data?.user ? "Logout" : "Login"}
                </button>

            </div>

        </div>
    )
}