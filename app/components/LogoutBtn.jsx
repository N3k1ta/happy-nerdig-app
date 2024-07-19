"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"


export default function LogoutBtn() {

  const router = useRouter()

  const handleLogout = async () => {


    const supabase = createClientComponentClient()
    const { error } = await supabase.auth.signOut()

    if (!error) {
      router.push('/')
    }
    if (error) {
      console.log(error)
    }
  }


  return (
    <button className="btn" onClick={handleLogout}>Logout</button>
  )
}
