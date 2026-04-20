import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Achievements", to: "achievements" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-0 right-0 z-50 w-fit mx-auto bg-surface/85 dark:bg-surface-dark/85 backdrop-blur-xl text-text-main dark:text-text-main-dark rounded-full px-2 sm:px-4 lg:px-6 py-2 lg:py-3 shadow-lg border-2 border-primary/20 dark:border-primary-dark/20 hover:border-primary/40 dark:hover:border-primary-dark/40 transition-all"
    >
      <div className="flex items-center justify-center gap-2 sm:gap-4 lg:gap-6 w-full">
        {/* Logo */}
        <h1 className="text-xs lg:text-base font-serif font-semibold text-primary dark:text-primary-dark cursor-pointer flex items-center gap-0.5 whitespace-nowrap flex-shrink-0">
          <span className="text-[10px]">$</span> <span className="hidden sm:inline">harsh</span><span className="sm:hidden">H</span>.dev
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex gap-4 lg:gap-6 text-xs lg:text-sm">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                smooth={true}
                spy={true}
                offset={-96}
                duration={500}
                activeClass="text-primary dark:text-primary-dark font-semibold"
                className="cursor-pointer hover:text-primary dark:hover:text-primary-dark transition font-mono whitespace-nowrap"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div
          className="sm:hidden text-lg cursor-pointer text-text-main dark:text-text-main-dark flex-shrink-0"
          onClick={() => setMenuOpen(!menuOpen)}
          tabIndex={0}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 sm:hidden bg-surface/90 dark:bg-surface-dark/90 rounded-lg py-4 px-4 space-y-3 shadow-lg backdrop-blur-sm border border-primary/20 dark:border-primary-dark/20"
        >
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
              className="block text-center text-text-main dark:text-text-main-dark hover:text-primary dark:hover:text-primary-dark transition font-mono text-sm"
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
