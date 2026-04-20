
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-4 md:px-6 py-20">
      
      {/* Image Section */}
      <motion.div 
        className="w-full md:w-1/2 flex justify-center"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          whileHover={{ scale: 1.02, rotateZ: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-300" />
          <img
            src="/Profile.jpg"
            alt="Harsh Gupta"
            className="relative rounded-2xl w-72 h-72 object-cover shadow-2xl border-2 border-primary/40 dark:border-primary-dark/40 group-hover:border-primary dark:group-hover:border-primary-dark transition-all duration-300"
          />
        </motion.div>
      </motion.div>

      {/* Text Section */}
      <motion.div 
        className="w-full md:w-1/2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          variants={itemVariants}
          className="bg-surface dark:bg-surface-dark border-2 border-primary/30 dark:border-primary-dark/30 p-8 rounded-lg hover:border-primary dark:hover:border-primary-dark transition-all duration-300 group relative overflow-hidden"
        >
          {/* Terminal header accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-dark to-primary" />

          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

          <h2 className="text-3xl font-serif mb-6 text-primary dark:text-primary-dark relative z-10 flex items-center gap-2">
            <span className="text-2xl">↓</span>
            About Me
          </h2>

          <div className="space-y-4 relative z-10 text-text-main/85 dark:text-text-main-dark/85 leading-relaxed">
            <p>
              I am a backend developer specializing in <strong className="text-primary dark:text-primary-dark">Python, API architecture (FastAPI/Django), and robust data pipelines.</strong> As a BCA student ('26), I focus on system design, database architecture, and solving complex problems using modern development workflows. Think of me as the one who makes sure the backend doesn't become the plot twist nobody wanted.
            </p>

            <p>
              I am deeply invested in the open-source community, regularly navigating large codebases (yes, it's like reading a screenplay with 10,000 pages), and was recently recognized as a <motion.span 
                className="inline-block px-2 py-1 bg-primary/10 dark:bg-primary-dark/10 rounded border border-primary/50 dark:border-primary-dark/50"
                whileHover={{ scale: 1.05 }}
              >
                <strong className="text-primary dark:text-primary-dark">🏆 Top 500 Contributor during Hacktoberfest 2025</strong>
              </motion.span>
              . Beyond that, I'm a <strong className="text-primary dark:text-primary-dark">Top 150 Contributor</strong> for GirlScript Summer of Code 2024 Extended and a <strong className="text-primary dark:text-primary-dark">2026 Selectee</strong>.
            </p>

            <p>
              I build to solve real-world problems—from architecting highly downloaded Python libraries to engineering NLP-driven data pipelines. My expertise spans <span className="font-mono text-sm bg-primary/5 dark:bg-primary-dark/5 px-2 py-1 rounded">Python, FastAPI, Django, REST APIs, Data pipelines, and modern DevOps practices.</span>
            </p>
          </div>

          {/* Corner accent */}
          <div className="absolute bottom-0 right-0 w-8 h-8 border-l-2 border-t-2 border-primary/30 group-hover:border-primary/60 transition-all" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
