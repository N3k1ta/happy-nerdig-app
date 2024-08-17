import React from 'react'
import Navbar from './components/Navbar'

export default function Loading() {
  return (
    <main className="relative mt-4 mb-8 mx-auto max-w-7xl font-geist-mono">
      <Navbar />
      <div className="text-center text-xl">
        <h2>Loading...</h2>
      </div>
    </main>
  )
}
