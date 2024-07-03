import Link from "next/link";
import "./not-found.css"
import Navbar from "./components/Navbar";
export default function NotFound() {

  const modulName = "404"
  return (
    <>

      <Navbar modulName={modulName} />
      <main className="text-center">
        <h2 className="text-3xl">There was a problem.</h2>
        <p className="text-1xl">We could not find the page you were looking for.</p>
        <p>Go back to the <Link href="/" className="underline">Home</Link>.</p>
      </main>
    </>
  )
}