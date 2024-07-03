import React from 'react'
import Navbar from './components/Navbar'
import "./loading.css"


export default function Loading() {
  return (
    <main className='loading'>
      <Navbar />
      <main className='text-center text-xl'>
        <h2>Loading...</h2>
      </main>
    </main>
  )
}
