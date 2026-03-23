"use client"
import { signIn } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SigninPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  async function handleSignin() {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false
    })

    if (res?.error) {
      setError("Invalid email or password")
      return
    }

    router.push("/home-page")
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 bg-white rounded-xl shadow-md w-full max-w-sm flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Sign In</h1>

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
          onClick={handleSignin}
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Sign In
        </button>

        <p className="text-sm text-center">
          No account?{" "}
          <a href="/signup" className="text-green-500 underline">Sign up</a>
        </p>
      </div>
    </div>
  )
}