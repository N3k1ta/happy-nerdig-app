import Image from "next/image";
import Link from "next/link";
import Logo from "./hn-logo-3.svg";
import Logo1 from "./hn-logo-1.svg"
import ModulesList from "./ModulesList";
import LogoutBtn from "./LogoutBtn";

export default async function Navbar({ modulName, user }) {
  return (
    <>
      <nav className="relative mt-4 mb-8 font-geist-mono">

        <div className=" inline-flex items-center gap-3 ">
          <Link href="/" >
            <Image
              src={Logo}
              quality={100}
              width={200}
              height={100}
              className="border-2 border-[#D1D3D6] rounded-full hover:border-gray-200 hover:brightness-90 bg-[#D1D3D6] 
    w-[150px] h-[25px]  // Default size for mobile or smaller screens
    sm:w-[200px] sm:h-[34px]  // Small screens
    md:w-[200px] md:h-[34px]  // Medium screens
    lg:w-[200px] lg:h-[34px]  // Larger screens"
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
        <div className=" w-fit flex ">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter pb-4 pt-4 text-[#dcddde]">
            {modulName ? modulName : "MODULES"}
          </h1>
        </div>
        <ModulesList />
      </nav>
    </>
  );

}
