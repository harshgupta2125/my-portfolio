const Navbar = () => {
    return (
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] md:w-[80%] bg-white/10 backdrop-blur-md border border-white/10 shadow-lg rounded-full px-6 py-3 flex justify-between items-center text-white">
        <h1 className="text-lg font-bold tracking-wide text-teal-400">Harsh.dev</h1>
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li><a href="#about" className="hover:text-purple-400 transition">About</a></li>
          <li><a href="#projects" className="hover:text-purple-400 transition">Projects</a></li>
          <li><a href="#skills" className="hover:text-purple-400 transition">Skills</a></li>
          <li><a href="#contact" className="hover:text-purple-400 transition">Contact</a></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  