import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-gray-900 text-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-teal-400">Harsh</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-teal-300 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-gray-800 px-6 pt-4 pb-6 space-y-4 text-lg">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="block w-full hover:text-teal-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
