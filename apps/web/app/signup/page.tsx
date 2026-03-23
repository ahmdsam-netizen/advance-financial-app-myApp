// apps/user-app/app/signup/page.tsx
"use client"
import { useState } from "react"
import { signup } from "../actions/signup"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  async function handleSignup() {
    try {
      await signup(email, password)       // 1. create account
      await signIn("credentials", {       // 2. auto login after signup
        email,
        password,
        redirect: false
      })
      router.push("/home-page")           // 3. redirect
    } catch (err: any) {
      setError(err.message)               // 4. show error to user
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 bg-white rounded-xl shadow-md w-full max-w-sm flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Create Account</h1>

        {error && <div className="text-red-500 text-sm">{error}</div>}

        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          onClick={handleSignup}
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Sign Up
        </button>

        <p className="text-sm text-center">
          Already have an account?{" "}
          <a href="/api/auth/signin" className="text-green-500 underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  )
}