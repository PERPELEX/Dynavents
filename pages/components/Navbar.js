import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu on navigation
  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 md:py-6 transition-colors duration-300 ${
        menuOpen
          ? "bg-gray-900 shadow-lg"
          : isScrolled
          ? "bg-gray-900 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <h1 className="text-2xl sm:text-3xl font-[1000] text-yellow-500 bg-white px-4 sm:px-6 py-2 rounded-full">
        DYNAVENTS
      </h1>
      {/* Desktop Nav */}
      <ul className="hidden md:flex justify-between items-center space-x-8 lg:space-x-20 text-lg lg:text-xl font-bold text-white">
        <li className="relative group">
          <Link href="#home" className="transition-colors duration-200">
            Home
          </Link>
          <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <Link href="#events" className="transition-colors duration-200">
            Events
          </Link>
          <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <Link href="#contact" className="transition-colors duration-200">
            Contact
          </Link>
          <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
      </ul>
      <div className="hidden md:flex gap-2 lg:gap-4">
        <button className="px-3 py-2 lg:px-4 lg:py-2 rounded font-bold text-yellow-500 hover:bg-white shadow-2xl border-2 hover:border-transparent bg-transparent border-yellow-500 transition-all ease-in-out duration-200">
          Sign In
        </button>
        <button className="px-3 py-2 lg:px-4 lg:py-2 rounded font-bold bg-yellow-500 text-white shadow-2xl hover:bg-white hover:text-yellow-500 transition-all ease-in-out duration-200">
          Sign Up
        </button>
      </div>
      {/* Hamburger Icon */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span
          className={`block h-1 w-6 bg-yellow-500 rounded transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-6 bg-yellow-500 rounded my-1 transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-6 bg-yellow-500 rounded transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>
      {/* Mobile Menu with animation and hover effect */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-gray-900 shadow-lg flex flex-col items-center py-6 space-y-4 z-50 transition-all duration-300 ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{ willChange: "opacity, transform" }}
      >
        <Link
          href="#home"
          className="text-white text-lg font-bold px-4 py-2 rounded transition-colors duration-200  hover:text-yellow-500"
          onClick={handleNavClick}
        >
          Home
        </Link>
        <Link
          href="#events"
          className="text-white text-lg font-bold px-4 py-2 rounded transition-colors duration-200  hover:text-yellow-500"
          onClick={handleNavClick}
        >
          Events
        </Link>
        <Link
          href="#contact"
          className="text-white text-lg font-bold px-4 py-2 rounded transition-colors duration-200  hover:text-yellow-500"
          onClick={handleNavClick}
        >
          Contact
        </Link>
        <div className="flex gap-2 pt-2">
          <button className="px-3 py-2 rounded font-bold text-yellow-500 hover:bg-white shadow-2xl border-2 hover:border-transparent bg-transparent border-yellow-500 transition-all ease-in-out duration-200">
            Sign In
          </button>
          <button className="px-3 py-2 rounded font-bold bg-yellow-500 text-white shadow-2xl hover:bg-white hover:text-yellow-500 transition-all ease-in-out duration-200">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
