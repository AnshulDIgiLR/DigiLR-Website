import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar3() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-dark py-2 px-4 z-10 sticky top-0 w-full">
      <div className="flex justify-between items-center">
        {/* Brand */}
        <div className="flex items-center gap-0.5"> 
            <img src="./DigiLR LOGO.jpg" alt="ahdfajk" className="w-10" />
          <a className="text-white text-xl font-bold" href="home">
            DigiLR
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none bg-dark p-0"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop & Mobile Menu */}
        <div
          className={`flex flex-col lg:flex-row lg:items-center lg:gap-10 absolute lg:relative top-12 px-4 md:top-0 md:px-0 left-0 w-full lg:w-auto bg-dark lg:bg-transparent transition-all duration-300 ${
            menuOpen ? "block" : "hidden lg:flex"
          }`}
        >
          <Link
            className="cursor-pointer text-white py-2 lg:py-0"
            to="home"
            spy={true}
            smooth={true}
            duration={300}
            offset={0}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            className="cursor-pointer text-white py-2 lg:py-0"
            to="features"
            spy={true}
            smooth={true}
            duration={300}
            offset={0}
            onClick={() => setMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            className="cursor-pointer text-white py-2 lg:py-0"
            to="about"
            spy={true}
            smooth={true}
            duration={300}
            offset={0}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          {/* Dropdown for "Use Cases" */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center text-white bg-dark border-0 px-0 py-2 lg:py-0"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Use Cases <ChevronDown size={16} className="ml-1" />
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-dark rounded shadow-lg">
                <a
                  href="#"
                  className="block px-4 py-2 text-white"
                  onClick={() => {
                    setDropdownOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  Due Diligence
                </a>
              </div>
            )}
          </div>

          <Link
            className="cursor-pointer text-white py-2 lg:py-0"
            to="contact"
            spy={true}
            smooth={true}
            duration={300}
            offset={0}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>

        {/* Call-to-Action Button (Hidden in Mobile Menu) */}
        <div className="hidden lg:block">
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
