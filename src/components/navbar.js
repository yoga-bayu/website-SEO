import React, { useState } from "react"
import { Link } from "gatsby"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-3 py-5 rounded-md">
        <div className="flex items-center justify-between h-16">
          {/* Bagian tengah navbar */}
          <div className="w-full flex justify-center">
            <div className="hidden md:flex space-x-8">
              <Link
                className="relative after:rounded after:bg-purple after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-black opacity-80 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-montserrat"
                to="/"
              >
                Home
              </Link>
              <Link
                className="relative after:rounded after:bg-purple after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-black opacity-80 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-montserrat"
                to="/about"
              >
                About
              </Link>
              <Link
                className="relative after:rounded after:bg-purple after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-black opacity-80 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-montserrat"
                to="/gallery"
              >
                Gallery
              </Link>
              <Link
                className="relative after:rounded after:bg-purple after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-black opacity-80 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-montserrat"
                to="/blog"
              >
                Blog
              </Link>
              <Link
                className="relative after:rounded after:bg-purple after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-black opacity-80 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-montserrat"
                to="/contact"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Tombol Menu Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="text-gray-800 hover:text-black inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <svg
                width="24"
                height="24"
                fill="black"
                className="h-8 w-8"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {openMenu && (
        <div className="md:hidden transition duration-500 ease-in-out">
          <div className="pt-2 pb-3 space-y-1 text-center">
            <a
              className="block text-black opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-base font-medium font-montserrat"
              href="/"
            >
              Home
            </a>
            <a
              className="block text-black opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-base font-medium font-montserrat"
              href="/about"
            >
              About
            </a>
            <a
              className="block text-black opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-base font-medium font-montserrat"
              href="/gallery"
            >
              Gallery
            </a>
            <a
              className="block text-black opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-base font-medium font-montserrat"
              href="/blog"
            >
              Blog
            </a>
            <a
              className="block text-black opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-base font-medium font-montserrat"
              href="/contact"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
