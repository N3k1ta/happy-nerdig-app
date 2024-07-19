"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminLogin({ handleSubmit }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()


return (
  <div className="flex items-center justify-center min-h-screen">

    <form className="form-container justify-center border rounded-lg w-fit h-fit p-4"
      onSubmit={(e) => handleSubmit(e, email, password)}>
      <div className="flex justify-center">
        <h1>Hello </h1>
      </div>
      <div className="flex items-center m-4">
        <label className="mr-2 w-20">Email:</label>
        <input
          className="bg-black text-white border rounded-sm flex-1"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

      </div>
      <div className="flex items-center m-4">
        <label className="mr-2 w-20">Password:</label>
        <input
          className="bg-black text-white border rounded-sm flex-1"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="flex justify-center">
        <button type="submit" className="btn ">Login</button>
      </div>
      {error && <p className="text-yellow-300 flex justify-center m-2 error">{error}</p>}
    </form>
  </div>
)
}
