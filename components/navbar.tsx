import { useState } from "react";
import { useSession } from "next-auth/react";
import { useScroll } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  const scrolled = useScroll(50);

  return (
    <nav
      className={`fixed top-0 w-full  ${
        scrolled ? " bg-black/50 backdrop-blur-xl" : "bg-black/0"
      } z-30`}
    >
      <div className="max-w-8xl mx-auto p-4 sm:px-6 lg:px-8">
        <div className="flex h-16 w-full items-center justify-between">
          <div className="flex w-full items-center justify-between">
            <div className="flex-shrink-0">
              <img
                src="logo.svg"
                className="mr-3 h-9 sm:h-9"
                alt="Deeptechlabs Logo"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="#Onas" passHref>
                  <a className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">
                    O nas
                  </a>
                </Link>
                <Link href="#Uslugi" passHref>
                  <a className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">
                    Usługi
                  </a>
                </Link>
                <Link href="#Rekrutacja" passHref>
                  <a className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">
                    Rekrutacja
                  </a>
                </Link>
                <Link href="#Kontakt" passHref>
                  <a className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">
                    Kontakt
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md  p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-controls="mobile-menu"
              aria-expanded="false"
            ></button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
