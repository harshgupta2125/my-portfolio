import { motion } from "framer-motion";

const cardVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const ProjectCard = ({ title, description, tech, github, demo, image }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className="bg-surface dark:bg-surface-dark border border-text-main/10 dark:border-text-main-dark/10 p-5 rounded-xl shadow-sm hover:shadow-md"
    >
      <h3 className="text-xl font-serif text-text-main dark:text-text-main-dark mb-2">{title}</h3>
      <p className="text-sm text-text-main/80 dark:text-text-main-dark/80 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, idx) => (
          <motion.span
            key={idx}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="text-xs px-2 py-1 rounded-full border border-primary text-primary bg-surface dark:bg-surface-dark"
          >
            {t}
          </motion.span>
        ))}
      </div>

      <div className="flex gap-3">
        {demo && (
          <motion.a
            href={demo}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-4 py-2 text-sm rounded-md bg-primary text-white"
          >
            Live Demo
          </motion.a>
        )}
        {github && (
          <motion.a
            href={github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-4 py-2 text-sm rounded-md border border-primary text-primary hover:bg-primary hover:text-white"
          >
            View Code
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
