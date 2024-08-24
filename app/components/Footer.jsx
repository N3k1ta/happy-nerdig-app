import { FaInstagram, FaYoutube, FaFacebook, FaTh } from 'react-icons/fa';
import Link from "next/link";


export default function Footer() {
  return (
    <>
      <div className="footer-main border-t flex justify-center mt-32 mx-auto max-w-7xl">
        <div className="footer-icons justify-center gap-4 inline-flex p-4">
          <Link href="https://www.instagram.com/happynerding/" target="_blank" aria-label="Instagram" title="Instagram">
            <FaInstagram size={24} />
          </Link>
          <Link href="https://www.youtube.com/@happynerding4369" target="_blank" aria-label="YouTube" title="YouTube">
            <FaYoutube size={24} />
          </Link>
          <Link href="https://www.facebook.com/HappyNerding/" target="_blank" aria-label="Facebook" title="Facebook">
            <FaFacebook size={24} />
          </Link>
          <Link href="https://modulargrid.net/d/vendors/view/223/" target="_blank" aria-label="Modular Grid" title="Modular Grid">
            <FaTh size={24} />
          </Link>
        </div>
      </div>

      <div className="footer-copyright-container flex justify-between items-center mx-auto max-w-7xl p-2">
        <div className="footer-copyright text-sm">
          © 2024 Happy Nerding. All Rights Reserved.
        </div>
        <p className="text-sm">Website Design by Maksim Mart & Nikita Budash</p>
      </div>

    </>
  )
}
