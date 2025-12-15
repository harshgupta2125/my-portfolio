import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Portfolio", to: "portfolio" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-5xl bg-surface/80 dark:bg-surface-dark/80 backdrop-blur-md text-text-main dark:text-text-main-dark rounded-full px-6 py-3 shadow-md border border-text-main/10 dark:border-text-main-dark/10">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-lg font-serif font-semibold text-primary dark:text-primary-dark">Harsh.dev</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                smooth={true}
                spy={true}
                offset={-96}
                duration={500}
                activeClass="text-primary dark:text-primary-dark font-semibold"
                className="cursor-pointer hover:text-primary dark:hover:text-primary-dark transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden text-2xl cursor-pointer text-text-main dark:text-text-main-dark" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-4 md:hidden bg-surface/90 dark:bg-surface-dark/90 rounded-xl py-4 px-6 space-y-4 shadow-lg backdrop-blur-sm border border-text-main/10 dark:border-text-main-dark/10">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              spy={true}
              offset={-96}
              duration={500}
              onClick={() => setMenuOpen(false)}
              activeClass="text-primary dark:text-primary-dark font-semibold"
              className="block text-center text-text-main dark:text-text-main-dark hover:text-primary dark:hover:text-primary-dark transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
