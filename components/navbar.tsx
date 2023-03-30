// import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useScroll } from "framer-motion";
// @ts-ignore
import { Link } from "react-scroll";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  // @ts-ignore
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
                <Link
                  to="Onas"
                  smooth={true}
                  offset={-70}
                  className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white"
                >
                  O nas
                </Link>
                <Link
                  to="Uslugi"
                  smooth={true}
                  offset={-70}
                  className=" cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white"
                >
                  Usługi
                </Link>
                <Link
                  to="Rekrutacja"
                  smooth={true}
                  offset={-70}
                  className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white"
                >
                  Rekrutacja
                </Link>
                <Link
                  to="Kontakt"
                  smooth={true}
                  offset={-70}
                  className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white"
                >
                  Kontakt
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
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={isOpen ? "z-30 block" : "z-40 hidden"} id="mobile-menu">
        <div className="z-30 space-y-1 bg-black/50 px-2 pt-2 pb-3 backdrop-blur-xl sm:px-3">
          <Link
            to="Onas"
            smooth={true}
            offset={-70}
            className=" block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white"
          >
            O nas
          </Link>
          <Link
            to="Uslugi"
            smooth={true}
            offset={-70}
            className="block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white"
          >
            Usługi
          </Link>
          <Link
            to="Rekrutacja"
            smooth={true}
            offset={-70}
            className=" block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white"
          >
            Rekrutacja
          </Link>
          <Link
            to="Kontakt"
            smooth={true}
            offset={-70}
            className=" block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
