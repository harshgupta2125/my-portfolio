import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen px-4 md:px-6 py-20" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-serif text-center text-primary dark:text-primary-dark mb-12">Tech Stack</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((group, idx) => (
          <div
            key={idx}
            className="bg-surface dark:bg-surface-dark border border-text-main/10 dark:border-text-main-dark/10 p-6 rounded-xl hover:shadow-md transition"
          >
            <h3 className="text-lg font-serif text-text-main dark:text-text-main-dark mb-4">{group.category}</h3>
            <ul className="space-y-3">
              {group.items.map((skill, i) => (
                <li key={i}>
                  <span className="font-medium text-primary dark:text-primary-dark">{skill.name}</span>
                  <p className="text-sm text-text-main/70 dark:text-text-main-dark/70">{skill.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
