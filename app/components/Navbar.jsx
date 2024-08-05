
import Image from "next/image";
import Link from "next/link";
import Logo from "./hn-logo.png"
import ModulesList from "./ModulesList";
import "./Navbar.css"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import LogoutBtn from "./LogoutBtn";

export default async function Navbar({ modulName, user }) {
  // const supabase = createServerComponentClient({ cookies })
  // const { data } = await supabase.auth.getSession()


  return (
    <nav >
      <div className="nav-menu">
        <Link href={'/'}>
          <Image

            src={Logo}
            alt="Happy Nerding Logo"
            quality={100}
            width={200}
            className="logo"
            priority
          />
        </Link>
        <Link href={'/downloads'} className="btn">DOWNLOADS</Link>
        <Link href={'/support'} className="btn">SUPPORT</Link>
        <div className="user-info flex items-center justify-end" >
          {user && <span className="btn text-yellow-400">Hello {user.email}!</span>}
          {user && <LogoutBtn />}
        </div>
      </div>

      <h1>{modulName ? modulName : 'MODULES'}</h1>

      <ModulesList />
    </nav>

  )
}
