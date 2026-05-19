import { motion } from "framer-motion";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cursorVariants = {
    blink: {
      opacity: [1, 1, 0, 0],
      transition: { duration: 1, repeat: Infinity },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern" style={{
          backgroundImage: `
            linear-gradient(90deg, currentColor 1px, transparent 1px),
            linear-gradient(0deg, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Terminal window container */}
      <motion.div
        className="relative z-10 w-full max-w-3xl px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="bg-surface dark:bg-surface-dark border-2 border-primary/40 dark:border-primary-dark/40 rounded-lg shadow-2xl overflow-hidden backdrop-blur-sm"
          whileHover={{ borderColor: "rgba(0, 70, 140, 0.8)" }}
          transition={{ duration: 0.3 }}
        >
          {/* Terminal header */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary-dark/10 dark:to-primary-dark/5 px-4 py-3 border-b border-primary/20 dark:border-primary-dark/20 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400/70"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400/70"></div>
              <div className="w-3 h-3 rounded-full bg-green-400/70"></div>
            </div>
            <span className="text-xs font-mono text-text-main/60 dark:text-text-main-dark/60 ml-auto">
              harsh@portfolio — zsh
            </span>
          </div>

          {/* Terminal content */}
          <div className="p-8 md:p-12 font-mono">
            {/* Command prompt */}
            <motion.div variants={itemVariants} className="mb-6">
              <p className="text-text-main/60 dark:text-text-main-dark/60 text-sm mb-2">
                $ whoami
              </p>
              <motion.div
                className="flex items-center gap-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h2 
                  variants={itemVariants}
                  className="text-4xl md:text-5xl font-serif text-text-main dark:text-text-main-dark"
                >
                  Harsh Gupta 
                </motion.h2>
                <motion.span
                  className="text-3xl md:text-4xl text-primary dark:text-primary-dark"
                  variants={cursorVariants}
                >
                  |
                </motion.span>
              </motion.div>
            </motion.div>

            {/* Role info */}
            <motion.div variants={itemVariants} className="mb-6">
              <p className="text-text-main/60 dark:text-text-main-dark/60 text-sm mb-2">
                $ describe --role
              </p>
              <p className="text-lg md:text-xl text-primary dark:text-primary-dark font-semibold">
                Python Backend Developer & Systems Architect
              </p>
            </motion.div>

            {/* Mission statement */}
            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-text-main/60 dark:text-text-main-dark/60 text-sm mb-2">
                $ cat mission.txt
              </p>
              <p className="text-base md:text-lg text-text-main/75 dark:text-text-main-dark/75 leading-relaxed">
                Building scalable APIs, robust data pipelines, and high-impact open-source tools. Basically, I make sure your data doesn't get lost in space (Interstellar vibes 🚀).
              </p>
            </motion.div>

            {/* Action buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-3 pt-6 border-t border-primary/20 dark:border-primary-dark/20"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, x: 4 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-md bg-primary text-white font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
              >
                <span>→</span> Explore Projects
              </motion.a>
              <motion.a
                href="/Harsh-Gupta.pdf"
                download
                whileHover={{ scale: 1.05, x: 4 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-md border-2 border-primary text-primary dark:text-primary-dark dark:border-primary-dark hover:bg-primary hover:text-white dark:hover:bg-primary-dark dark:hover:text-text-main-dark font-semibold transition-all duration-300 inline-flex items-center gap-2"
              >
                <span>⬇</span> Resume
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating code elements - decorative */}
        <motion.div
          className="absolute -bottom-20 -left-20 text-primary/5 dark:text-primary-dark/5 text-8xl font-mono font-bold pointer-events-none"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          {'{ }'}
        </motion.div>
        <motion.div
          className="absolute -top-20 -right-20 text-primary/5 dark:text-primary-dark/5 text-8xl font-mono font-bold pointer-events-none"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          {'< >'}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
