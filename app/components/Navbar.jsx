
import Image from "next/image";
import Link from "next/link";
import Logo from "./hn-logo.png"
import ModulesList from "./ModulesList";
import "./Navbar.css"

export default function Navbar({modulName}) {


  return (
    <nav >
      <div className="nav-menu">
        <Link href={'/'}>
          <Image
            src={Logo}
            alt="Happy Nerding Logo"
            quality={100}
            width={210}
            className="logo"
            priority
          />
        </Link>
        <Link href={'/downloads'} className="btn">DOWNLOADS</Link>
        <Link href={'/support'} className="btn">SUPPORT</Link>
      </div>

      <h1>{modulName ? modulName : 'MODULES'}</h1>

      <ModulesList />
    </nav>

  )
}
