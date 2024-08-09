"use client";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import LoginForm from "./LoginForm";
import { useRouter } from "next/navigation";

import "./AdminLogin.css";

export default function AdminLogin() {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    setError('');
    const supabase = createClientComponentClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error) {
      setError(error.message);
    } else {
      console.log("Login successful:", data);
      router.push('/admin');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      {error && (
        <div className="border border-red-500 rounded-lg h-fit w-fit p-5 mb-1">
          <div className="text-red-500">{error}</div>
        </div>
      )}
      <div className="flex items-center justify-center">
        <LoginForm handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
