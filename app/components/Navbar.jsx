import Image from "next/image";
import Link from "next/link";
import Logo from "./hn-logo.png";
import ModulesList from "./ModulesList";
import LogoutBtn from "./LogoutBtn";

export default async function Navbar({ modulName, user }) {
  return (
    <nav className="relative mt-4 mb-8 mx-auto max-w-7xl font-geist-mono">
      <div className="pb-1 flex items-center gap-3">
        <Link href="/">
          <Image
            src={Logo}
            alt="Happy Nerding Logo"
            quality={100}
            width={200}
            className="border-2 border-[#D1D3D6] rounded-full hover:border-gray-200 hover:brightness-90"
            priority
          />
        </Link>
        <Link
          href="/downloads"
          className="px-5 py-1 border border-[#D1D3D6] rounded-full hover:border-gray-400 hover:text-gray-400"
        >
          DOWNLOADS
        </Link>
        <Link
          href="/support"
          className="px-5 py-1 border border-[#D1D3D6] rounded-full hover:border-gray-400 hover:text-gray-400"
        >
          SUPPORT
        </Link>
        <div className="flex items-center justify-end">
          {user && (
            <span className="text-yellow-400 px-5 py-1 border border-[#D1D3D6] rounded-full">
              Hello {user.email}!
            </span>
          )}
          {user && <LogoutBtn />}
        </div>
      </div>

      <h1 className="text-9xl tracking-tighter pb-4 pt-4 mx-auto text-[#dcddde]">
        {modulName ? modulName : "MODULES"}
      </h1>

      <ModulesList />
    </nav>
  );
}
