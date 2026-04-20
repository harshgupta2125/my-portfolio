import { motion } from "framer-motion";

const cardVariants = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

const ProjectCard = ({ title, description, tech, github, demo, image }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="group relative bg-surface dark:bg-surface-dark border-2 border-primary/20 dark:border-primary-dark/20 p-6 rounded-lg hover:border-primary dark:hover:border-primary-dark transition-all duration-300 overflow-hidden"
    >
      {/* Terminal header bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      {/* Title with terminal prefix */}
      <div className="relative z-10 mb-3">
        <h3 className="text-xl font-serif text-text-main dark:text-text-main-dark mb-1 flex items-center gap-2">
          <span className="text-primary dark:text-primary-dark font-bold">▸</span>
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-sm text-text-main/80 dark:text-text-main-dark/80 mb-4 leading-relaxed relative z-10">
        {description}
      </p>

      {/* Tech tags with enhanced styling */}
      <div className="flex flex-wrap gap-2 mb-5 relative z-10">
        {tech.map((t, idx) => (
          <motion.span
            key={idx}
            whileHover={{ 
              scale: 1.1,
              backgroundColor: "rgba(0, 70, 140, 0.1)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="text-xs px-3 py-1.5 rounded-full border-2 border-primary text-primary dark:border-primary-dark dark:text-primary-dark bg-surface dark:bg-surface-dark font-mono font-semibold hover:cursor-default"
          >
            {t}
          </motion.span>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 relative z-10 pt-4 border-t border-primary/10 dark:border-primary-dark/10">
        {demo && (
          <motion.a
            href={demo}
            target="_blank"
            rel="noreferrer"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 16px rgba(0, 70, 140, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-1 px-4 py-2 text-sm rounded-md bg-primary text-white hover:opacity-90 transition-all font-semibold"
          >
            <span>→</span> Live Demo
          </motion.a>
        )}
        {github && (
          <motion.a
            href={github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(0, 70, 140, 0.1)",
              borderColor: "rgb(0, 70, 140)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-1 px-4 py-2 text-sm rounded-md border-2 border-primary text-primary dark:border-primary-dark dark:text-primary-dark hover:bg-primary hover:text-white dark:hover:bg-primary-dark dark:hover:text-text-main-dark transition-all font-semibold"
          >
            <span>⟨/⟩</span> Code
          </motion.a>
        )}
      </div>

      {/* Corner accent */}
      <div className="absolute bottom-0 right-0 w-8 h-8 border-l-2 border-t-2 border-primary/30 group-hover:border-primary/60 transition-all" />
    </motion.div>
  );
};

export default ProjectCard;
