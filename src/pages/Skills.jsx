import { motion } from "framer-motion";
import { skills } from "../data/skills";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="min-h-screen px-4 md:px-6 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-serif text-center text-primary dark:text-primary-dark mb-2">
          tech_stack()
        </h2>
        <p className="text-center text-text-main/60 dark:text-text-main-dark/60 font-mono text-sm mb-12">
          $ npm run list-skills
        </p>
      </motion.div>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((group, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              translateY: -6,
              boxShadow: "0 20px 40px rgba(0, 70, 140, 0.1)"
            }}
            className="group relative bg-surface dark:bg-surface-dark border-2 border-primary/20 dark:border-primary-dark/20 p-6 rounded-lg hover:border-primary dark:hover:border-primary-dark transition-all duration-300 overflow-hidden"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            {/* Terminal-style header bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity" />

            <h3 className="text-lg font-serif text-text-main dark:text-text-main-dark mb-4 flex items-center gap-2">
              <span className="text-primary dark:text-primary-dark">→</span>
              {group.category}
            </h3>

            <ul className="space-y-3">
              {group.items.map((skill, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 4 }}
                  className="transition-all"
                >
                  <div className="flex items-start gap-2">
                    <span className="text-primary dark:text-primary-dark text-xs mt-1">▸</span>
                    <div>
                      <span className="font-mono font-semibold text-primary dark:text-primary-dark">
                        {skill.name}
                      </span>
                      <p className="text-xs text-text-main/70 dark:text-text-main-dark/70 mt-0.5">
                        {skill.desc}
                      </p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>

            {/* Corner accent */}
            <div className="absolute bottom-0 right-0 w-6 h-6 border-l-2 border-t-2 border-primary/30 group-hover:border-primary/60 transition-all" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
