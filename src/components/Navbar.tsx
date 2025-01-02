"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaSearch, FaTwitterSquare } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg- shadow-sm p-2">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-5xl text-[#48cfad]">TechWorld </h1>

        <div className="hidden md:flex items-center gap-2">
      {/* Social Icons */}
          <Link href="https://www.linkedin.com/in/aliza-moin-b975a6276/">
            <FaLinkedin
              size={36}
              className="rounded-full border-2 border-[#48cfad] text-white p-2 hover:border-[#48cfad] transition-colors duration-300"
            />
          </Link>
          <Link href="https://github.com/aliza-moin18">
            <FaGithub
              size={36}
              className="rounded-full border-2 border-[#48cfad] text-white p-2 hover:border-[#48cfad] transition-colors duration-300"
            />
          </Link>
          <Link href="/">
            <FaTwitterSquare
              size={37}
              className="rounded-full border-2 border-[#48cfad] text-white p-2 hover:border-[#48cfad] transition-colors duration-300"
            />
          </Link>

      {/* Search Input */}
          <div className="flex items-center ml-4">
            <input
              type="text"
              placeholder="Search..."
              className="input-text border-none pl-[20px] rounded-[5px] bg-white text-[#66FCF1] text-[18px] font-outfit"
            />
            <FaSearch className="ml-2 text-[#66FCF1] text-2xl" />
          </div>
        </div>

    {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? '✖️' : '☰'}
        </button>
      </div>

    {/* Mobile Menu (only shown when isMobileMenuOpen is true) */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <Link href="/">
            <FaLinkedin
              size={38}
              className="rounded-full border-2 border-[#48cfad] text-white p-2 hover:border-[#48cfad] transition-colors duration-300"
            />
          </Link>

          <Link href="/">
            <FaGithub
              size={38}
              className="rounded-full border-2 border-[#48cfad] text-white p-2 hover:border-[#48cfad] transition-colors duration-300"
            />
          </Link>

          <Link href="/">
            <FaTwitterSquare
              size={39}
              className="rounded-full border-2 border-[#48cfad] text-white p-2 hover:border-[#48cfad] transition-colors duration-300"
            />
          </Link>

      {/* Search Input for Mobile */}
          <div className="mt-4 w-full">
            <input
              type="text"
              placeholder="Search..."
              className="input-text border-none pl-[20px] rounded-[5px] bg-white text-[#66FCF1] text-[18px] font-outfit w-full"
            />
            <FaSearch className="ml-2 text-[#66FCF1] text-2xl absolute right-4 top-2" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;