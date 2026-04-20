import { motion } from "framer-motion";

const Footer = () => {
  const links = [
    { name: "GitHub", url: "https://github.com/harshgupta2125" },
    { name: "Email", url: "mailto:harsh2125gupta@gmail.com" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/guptaharsh000/" },
  ];

  return (
    <footer className="bg-surface dark:bg-surface-dark text-text-main dark:text-text-main-dark py-8 px-4 border-t-2 border-primary/20 dark:border-primary-dark/20 relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-dark to-primary opacity-50" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="text-center md:text-left"
          >
            <h3 className="font-serif text-xl text-primary dark:text-primary-dark mb-1">
              Harsh Gupta
            </h3>
            <p className="text-xs font-mono text-text-main/60 dark:text-text-main-dark/60">
              Python Backend Developer & Systems Architect
            </p>
          </motion.div>

          {/* Quick Links */}
          <div className="text-center">
            <p className="text-xs font-mono text-text-main/60 dark:text-text-main-dark/60 mb-3">
              $ quick_links
            </p>
            <div className="flex justify-center gap-4">
              {links.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: "var(--primary)" }}
                  className="text-sm font-mono text-text-main/70 dark:text-text-main-dark/70 hover:text-primary dark:hover:text-primary-dark transition"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Year */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="text-center md:text-right"
          >
            <p className="text-xs font-mono text-text-main/60 dark:text-text-main-dark/60">
              © {new Date().getFullYear()} • All rights reserved
            </p>
            <p className="text-xs font-mono text-text-main/50 dark:text-text-main-dark/50 mt-2">
              Built with React • Styled with Tailwind
            </p>
          </motion.div>
        </div>

        {/* Bottom decoration */}
        <div className="pt-6 border-t border-primary/20 dark:border-primary-dark/20">
          <p className="text-center text-xs font-mono text-text-main/50 dark:text-text-main-dark/50">
            $ whoami && portfolio.build --success
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
