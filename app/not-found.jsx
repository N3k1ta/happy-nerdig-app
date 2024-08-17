import Link from "next/link";
import Navbar from "./components/Navbar";

export default function NotFound() {
  const modulName = "404";

  return (
    <>
      <Navbar modulName={modulName} />
      <main className="text-center mt-56">
        <h2 className="text-3xl text-gray-300 mb-5 font-geist-mono">There was a problem.</h2>
        <p className="text-xl text-gray-300 mb-5 font-geist-mono">We could not find the page you were looking for.</p>
        <p className="font-geist-mono text-2xl underline hover:text-white cursor-pointer">
          Go back to the <Link href="/">Home</Link>.
        </p>
      </main>
    </>
  );
}
