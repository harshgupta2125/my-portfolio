import { motion } from "framer-motion";

const Achievements = () => {
  const achievements = [
    {
      icon: "🏆",
      title: "Hacktoberfest 2025",
      subtitle: "Top 500 Global Contributor",
      description: "Recognized among the top 500 contributors worldwide for open-source contributions."
    },
    {
      icon: "🎖️",
      title: "GirlScript Summer of Code",
      subtitle: "Top 150 Contributor & 2026 Selectee",
      description: "Achieved Top 150 ranking in 2024 Extended and selected as a 2026 participant."
    }
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="achievements" className="min-h-screen px-4 md:px-6 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-serif text-center text-primary dark:text-primary-dark mb-2">
          Open-Source Achievements
        </h2>
        <p className="text-center text-text-main/70 dark:text-text-main-dark/70 mb-12 font-mono text-sm">
          $ cat achievements.txt
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {achievements.map((achievement, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ scale: 1.03, translateY: -8 }}
            className="relative bg-surface dark:bg-surface-dark border-2 border-primary/30 dark:border-primary-dark/30 p-6 rounded-lg hover:border-primary dark:hover:border-primary-dark transition-all duration-300 overflow-hidden group"
          >
            {/* Terminal accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="text-5xl mb-3">{achievement.icon}</div>

            <h3 className="text-xl font-serif text-text-main dark:text-text-main-dark mb-1">
              {achievement.title}
            </h3>
            <p className="text-primary dark:text-primary-dark font-semibold text-sm mb-3">
              {achievement.subtitle}
            </p>
            <p className="text-text-main/70 dark:text-text-main-dark/70 text-sm leading-relaxed">
              {achievement.description}
            </p>

            {/* Terminal corner accent */}
            <div className="absolute bottom-0 right-0 w-8 h-8 border-l-2 border-t-2 border-primary/30 group-hover:border-primary/60 transition-all"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Achievements;
