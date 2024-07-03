import Link from "next/link";
import "./not-found.css"
export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">There was a problem.</h2>
      <p className="text-1xl">We could not find the page you were looking for.</p>
      <p>Go back to the <Link href="/" className="underline">Home</Link>.</p>
    </main>
  )
}