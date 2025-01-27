import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe2 } from "lucide-react";
import { TfiMenu } from "react-icons/tfi";
import { FiX } from "react-icons/fi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-opacity-70 backdrop-blur-lg bg-gradient-to-r from-[#0A0D17]/40 to-[#1B1339]/80"
          : "bg-gradient-to-r from-[#0A0D17] to-[#1B1339]"
      }`}
      style={{ height: "72px", padding: "0 1rem" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://astraeus.sentritalabs.com/wp-content/uploads/2024/08/Astraeus-Logo.png"
              alt="Astraeus Next Gen Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Hamburger Icon for Small Screens */}
          <button
            className="text-white text-3xl md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FiX /> : <TfiMenu />}
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {["Home", "Vajra", "Minerva", "Bug Bounty", "Contact"].map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-white relative group hover:text-purple-400 transition-all"
              >
                <span className="relative z-10">{item}</span>
                {/* Line slide animation */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-purple-400 group-hover:w-full transition-all duration-500"></span>
                {/* Gradient shimmer effect */}
                <span className="absolute inset-0 z-0 text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full bg-gradient-to-r from-[#0A0D17] to-[#1B1339] z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "50vw", paddingTop: "1rem" }}
      >
        <div className="flex justify-between items-center px-4">
          <Link
            to="/"
            className="flex items-center space-x-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <Globe2 className="h-10  w-10 text-purple-400" />
          </Link>
        </div>

        <div className="flex flex-col items-start px-6 space-y-6 mt-6">
          {["Home", "Vajra", "Minerva", "Bug Bounty", "Contact"].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase().replace(" ", "-")}`}
              className="text-white relative group hover:text-purple-400 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10">{item}</span>
              {/* Line slide animation */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-purple-400 group-hover:w-full transition-all duration-500"></span>
              {/* Gradient shimmer effect */}
              <span className="absolute inset-0 z-0 text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
